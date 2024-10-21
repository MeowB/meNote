const express = require("express")
const app = express()
const PORT = 3000
const notes = [
	{ id: 1, title: "First Note", content: "This is the first note." },
	{ id: 2, title: "Second Note", content: "This is the second note." }
];
  
app.get("/api", (req, res) => {
	res.send("Hello from the backend!")
})

app.get("/api/notes", (req, res)=> {
	res.json(notes)
})

app.listen(PORT, ()=> {
	console.log(`Server is running on port ${PORT}`)
})