import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Alert, Text, View } from 'react-native'

import { styled } from 'nativewind'
import { Pressable } from 'react-native'

const StyledPressable = styled(Pressable)
const StyledText = styled(Text)
const StyledView = styled(View)

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

	return (
		<StyledView className='flex-1 items-center justify-center bg-red-200'>
			<StatusBar style='auto' />

			<StyledPressable
				className={`
      bg-red-300
      rounded-lg
      shadow-lg shadow-black
      px-3 py-4
      hover:bg-slate-300
      active:bg-slate-500
    `}
				onPress={createTwoButtonAlert}
			>
				<StyledText
					selectable={false}
					className='text-slate-800 text-lg'
				>
					Hover and click me! 🎉
				</StyledText>
			</StyledPressable>
		</StyledView>
	)
}
