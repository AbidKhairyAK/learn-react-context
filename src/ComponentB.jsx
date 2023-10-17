import { useContext } from "react"
import { ProfileContext } from "./context/ProfileContext"

export default function ComponentB() {
	const profile = useContext(ProfileContext)

	return <>
		<h1>this is component B</h1>

		<p>this is last name: {profile.lastName}</p>

		<button onClick={() => profile.changeName('Riska', 'Sucipto')}>
			Change Name
		</button>
	</>
}