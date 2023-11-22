import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaperProvider } from 'react-native-paper'

import { DetailsScreen, HomeScreen } from 'src/pages/home'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<PaperProvider>
				<Stack.Navigator>
					<Stack.Screen
						name='Home'
						component={HomeScreen}
						options={{ title: 'Overview', animation: 'simple_push' }}
					/>
					<Stack.Screen
						name='Details'
						component={DetailsScreen}
						options={{ title: 'Details', animation: 'simple_push' }}
					/>
				</Stack.Navigator>
			</PaperProvider>
		</NavigationContainer>
	)
}
