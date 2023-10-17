import { useContext } from "react"
import { ProfileContext } from "./context/ProfileContext"

export default function ComponentA () {
	const profile = useContext(ProfileContext)

	return <>
		<h1>this is component A</h1>

		<p>this is first name: {profile.firstName}</p>

		<button onClick={() => profile.changeName('Bambang', 'Suyatno')}>
			Change Name
		</button>
	</>
}