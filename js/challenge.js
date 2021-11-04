document.addEventListener('DOMContentLoaded', function() {

    function createCounter() {
    let counter = document.getElementById('counter');
    let number = 0;
    let interval = setInterval(() => {
            counter.innerText = number++;
            if(number > 1000) {
            clearInterval(interval);
            }
        }, 1000)
    }

    createCounter()

    function plusAndMinus() {
        let number = 0
        let counter = document.getElementById('counter')
        let increment = document.getElementById('plus')
        let decrement = document.getElementById('minus')

        increment.addEventListener('click', () => counter.textContent = number++)

        decrement.addEventListener('click', () => counter.textContent = number--)
    }

    plusAndMinus()

    function pauseButton() {
        let pause = document.getElementById('pause')
        pause.addEventListener('click', function() {
            if (pause.textContent = 'pause') {
                pause.textContent = 'play'
            } else {
                pause.textContent = 'pause'
            }
        })
    }

    pauseButton()

    document.getElementById('comment-form').addEventListener('submit', (e) => {
        e.preventDefault()
        handleSubmit(e.target.input.value)
    })
    
    function handleSubmit(submit){
            let p = document.createElement('p')
            p.textContent = submit
            console.log(p.textContent)
            console.log(e.target.input)
            document.querySelector('form').appendChild(p)
        }
})