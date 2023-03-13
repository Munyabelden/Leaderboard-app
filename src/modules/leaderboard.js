const lead = [
    {
        name: 'Tatenda',
        score: '100'
    },
    {
        name: 'Chad',
        score: '74'
    }, 
    {
        name: 'Leasel',
        score: '63'
    },
    {
        name: 'Shayne',
        score: '56'
    }
];

const displayScore = () => {
    lead.forEach((obj) => score(obj))
};

const score = (obj) => {
    const table = document.querySelector('.results-table');
    const result = document.createElement('tr');
    result.insertAdjacentHTML('beforeend',
    `
        <tr class="scores">
            <td>${obj.name}: ${obj.score}</td>
        </tr>
    `);

    table.appendChild(result);
};

document.addEventListener('DOMContentLoaded', displayScore);