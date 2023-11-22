import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const ButtonNavigate = styled.Button`
	border-radius: 5px;
	padding: 10px 15px;
	background-color: red;
`

export function HomeScreen({ navigation }: any) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<ButtonNavigate
				title='Go to Details'
				onPress={() => navigation.navigate('Details')}
			/>
		</View>
	)
}

export function DetailsScreen({ route, navigation }: any) {
	const itemId = route.params ? route.params : null

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Text>itemId: {JSON.stringify(itemId)}</Text>

			<ButtonNavigate
				title='Go to Details... again'
				onPress={() =>
					navigation.push('Details', {
						itemId: Math.floor(Math.random() * 100),
					})
				}
			/>
			<ButtonNavigate
				title='Go to Home'
				onPress={() => navigation.navigate('Home')}
			/>
			<ButtonNavigate
				title='Go back'
				onPress={() => navigation.goBack()}
			/>
		</View>
	)
}
