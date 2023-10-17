import { createContext, useState } from "react";

export const ProfileContext = createContext()

export function ProfileProvider (props) {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

	function changeName (first, last) {
		setFirstName(first)
		setLastName(last)
	}

	const contextValue = {
		firstName,
		lastName,
		changeName
	}

	return <ProfileContext.Provider value={contextValue}>
		{props.children}
	</ProfileContext.Provider>
}