export async function getNotes() {
	const response = await fetch('/api/notes');
	return response.json()
}

export async function createNote(noteData: { title: string, content: string }) {
	const response = await fetch("/api/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(noteData)
	});
	return response.json();
}
