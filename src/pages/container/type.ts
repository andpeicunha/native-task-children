import { ReactNode } from 'react'
import { ImageSourcePropType } from 'react-native'

export type BackProps = {
	children: ReactNode
	/**
	 * Define qual imagem de fundo será usada, é preciso fazer o import @argument bgImage={IMAGES.logos.bg2}
	 * @requires import IMAGES from 'src/assets'
	 */
	bgImage?: ImageSourcePropType
}
