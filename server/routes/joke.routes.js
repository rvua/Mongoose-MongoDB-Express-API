const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/api/test", JokeController.testResponse);
    app.get("/api/jokes/findAll", JokeController.findAllJokes);
    app.post("/api/jokes/create", JokeController.createJoke);
    app.get("/api/jokes/:_id", JokeController.findOneJoke);
    app.delete("/api/jokes/:_id/delete", JokeController.deleteJoke);
    app.patch("/api/jokes/:_id/update", JokeController.updateOneJoke);
    app.put("/api/jokes/:_id/addJoke", JokeController.addAJoke);
};