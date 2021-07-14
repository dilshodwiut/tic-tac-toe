const theme = document.querySelector('.theme');
const switcher = document.querySelector('.switch');
const tds = document.querySelectorAll('td');

theme.addEventListener('click', () => {
    if(switcher.classList.contains('switched')) {
        switcher.classList.remove('switched');
        theme.style.background = '#fff';
        switcher.style.background = 'black';
        document.body.style.background = 'white';
        document.body.style.color = 'black';
        tds.forEach(element => {
            element.style.background = 'white';
            element.style.borderBottom = '1px dashed black';
            element.style.borderRight = '1px dashed black';
        });
    }
    else {
        switcher.classList.add('switched');
        theme.style.background = '#555';
        switcher.style.background = '#fff';
        document.body.style.background = 'black';
        document.body.style.color = 'white';
        tds.forEach(element => {
            element.style.background = 'black';
            element.style.borderBottom = '1px dashed white';
            element.style.borderRight = '1px dashed white';
        });
    }
});