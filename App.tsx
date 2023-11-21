import React from 'react'

import { StatusBar } from 'expo-status-bar'
import Images from 'src/assets'
import ContainerBackground from 'src/pages/container/containerBackground'
import Welcome from 'src/pages/welcome'

export default function App() {
	return (
		<ContainerBackground bgImage={Images.background.img2}>
			<StatusBar style='auto' />
			<Welcome />
		</ContainerBackground>
	)
}
