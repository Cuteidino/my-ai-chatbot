const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("My AI server is working! 🤖");
});

app.post("/chat", async (req, res) => {

    const message = req.body.message;

    console.log("User said:", message);

    res.json({
        answer: "You said: " + message
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`AI server running on port ${PORT}`);
});
