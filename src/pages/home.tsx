import React from 'react'
import { Alert, Pressable, Text, View } from 'react-native'

import { styled } from 'nativewind'

const Wrapper = styled(View)
const BoxContainer = styled(View)
const StyledText = styled(Text)
const StyledPressable = styled(Pressable)

export default function Home() {
	const createTwoButtonAlert = () =>
		Alert.alert('Alert Title', 'My Alert Msg', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{ text: 'OK', onPress: () => console.log('OK Pressed') },
		])

	const loginWithFacebook = () => {
		console.log('Button pressed')
	}

	return (
		<Wrapper className='flex-1 justify-center'>
			<StyledText
				selectable={false}
				className='text-slate-800 text-lg bg-red-100'
			>
				Clique Aqui 🎉
			</StyledText>
			<BoxContainer className='bg-green-300'>
				<StyledPressable
					className='bg-red-300 rounded-lg shadow-lg shadow-black px-3 py-4 hover:bg-slate-300 active:bg-slate-500'
					onPress={createTwoButtonAlert}
				>
					<StyledText
						selectable={false}
						className='text-slate-800 text-lg'
					>
						Clique Aqui 🎉
					</StyledText>
				</StyledPressable>
			</BoxContainer>
			{/* <Box className='bg-orange-300/80 p-4 rounded-lg min-h-[30%]'>
				<MaterialCommunityIcons
					name='calendar-week'
					size={32}
				/>
				<MaterialCommunityIcons
					name='calendar-today'
					size={32}
				/>
				<MaterialCommunityIcons
					name='calendar-month'
					size={32}
				/>
				<FontAwesome.Button
					name='facebook'
					backgroundColor='#3b5998'
					onPress={loginWithFacebook}
				>
					Login with Facebook
				</FontAwesome.Button>
			</Box> */}
		</Wrapper>
	)
}
