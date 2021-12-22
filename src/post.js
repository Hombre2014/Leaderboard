export default async function postScore(e) {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jT5ddO4HfUyAH1uOfTZ3/scores/';
  const result = await fetch(`${gameUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await result.json();
  const yourName = document.querySelector('.your-name');
  const yourScore = document.querySelector('.your-score');
  yourName.value = '';
  yourScore.value = '';
  return data;
}