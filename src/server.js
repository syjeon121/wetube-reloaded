import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res, next) => {
    return res.send({ message: "i love you forever" });
};

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 👑`);

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

app.get("/", handleHome);
app.listen(PORT, handleListening);
