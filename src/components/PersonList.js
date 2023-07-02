import { useState } from "react";
import Details from "./Details";


export default function PersonList({ persons, isFetch }) {
	const [clickPersonId, setClickPersonId] = useState();

	return (
	<div style={ {display: 'flex'} }>
		<ul>{persons.map(person => {
				return (
					<li key={person.id} onClick={() => setClickPersonId(person.id)} className={clickPersonId === person.id ? 'person__id' : 'person'}>{person.name} </li>
				)
			})}</ul>
		<div>{
			!isFetch && clickPersonId && <Details info={persons.find(person => {
					if (person.id === clickPersonId) {
						return person
					}
				})}/>
		}</div>
	</div>
	)
};
