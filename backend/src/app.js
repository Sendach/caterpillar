import express from 'express';
import 'express-async-errors';
import router from './api/controllers/users.js';

const app = express();
import cors from 'cors';
import { errorHandler } from './api/utils/middleware.js';

app.use(cors());
app.use(express.json());

app.use('/api/users', router);

export default app;