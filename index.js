import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRouter);

app.get('/', (req, res) => {
    console.log('[test]');

    res.send('Hello from HomePage')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));