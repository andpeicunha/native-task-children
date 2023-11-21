import * as React from 'react'
import { Button, Divider, Menu } from 'react-native-paper'
import styled from 'styled-components/native'

const RootContent = styled.View`
	padding-top: 5px;
	flex: 1;
	background-color: azure;
	align-items: 'center';
	justify-content: 'center';
`

const MenuComponent = () => {
	const [visible, setVisible] = React.useState(false)

	const openMenu = () => setVisible(true)

	const closeMenu = () => setVisible(false)

	return (
		<RootContent>
			<Menu
				visible={visible}
				onDismiss={closeMenu}
				anchor={<Button onPress={openMenu}>Show menu</Button>}
			>
				<Menu.Item
					onPress={() => {}}
					title='Item 1'
				/>
				<Menu.Item
					onPress={() => {}}
					title='Item 2'
				/>
				<Divider />
				<Menu.Item
					onPress={() => {}}
					title='Item 3'
				/>
			</Menu>
		</RootContent>
	)
}

export default MenuComponent
