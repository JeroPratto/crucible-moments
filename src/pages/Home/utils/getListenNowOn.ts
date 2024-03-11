import { AmazonIcon } from '@/icons/amazon-icon'
import { AppleIcon } from '@/icons/apple-icon'
import { GoogleIcon } from '@/icons/google-icon'
import { SpotifyIcon } from '@/icons/spotify-icon'
import { YoutubeIcon } from '@/icons/youtube-icon'
import { ListenNowList } from '@/types/ListenNowList'

export const getListenNowOn = (): ListenNowList[] => {
	const list = [
		{ icon: AppleIcon, label: 'APPLE PODCASTS' },
		{ icon: SpotifyIcon, label: 'SPOTIFY' },
		{ icon: YoutubeIcon, label: 'YOUTUBE' },
		{ icon: GoogleIcon, label: 'GOOGLE PLAY' },
		{ icon: AmazonIcon, label: 'AMAZON MUSIC' },
	]
	return list
}
