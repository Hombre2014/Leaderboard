import './style.css';
import postScore from './post.js';
import refresh from './refresh.js';

document.getElementById('data-submit').addEventListener('submit', postScore);
document.querySelector('.btn-refresh').addEventListener('click', refresh);