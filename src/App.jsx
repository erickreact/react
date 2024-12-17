import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwiiterFollowCard'

const users = [
	{
		userName: 'erickvh66',
		name: 'Erick Vargas Hernandez',
		isFollowing: false
	},
	{
		userName: 'jbalvin',
		name: 'Miguel Angel Duran',
		isFollowing: true
	},
	{
		userName: 'elonmusk',
		name: 'Elon Musk',
		isFollowing: false
	}
]

export function App () {
	return(
		<section className="App">
		{
			users.map(user => {
				const {userName, name,isFollowing} = user
				return(
					<TwitterFollowCard
					userName={userName}
					initialIsFollowing={isFollowing}
					key={userName}
					>
					{name}
					</TwitterFollowCard>
				)
			}) 
		}
		</section>
	)
}