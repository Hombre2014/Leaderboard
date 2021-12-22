export default class Result {
  static record(name, score) {
    return `
    <div class="result" data-id=${name}>
      <span class="name" data-id=${name}>${name}</span>
      <span class="score" data-id=${name}>${score}</span>
    </div>
    `;
  }
}