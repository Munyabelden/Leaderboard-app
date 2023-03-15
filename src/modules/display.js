export default class UI {
    static displayScore = () => {
        let results = JSON.parse(localStorage.getItem('Scores'));
        results.result.forEach((obj) => UI.score(obj));
    }

    static score = (obj) => {
        const table = document.querySelector('.results-table');
        const result = document.createElement('tr');
        result.insertAdjacentHTML('beforeend',
        `
            <tr class="scores">
                <td>${obj.user}: ${obj.score}</td>
            </tr>
        `);
        table.appendChild(result);
    }
}
