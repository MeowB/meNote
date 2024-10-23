const express = require("express")
const app = express()
const PORT = 3000
const notes = [
	{ id: 1, title: "First Note", content: "This is the first note." },
	{ id: 2, title: "Second Note", content: "This is the second note." },
	{ id: 3, title: "Third Note", content: "This is the Third note." }
];
  
app.get("/api", (req, res) => {
	res.send("Hello from the backend!")
})

app.get("/api/notes", (req, res)=> {
	res.json(notes)
})

app.put("/api/notes/id", (req, res) => {
	console.log("hit the edit route on the server")
})

app.listen(PORT, ()=> {
	console.log(`Server is running on port ${PORT}`)
})