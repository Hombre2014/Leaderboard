import newGame from './newGame.js';

// function clearFields() {
//   user = '';
//   score = '';
// }

export default async function postScore(e) {
  e.preventDefault();
  let user = document.getElementById('name').value;
  let score = document.getElementById('score').value;
  console.log(user);
  console.log(score);
  // const gameId = await newGame();
  const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lOq0dmHy9dxQFGJpHZC1/scores/';
  const result = await fetch(`${gameUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: user, score: score }),
  });
  const data = await result.json();
  console.log("This is the data: ", data);
}

// export { clearFields };