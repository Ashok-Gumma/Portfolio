import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, Leaf, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

const YOUTUBE_VIDEO_ID = 'oYXXbtR04x0';

export const AmbientAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(45);
  const [isReady, setIsReady] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);

  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const hasAttemptedAutoplayRef = useRef(false);

  // Initialize YouTube IFrame Player
  useEffect(() => {
    let isCancelled = false;

    const initPlayer = () => {
      if (isCancelled || playerRef.current) return;
      if (!window.YT || !window.YT.Player) return;

      const playerElement = document.getElementById('yt-ambient-player-node');
      if (!playerElement) return;

      try {
        playerRef.current = new window.YT.Player('yt-ambient-player-node', {
          height: '1',
          width: '1',
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID, // Required for loop to work
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            enablejsapi: 1,
          },
          events: {
            onReady: (event) => {
              if (isCancelled) return;
              setIsReady(true);
              try {
                event.target.setVolume(volume);
                // Attempt autoplay immediately
                event.target.playVideo();
                hasAttemptedAutoplayRef.current = true;
              } catch (e) {
                console.log('Autoplay blocked by browser policy, waiting for user gesture.');
              }
            },
            onStateChange: (event) => {
              if (isCancelled) return;
              // YT.PlayerState: 1 = PLAYING, 2 = PAUSED, 0 = ENDED, 3 = BUFFERING
              if (event.data === 1) {
                setIsPlaying(true);
                setHasStartedOnce(true);
              } else if (event.data === 2) {
                setIsPlaying(false);
              } else if (event.data === 0) {
                // Loop fallback
                try {
                  event.target.playVideo();
                } catch (e) {}
              }
            },
            onError: (err) => {
              console.warn('Ambient player notification:', err);
            },
          },
        });
      } catch (err) {
        console.warn('Failed to initialize YouTube player:', err);
      }
    };

    // Load YouTube IFrame API if not present
    if (!window.YT || !window.YT.Player) {
      const existingScript = document.getElementById('youtube-iframe-api-script');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }

      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prevCallback === 'function') {
          try { prevCallback(); } catch (e) {}
        }
        initPlayer();
      };
    } else {
      initPlayer();
    }

    return () => {
      isCancelled = true;
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
      }
    };
  }, []);

  // Global user gesture activation to comply with browser autoplay policy
  useEffect(() => {
    const handleUserGesture = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        try {
          if (isMuted) {
            playerRef.current.unMute();
            setIsMuted(false);
          }
          playerRef.current.playVideo();
          setIsPlaying(true);
          setHasStartedOnce(true);
        } catch (e) {
          console.log('Gesture play attempt caught:', e);
        }
      }
    };

    // Listen for custom preloader or first click / touch / keydown
    const handleCustomStart = () => {
      handleUserGesture();
    };

    window.addEventListener('start-portfolio-audio', handleCustomStart);
    window.addEventListener('pointerdown', handleUserGesture, { once: true });
    window.addEventListener('keydown', handleUserGesture, { once: true });
    window.addEventListener('touchstart', handleUserGesture, { once: true });

    return () => {
      window.removeEventListener('start-portfolio-audio', handleCustomStart);
      window.removeEventListener('pointerdown', handleUserGesture);
      window.removeEventListener('keydown', handleUserGesture);
      window.removeEventListener('touchstart', handleUserGesture);
    };
  }, [isMuted]);

  // Toggle Play / Pause
  const togglePlay = (e) => {
    e.stopPropagation();
    if (!playerRef.current) return;

    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        if (isMuted) {
          playerRef.current.unMute();
          setIsMuted(false);
        }
        playerRef.current.playVideo();
        setIsPlaying(true);
        setHasStartedOnce(true);
      }
    } catch (e) {
      console.warn('Playback toggle error:', e);
    }
  };

  // Toggle Mute / Unmute
  const toggleMute = (e) => {
    e.stopPropagation();
    if (!playerRef.current) return;

    try {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch (e) {
      console.warn('Mute toggle error:', e);
    }
  };

  // Adjust Volume
  const handleVolumeChange = (e) => {
    const newVol = parseInt(e.target.value, 10);
    setVolume(newVol);
    if (!playerRef.current) return;

    try {
      playerRef.current.setVolume(newVol);
      if (newVol === 0) {
        setIsMuted(true);
        playerRef.current.mute();
      } else if (isMuted) {
        setIsMuted(false);
        playerRef.current.unMute();
      }
    } catch (e) {
      console.warn('Volume set error:', e);
    }
  };

  return (
    <>
      {/* Hidden YouTube IFrame Container (1px offscreen with active layout so browser allows playback) */}
      <div
        ref={containerRef}
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: '1px',
          height: '1px',
          opacity: 0.001,
          pointerEvents: 'none',
          zIndex: -9999,
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <div id="yt-ambient-player-node" />
      </div>

      {/* Floating Nature Soundscape UI Widget */}
      <motion.div
        className={`ambient-audio-pill ${isPlaying ? 'is-playing' : 'is-paused'} ${isExpanded ? 'is-expanded' : ''}`}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {/* Animated Sound Wave Equalizer Bars */}
        <button
          className="ambient-eq-btn"
          onClick={togglePlay}
          title={isPlaying ? 'Pause soundscape' : 'Play Silent Flute soundscape'}
          aria-label={isPlaying ? 'Pause soundscape' : 'Play Silent Flute soundscape'}
        >
          <div className="ambient-eq-visualizer">
            <span className={`eq-bar eq-bar-1 ${isPlaying ? 'animate' : ''}`} />
            <span className={`eq-bar eq-bar-2 ${isPlaying ? 'animate' : ''}`} />
            <span className={`eq-bar eq-bar-3 ${isPlaying ? 'animate' : ''}`} />
            <span className={`eq-bar eq-bar-4 ${isPlaying ? 'animate' : ''}`} />
          </div>
        </button>

        {/* Track Details & Status */}
        <div className="ambient-track-info" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="ambient-title-row">
            <span className="ambient-live-dot" />
            <span className="ambient-title">Silent Flute</span>
            <span className="ambient-tag">THE NEP TUNES</span>
          </div>
          <div className="ambient-sub-row">
            <span className="ambient-nature-note">
              {isPlaying ? 'Bamboo meditation stream active 🌿' : 'Soundscape paused &bull; Click play'}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="ambient-controls-group">
          {/* Play / Pause Button */}
          <button
            className={`ambient-ctrl-btn ${!isPlaying && !hasStartedOnce ? 'pulse-prompt' : ''}`}
            onClick={togglePlay}
            title={isPlaying ? 'Pause' : 'Play flute music'}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
          </button>

          {/* Mute / Unmute Button */}
          <button
            className="ambient-ctrl-btn"
            onClick={toggleMute}
            onMouseEnter={() => setShowVolumeSlider(true)}
            title={isMuted ? 'Unmute' : 'Mute'}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>

          {/* Volume Slider Drawer */}
          <AnimatePresence>
            {showVolumeSlider && (
              <motion.div
                className="ambient-volume-slider-box"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 70 }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                onMouseLeave={() => setShowVolumeSlider(false)}
              >
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="ambient-slider-input"
                  aria-label="Soundscape Volume"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default AmbientAudio;
