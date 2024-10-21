import React from "react";

interface noteProps {
	title: string;
	content: string;
}

const Note: React.FC<noteProps> = ({ title, content }) => {
	return (
		<div className="note">
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	);
};

export default Note