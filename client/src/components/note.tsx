import React from "react";
import noteProps from "../types/noteType";
import "../styles/note.css";


const Note: React.FC<noteProps> = ({ title, content }) => {
	return (
		<div className="note">
			<div className="aside">
				<button>edit</button>
				<button>delete</button>
			</div>
			<div className="content">
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Note