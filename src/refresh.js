import Result from './result.js';

export default async function refresh() {
  const list = document.querySelector('.results');
  list.style.border = '2px solid black';
  list.innerHTML = '';
  const results = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jT5ddO4HfUyAH1uOfTZ3/scores/');
  const data = await results.json();
  const arr = data.result;
  arr.forEach((element) => {
    const savedRecord = Result.record(element.user, element.score);
    list.innerHTML += savedRecord;
  });
}