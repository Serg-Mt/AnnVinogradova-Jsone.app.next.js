import { userAgentFromString } from 'next/server'
import { useEffect, useRef, useState } from 'react'
import Table from './Table'

export default function FeachAPI() {
	const [user, setUser] = useState([])

	const fetchData = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setUser(data))
			.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchData();
	}, [])

	function handleValues(evt) {
		evt.preventDefault();
		const username = evt.target.elements.username.value;
		const email = evt.target.elements.email.value;
		const phone = evt.target.elements.phone.value;
		const website = evt.target.elements.website.value;
		const newUser = {
			id: + Math.floor((Math.random() * 999999)),
			username,
			email,
			phone,
			website,
		}
		setUser(prevData => prevData.concat(newUser))
	}

	function handleEdit() {

	}

	function handleDelete(id) {
		const updateData = user.filter((u) => id !== u.id)
		setUser(updateData)
	}

	return <>
		<div className='table-block'>
			<Table user={user} handleValues={handleValues} handleDelete={handleDelete} />
		</div>
	</>
}