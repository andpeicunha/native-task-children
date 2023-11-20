import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Alert, ImageBackground, Text, View } from 'react-native'

import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { styled } from 'nativewind'
import { Pressable } from 'react-native'

const StyledPressable = styled(Pressable)
const StyledText = styled(Text)
const StyledView = styled(View)
const Box = styled(View)
const Wrapper = styled(View)
const BgImage = styled(ImageBackground)

export default function App() {
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

	const image = { uri: '../src/img/desenho-bg-1.jpeg' }

	return (
		<BgImage
			source={require('./src/img/desenho-bg-2.jpeg')}
			className='flex-1 object-cover justify-center'
		>
			<StatusBar style='dark' />
			<StyledView className='flex-1 items-center justify-center h-full w-full'>
				<Wrapper className='grid grid-flow-col auto-cols-max justify-center gap-4 h-full min-w-[90%]'>
					<Box className='bg-green-300/80 p-4 rounded-lg min-h-[30%] justify-center'>
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
					</Box>
					<Box className='bg-orange-300/80 p-4 rounded-lg min-h-[30%]'>
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
					</Box>
				</Wrapper>
			</StyledView>
		</BgImage>
	)
}
