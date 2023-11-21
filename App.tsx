import React from 'react'

import { StatusBar } from 'expo-status-bar'
import ContainerBackground from './src/pages/container/containerBackground'
import Home from './src/pages/home'

export default function App() {
	return (
		<ContainerBackground>
			<StatusBar style='auto' />
			<Home />
		</ContainerBackground>
	)
}
