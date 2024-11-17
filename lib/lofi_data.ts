import { Cloud, Wind, Coffee, Users, Monitor, Power } from 'lucide-react'
import { Channel, SoundEffect } from '@/types/lofi'

export const DEFAULT_CHANNELS: Channel[] = [
  {
    name: 'Lofi Girl',
    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    description: 'Beats to relax/study to',
    creator: 'Lofi Girl',
  },
  {
    name: 'Chillhop Radio',
    url: 'https://www.youtube.com/watch?v=5yx6BWlEVcY',
    description: 'jazzy & lofi hip hop beats',
    creator: 'Chillhop Music',
  },
  {
    name: 'Chilled Raccoon',
    url: 'https://www.youtube.com/watch?v=7NOSDKb0HlU',
    description: 'late night lofi mix',
    creator: 'Chilled Raccoon',
  },
  {
    name: 'Smooth Jazz',
    url: 'https://www.youtube.com/watch?v=HhqWd3Axq9Y',
    description: 'warm jazz music at coffee shop',
    creator: 'Relax Jazz Cafe',
  },
  {
    name: 'Tokyo night drive',
    url: 'https://www.youtube.com/watch?v=Lcdi9O2XB4E',
    description: 'lofi hiphop + chill + beats',
    creator: 'Tokyo Tones',
  },
  {
    name: 'Japan Cafe Vibe',
    url: 'https://www.youtube.com/watch?v=bRnTGwCbr3E',
    description: 'Lofi Music to sleep,relax,study...',
    creator: 'Healing Me',
  },
]

export const channels: Channel[] = [...DEFAULT_CHANNELS]

export const soundEffects: SoundEffect[] = [
  {
    id: 'rain',
    name: 'Rain',
    icon: Cloud,
    file: '/sounds/rain.mp3',
  },
  {
    id: 'wind',
    name: 'Soft Wind',
    icon: Wind,
    file: '/sounds/wind.mp3',
  },
  {
    id: 'cafe',
    name: 'Cafe Ambience',
    icon: Coffee,
    file: '/sounds/cafe.mp3',
  },
  {
    id: 'fireplace',
    name: 'Fireplace Crackling',
    icon: Users,
    file: '/sounds/fireplace.mp3',
  },
  {
    id: 'keyboard',
    name: 'Keyboard Typing',
    icon: Monitor,
    file: '/sounds/keyboard.mp3',
  },
  {
    id: 'whitenoise',
    name: 'White Noise',
    icon: Power,
    file: '/sounds/whitenoise.mp3',
  },
]
