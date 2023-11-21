import React, { useState } from 'react'

import { styled } from 'nativewind'
import { ImageBackground, ImageSourcePropType, View } from 'react-native'

const BgImage = styled(ImageBackground)
const StyledView = styled(View)

import { BackProps } from './type'

export default function ContainerBackground({ children, bgImage }: BackProps) {
	const [imageBackground, setImageBackground] = useState(bgImage)

	if (bgImage) {
		return (
			<BgImage
				source={imageBackground as ImageSourcePropType}
				className='flex-1 object-cover justify-center'
			>
				<StyledView className='flex-1 items-center justify-center h-full w-full'>{children}</StyledView>
			</BgImage>
		)
	}

	return <StyledView className='flex-1 items-center justify-center h-full w-full'>{children}</StyledView>
}