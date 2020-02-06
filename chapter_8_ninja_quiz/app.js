const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [e.target.q1.value, e.target.q2.value, e.target.q3.value, e.target.q4.value]
    result.classList.remove('d-none');

    // check answer
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // show result on page

    // scrollTo({
    //     top: 135,
    //     left: 0,
    //     behavior: 'smooth'
    //     });

    scrollTo(0, 0);

    let output = 0;
    const timer = setInterval(() => {
        //result.setAttribute('style', 'display: block !important');
        result.children[0].children[0].children[0].textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});