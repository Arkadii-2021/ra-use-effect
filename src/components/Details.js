import { useState, useEffect } from "react";


export default function Details(props) {
	const [personDetail, setPersonDetail] = useState();
	const [loading, setLoading] = useState(false);
	
	useEffect(() => {
		setLoading(true)
		fetch(`${process.env.REACT_APP_URL}${props.info.id}.json`)
		.then(
			resp => resp.json()
		)
		.then(
			person => {
				setPersonDetail(() => person)
				setLoading(false)
			}
		)
	
	}, [props.info.id]);

	return (
		<>
		{!loading && personDetail && <div className="details">
			<img src={personDetail.avatar} alt={personDetail.avatar} className="person__detail"></img>
			<ul className="person__info">
				<li className="person__name">{personDetail.name}</li>
				<li className="person__city"><p>City: {personDetail.details.city}</p></li>
				<li className="person__company"><p>Company: {personDetail.details.company}</p></li>
				<li className="person__position"><p>Position: {personDetail.details.position}</p></li>
			</ul>
		</div> }
		</>
	)
};