const container = document.querySelector('#container');
const userInput = document.querySelector('.form__input');
const userBtn = document.querySelector('.form__button');
const userResetBtn = document.querySelector('.form__reset');
let bubblesArr = [];
    

const getNumber = (bubblesArr) => {
    userBtn.addEventListener('click', (e) => {
        // bubblesArr = []
        e.preventDefault()
        for (let i = 0; i < userInput.value; i++) {
            
            bubblesArr.push(i);
        }
        console.log(bubblesArr)
    })
}



getNumber(bubblesArr);

userResetBtn.addEventListener('click', () => {
    userInput.value = '';
    bubblesArr =[];
})


container.addEventListener('mousemove', (e) => {
    bubblesArr.forEach((el) => {
        let x = e.offsetX;
        let y = e.offsetY;

        let span = document.createElement('span');
        span.style.top = y + 'px';
        span.style.left = x + 'px';
        span.style.borderRadius = (Math.random() * 10) * 5 + '%'
        span.style.borderRadius = 50 + '%'
        let spanHeight = span.style.height = Math.random() * 100 + 'px';
        span.style.width = spanHeight;
        let color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        let borderRadius = Math.random() * 5 + 'px';
        span.style.border = `${borderRadius} solid ${color}`;
        span.classList.add('active');
        container.appendChild(span)
        
        setTimeout(() => {
            container.removeChild(span)
        },1500)

    })
})