const correctAnswers = ['A','A','B','B'];

// get the form element
const form = document.querySelector('.quiz-form');

// get result element
const result = document.querySelector('.result');

form.addEventListener('submit', e => {

    // prevent page from reloading after 'submit'
    e.preventDefault();
    let score = 0;

    // user answers array
    const userAnswer = [

        // get values from 'attribute'
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value
    ];

    // check answers
    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // scroll-up to result
    scrollTo(0,0);

    result.classList.remove('d-none');

    // Animate the score
    let counter = 0;
    const timer = setInterval(()=>{
        // show result
        result.querySelector('span').textContent = `${counter}%`;
        if(counter === score){
            clearInterval(timer);
        } else {
            // keep incrementing till it reaches userScore
            counter++;
        }
    },10);
});