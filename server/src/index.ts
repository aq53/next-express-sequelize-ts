
import express from 'express';
import cors from "cors";
import { Sequelize } from 'sequelize';
import Routes from "./routes";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sequelize initialization
const sequelize = new Sequelize('playground', 'root', 'mysql123', {
    host: 'localhost',
    dialect: 'mysql',
    // other options
});

// Test the connection
async function connectDb() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDb();

// Your routes and other application logic go here
app.use(Routes)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});