const inputElemet = document.getElementById('input');
const button = document.getElementById('button');
const ulElement = document.getElementById('ul');


button.addEventListener('click', (e) => {
    e.preventDefault();
    let task = inputElemet.value;

    if (!task) {
        return alert('Please enter task')
    } else {
        const liElement = document.createElement('li');
        liElement.textContent = task;

        const button = document.createElement('button');
        button.className = 'my-button';
        button.textContent = 'X';

        liElement.appendChild(button);

        ulElement.appendChild(liElement);


        inputElemet.value = '';

    }
    let liELements = Array.from(document.getElementsByTagName('li'));

    for (const liElement of liELements) {
        liElement.querySelector('button').addEventListener('click', (e) => {
            e.preventDefault();
            const parentElement = e.target.parentElement;
            parentElement.remove();
        });
    }
});


