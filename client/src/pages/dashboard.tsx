import React, { useState, useEffect } from "react";
import Note from "../components/note";
import noteProps from "../types/noteType";
import "../styles/dashboard.css"

const Dashboard: React.FC = () => {
	const [notes, setNotes] = useState<noteProps[]>([])

	useEffect(() => {
		const fetchNotes = async () => {
			try {
				const response = await fetch("/api/notes");
				const data = await response.json();
				setNotes(data)
			} catch (error) {
				console.error("Error fetching notes: ", error)
			}
		};

		fetchNotes();
	}, []);


	return (
		<div id="dashboard">
			<h1>Dashboard</h1>
			{notes.map((note)=> {
				return <Note key={note.id} id={note.id} title={note.title} content={note.content} />
			})}
		</div>
	)
}

export default Dashboard;
