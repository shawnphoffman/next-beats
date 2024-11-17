import React from 'react'
import {
  SkipBack,
  Play,
  Pause,
  SkipForward,
  VolumeX,
  Volume1,
  Volume2,
} from 'lucide-react'

interface PlaybackControlsProps {
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  volume: number
  setVolume: (vol: number) => void
  changeChannel: (direction: 'next' | 'prev') => void
}

const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  isPlaying,
  setIsPlaying,
  volume,
  setVolume,
  changeChannel,
}) => (
  <div className="flex items-center justify-between">
    {/* Left Side - Playback Controls */}
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeChannel('prev')}
        className="rounded-[var(--lofi-button-radius)] p-2 text-[var(--lofi-text-primary)] shadow-[var(--lofi-card-shadow)] hover:bg-[var(--lofi-card-hover)]"
      >
        <SkipBack size={16} />
      </button>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="rounded-[var(--lofi-button-radius)] p-2 text-[var(--lofi-text-primary)] shadow-[var(--lofi-card-shadow)] hover:bg-[var(--lofi-card-hover)]"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
      <button
        onClick={() => changeChannel('next')}
        className="rounded-[var(--lofi-button-radius)] p-2 text-[var(--lofi-text-primary)] shadow-[var(--lofi-card-shadow)] hover:bg-[var(--lofi-card-hover)]"
      >
        <SkipForward size={16} />
      </button>
    </div>

    {/* Right Side - Volume Control */}
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setVolume(volume === 0 ? 0.7 : 0)}
        className="rounded-[var(--lofi-button-radius)] p-2 text-[var(--lofi-text-primary)] shadow-[var(--lofi-card-shadow)] hover:bg-[var(--lofi-card-hover)]"
      >
        {volume === 0 ? (
          <VolumeX size={16} />
        ) : volume < 0.5 ? (
          <Volume1 size={16} />
        ) : (
          <Volume2 size={16} />
        )}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="w-16 accent-[var(--lofi-accent)]"
      />
    </div>
  </div>
)

export default PlaybackControls
