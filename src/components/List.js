import React from "react";
import { useState, useEffect } from "react";
import PersonList from "./PersonList";


export default function List() {
	const [listPerson, setListPersons] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true)
		fetch(`${process.env.REACT_APP_URL}users.json`)
		.then(
			resp => resp.json()
		)
		.then(
			persons => {
				setListPersons(() => persons)
				setLoading(false)
			}
		)
	
	}, [])

	return (
		<>
			<PersonList persons={listPerson} loading={loading} />		
		</>
	)
};





