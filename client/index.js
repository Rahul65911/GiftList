const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  let tree = new MerkleTree(niceList);
  let myName = 'Rahul Mewada';
  let index = niceList.findIndex(x => x === myName);
  let proof = tree.getProof(index);
  
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof,
    myName
  });

  console.log({ gift });
}

main();