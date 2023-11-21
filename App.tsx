import React from 'react'

import { PaperProvider } from 'react-native-paper'
import Header from 'src/pages/header'
import MenuComponent from 'src/pages/menu'

export default function App() {
	return (
		<PaperProvider>
			<Header />
			<MenuComponent />
		</PaperProvider>
	)
}
