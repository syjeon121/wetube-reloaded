import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("i love you forever");
};

const handleLogin = (req, res) => {
    return res.send("this page is login page🍗")
}

const handleAdmin = (req, res) => {
    return res.status(404).send("sorry, we haven't made this page yet😅")
}

const handleDownload = (req, res) => {
    return res.download("/Users/syjeon/Downloads/empty.txt")
}

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 👑`);

app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/admin", handleAdmin);
app.get("/download", handleDownload);
app.listen(PORT, handleListening);
