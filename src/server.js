import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("i love you forever");
};

const handleLogin = (req, res) => {
    return res.send("this page is login page🍗")
}

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 👑`);

app.get("/", handleHome);
app.get("/login", handleLogin);
app.listen(PORT, handleListening);
