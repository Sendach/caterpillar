import express from 'express';
const router = express.Router();
import 'express-async-errors';
import db from '../db/index.js';

router.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM accounts;');
  res.json(rows);
})

router.post('/', async (req, res) => {
  const body = req.body;
  const result = await db.query('INSERT INTO accounts (email, username, password, name, created_on) VALUES ($1, $2, $3, $4, $5)', [body.email, body.username, body.password, body.name, Date.now()]);
  
  if (result.rowCount === 1) {
    res.status(200).end('It worked!');
  }
})

router.get('/email/:email', async (req, res, next) => {
  const param = req.params;
  try {
    const { rows } = await db.query('SELECT * FROM accounts WHERE email = $1', [param.email]);
    if (rows.length !== 0) res.json(rows[0]);
    else throw {name: 'NotFound', message: `Cannot find email ${param.email}`};
  } catch (error) {
    next(error); 
  }
})

router.get('/username/:username', async (req, res, next) => {
  const param = req.params;
  try {
    const { rows } = await db.query('SELECT * FROM accounts WHERE username = $1', [param.username]);
    if (rows.length !== 0) res.json(rows[0]);
    else throw {name: 'NotFound', message: `Cannot find username ${param.username}`};
  } catch (error) { 
    next(error);
  }
})

export default router;