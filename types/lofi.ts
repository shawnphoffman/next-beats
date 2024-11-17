export interface Channel {
  originalIndex?: number
  name: string
  url: string
  description: string
  creator: string
  isCustom?: boolean
}

export interface SoundEffect {
  id: string
  name: string
  icon: any
  file: string
  isCustom?: boolean
  isYoutube?: boolean
}

export interface CustomSoundEffect {
  id: string
  name: string
  file: string
  isCustom?: boolean
  isYoutube?: boolean
}
