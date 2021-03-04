import express from 'express';
import cors from 'cors';
const app = express();
const port = 8008;
import router from './API/routes';

app.use(cors());
app.use(express.json());

/**
 * Tell my express that I want to use routes, and on routes he sees all the routes that have already 
 * been created. and so I have an organization, since I have a specific file just for my routes.
 */
app.use(router);

app.listen(port, () => {
    console.log('Running the application on: http://localhost:' + port);
});

/**
 * Main class, where all the files and settings needed for the project to run are.
 */
