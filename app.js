const container = document.querySelector('#container');
const userInput = document.querySelector('.form__input');
const userBtn = document.querySelector('.form__button');
const userResetBtn = document.querySelector('.form__reset');
const timeShowBubble = 1500;
const checkDevice = (window.navigator.userAgent).split(' ');

const getNumber = (e) => {
    e.preventDefault();
    let bubbles = Number(userInput.value);
    if (bubbles > 7) {
        alert('For the sake of a browser, max number of bubbles is 7.');
        userInput.value = '7';
        bubbles = 7;
    }
    userBtn.style.display = 'none';
    userInput.style.pointerEvents = 'none';
    drawBubbles(bubbles);
};

const createBubble = (x, y) => {
    console.log('Bubble');
    let span = document.createElement('span');
    span.style.top = y + 'px';
    span.style.left = x + 'px';
    span.style.borderRadius = (Math.random() * 10) * 5 + '%';
    span.style.borderRadius = 50 + '%';
    let spanHeight = span.style.height = Math.random() * 100 + 'px';
    span.style.width = spanHeight;
    let color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    let borderRadius = Math.random() * 5 + 'px';
    span.style.border = `${borderRadius} solid ${color}`;
    span.classList.add('active');
    container.appendChild(span);

    setTimeout(() => container.removeChild(span), timeShowBubble);
};

const drawBubbles = (bubbles) => {
    if (checkDevice.includes('Mobile')) {
        container.addEventListener('click', (e) => {
            for (let i = 0; i < bubbles; i++) {
                let x = e.offsetX;
                let y = e.offsetY;
                createBubble(x, y);
            };
        });
    } else {
        container.addEventListener('mousemove', (e) => {
            for (let i = 0; i < bubbles; i++) {
                let x = e.offsetX;
                let y = e.offsetY;
                createBubble(x, y);
            };
        });
    };
};


userBtn.addEventListener('click', getNumber);
userResetBtn.addEventListener('click', () => (userInput.value = ''));