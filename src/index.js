import './style.css';
import newGame from './newGame.js';
import postScore from './post.js';

// newGame();
// console.log(newGame());
document.getElementById('data-submit').addEventListener('submit', postScore);
// clearFields();