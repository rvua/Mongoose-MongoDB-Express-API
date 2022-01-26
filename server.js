const express = require("express");
const app = express();
const port = 8000;

// app.get("/api", (req, res) => {
//     res.json({message: "This is the server message"});
// })

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

require("./server/routes/joke.routes")(app);

app.listen(port, () => console.log(`~Running on Port ${port}~`))