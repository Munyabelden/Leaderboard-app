export default class Game {
    constructor(url) {
        this.url = url
    }

     game = async (url) => {
        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: 'Belden`s Game' }),
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem('gameID', JSON.stringify(data));
            console.log(data)
          });
      };

     getScore = async (url) => {
        await fetch(url, {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem('Scores', JSON.stringify(data));
          });
      };

      addValues = async (url, name, score) => {
        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({ user: name, score }),
        })
          .then((response) => response.json());
      };
};
