const router = require('express').Router();
const { u4: uuidv4 } = require('uuid');

router.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db)
}
