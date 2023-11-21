import React, { useState } from 'react'
import { ImageBackground, View } from 'react-native'

import { styled } from 'nativewind'

const BgImage = styled(ImageBackground)
const StyledView = styled(View)

import { StatusBar } from 'expo-status-bar'
import { BackProps } from './type'

export default function ContainerBackground({ children, bgImage }: BackProps) {
	const [imageBackground, setImageBackground] = useState(bgImage)
	return (
		<BgImage
			source={imageBackground}
			className='object-cover justify-center'
		>
			<StatusBar style='auto' />
			<StyledView className='container items-center justify-center h-full w-full'>{children}</StyledView>
		</BgImage>
	)
}
