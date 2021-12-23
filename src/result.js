export default class Result {
  static record(user, score) {
    return `
    <div class="result" data-id=${user}>
      <span class="user" data-id=${user}>${user}: </span>
      <span class="score" data-id=${user}>${score}</span>
    </div>
    `;
  }
}