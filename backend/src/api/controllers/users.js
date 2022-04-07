import express from 'express';
const router = express.Router();

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

router.get('/email/:email', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM accounts WHERE email = $1', [req.params.email]);

  if (rows) res.json(rows[0]);
  else res.status(404).end();
})

router.get('/username/:username', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM accounts WHERE username = $1', [req.params.username]);

  if (rows) res.json(rows[0]);
  else res.status(404).end();
})

export default router;