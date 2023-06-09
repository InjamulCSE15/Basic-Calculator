var calculateBtn = document.querySelector('#calculateBtn');
var resetBtn = document.querySelector('#reset');
var outputCard = document.querySelector('#outputCard');
var output = document.querySelector('#output');
var Result = document.querySelector('#result');

let calculate = () => {
    let operation = document.querySelector('#operation').value;
    let firstNum = document.querySelector('#firstNum').value;
    let secondNum = document.querySelector('#secondNum').value;
    
    if (firstNum === '' || secondNum === '') {
        Swal.fire(
            'Opps!',
            'Enter Number',
            'error'
          )
        return;
    }

    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    var result = 0.00;

    switch (operation) {
        case 'add':
            result = firstNum + secondNum;
            break;
        case 'sub':
            result = firstNum - secondNum;
            break;
        case 'mult':
            result = firstNum * secondNum;
            break;
        case 'divi':
            result = firstNum / secondNum;
            break;
    
        default: "No operation selected"
            break;
    }
    outputCard.classList.remove('d-none');
    resetBtn.classList.remove('d-none');
    Result.innerText = parseFloat(result).toFixed(2);
}

let reset = () => {
    outputCard.classList.add('d-none');
    resetBtn.classList.add('d-none');
    operation.value = 'add';
    firstNum.value ='';
    secondNum.value = '';
}

resetBtn.addEventListener('click', reset);
calculateBtn.addEventListener('click', calculate);

// Dynamic year:
var projectYear = document.getElementById('projectYear');
let copyrightYear =  new Date().getFullYear();
projectYear.innerText = copyrightYear;