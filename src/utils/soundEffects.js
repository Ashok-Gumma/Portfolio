// Zero-Dependency Web Audio API Sound Effects Synthesizer for High-Impact Paper Tearing & Slicing
let audioCtx = null;

export function getAudioContext() {
  if (typeof window === 'undefined') return null;
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
  } catch (e) {}
  return audioCtx;
}

// Authentic High-Volume Paper Tearing & Slicing Sound
export const playPaperTear = (duration = 0.14, volume = 0.85) => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const sampleRate = ctx.sampleRate;
    const bufferSize = Math.floor(sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, sampleRate);
    const output = buffer.getChannelData(0);

    // Generate intense paper fiber micro-fractures (tearing crackles & ripping crunch)
    let lastVal = 0;
    for (let i = 0; i < bufferSize; i++) {
      const progress = i / bufferSize;
      const envelope = Math.sin(progress * Math.PI);
      // High-density granular micro-pops for real paper shearing texture
      const crackle = Math.random() < 0.28 ? (Math.random() * 2 - 1) * 2.2 : 0;
      const noise = (Math.random() * 2 - 1) * 1.2;
      lastVal = lastVal * 0.25 + (noise + crackle) * 0.75;
      output[i] = Math.max(-1, Math.min(1, lastVal * envelope * 1.5));
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    // Resonant bandpass filter tuned to crisp tearing paper
    const filter1 = ctx.createBiquadFilter();
    filter1.type = 'bandpass';
    filter1.frequency.setValueAtTime(1800 + Math.random() * 800, now);
    filter1.Q.setValueAtTime(2.0, now);

    // Highpass filter for razor-sharp fiber snap
    const filter2 = ctx.createBiquadFilter();
    filter2.type = 'highpass';
    filter2.frequency.setValueAtTime(600, now);

    // Master Gain (Boosted for maximum clarity and punch)
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(volume, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

    source.connect(filter1);
    filter1.connect(filter2);
    filter2.connect(gainNode);
    gainNode.connect(ctx.destination);

    source.start(now);
  } catch (e) {
    // Non-blocking
  }
};

// Full High-Impact Paper Rip & Separation sound
export const playFullPaperRip = () => {
  try {
    playPaperTear(0.38, 0.95);
    setTimeout(() => {
      playPaperTear(0.3, 0.85);
    }, 50);
  } catch (e) {}
};

export const playSound = (type = 'hover', enabled = true) => {
  if (!enabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.06);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'success') {
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(783.99, now + 0.12);
      gain2.gain.setValueAtTime(0.09, now + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      osc.start(now);
      osc.stop(now + 0.25);
      osc2.start(now + 0.12);
      osc2.stop(now + 0.35);
    } else if (type === 'whoosh') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    }
  } catch (e) {}
};
