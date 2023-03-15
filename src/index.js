import "./style.css";
import leaderboard from "./modules/leaderboard.js";
import UI from "./modules/display.js"

const name = document.querySelector('#name');
const yourScore = document.querySelector('#your-score');
const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#results-btn');


const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BbPqSVwFE639mX4LkLcu'
const board = new leaderboard(url);
const apiRequest = `${url}/scores/`;
board.getScore(apiRequest);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!name.value.trim()) {
      name.setCustomValidity('Type in your username.');
      name.reportValidity();
    } else if (!yourScore.value) {
      yourScore.setCustomValidity('Fill in your score.');
      yourScore.reportValidity();
    } else {
      board.addValues(apiRequest, name.value.trim(), yourScore.value);
      submitBtn.setCustomValidity('"Leaderboard score created correctly.');
      submitBtn.reportValidity();
      name.value = '';
      yourScore.value = '';
    }
    setTimeout(() => {
      board.getScore(apiRequest);
      JSON.parse(localStorage.getItem('Scores'));
    }, 1000);
  });

  resetBtn.addEventListener('click', () => {
    board.getScore(apiRequest);
    setTimeout(() => {
      if (localStorage.getItem('Score')) {
        const results = JSON.parse(localStorage.getItem('Score'));
        const scoreArray = results.result;
        UI.displayScore(scoreArray);
      }
    }, 1000);
    location.reload();
  });

document.addEventListener('DOMContentLoaded', UI.displayScore);