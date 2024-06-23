const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

const MERKLE_ROOT = 'ce9f4c3ad98fc9d8dd419cd20152b445dca8a7a8dc7300a56954f2a152226796';

app.post('/gift', (req, res) => {
  const { proof, myName } = req.body;

  const isInTheList = verifyProof(proof, myName, MERKLE_ROOT);

  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
