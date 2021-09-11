const elForm_1 = document.querySelector('#form1');
const elPlusinput_1 = document.querySelector('#plus_1');
const elPlusinput_2 = document.querySelector('#plus_2');
const elBtn_plus = document.querySelector('#btn_plus');
const elResult = document.querySelector('#result_plus');


elForm_1.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let plus_first_number = elPlusinput_1.value - 0
    let plus_second_number = elPlusinput_2.value - 0
    
    if(!isNaN(plus_first_number, plus_second_number)){
        let resultplus = plus_first_number + plus_second_number
        elResult.textContent = resultplus
    }else{
        elResult.textContent = 'Raqam kiriting' 
    }

    elPlusinput_1.value = ''
    elPlusinput_2.value = ''
})

// function minus 

const elForm_2 = document.querySelector('#form2');
const elMinusinput_1 = document.querySelector('#minus_1');
const elMinusinput_2 = document.querySelector('#minus_2');
const elBtn_minus = document.querySelector('#btn_minus');
const elResult_minus = document.querySelector('#result_minus');


elForm_2.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let Minus_first_number = elMinusinput_1.value - 0
    let Minus_second_number = elMinusinput_2.value - 0
    
    if(!isNaN(Minus_first_number, Minus_second_number)){ let resultminus = Minus_first_number - Minus_second_number
        elResult_minus.textContent = resultminus
    }else{
        elResult_minus.textContent = 'Raqam kiriting' 
    }

    elMinusinput_1.value = ''
    elMinusinput_2.value = ''
})

//function devide

const elForm_3 = document.querySelector('#form3');
const eldevideinput_1 = document.querySelector('#devide_1');
const eldevideinput_2 = document.querySelector('#devide_2');
const elBtn_devide = document.querySelector('#btn_devide');
const elResult_devide = document.querySelector('#result_devide');


elForm_3.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let devide_first_number = eldevideinput_1.value - 0
    let devide_second_number = eldevideinput_2.value - 0
    
    if(!isNaN(devide_first_number, devide_second_number)){
        let resultdevide = (devide_first_number / devide_second_number).toFixed(2)
        elResult_devide.textContent = resultdevide
    }else{
        elResult_devide.textContent = 'Raqam kiriting' 
    }

    eldevideinput_1.value = ''
    eldevideinput_2.value = ''
})

//function multiple
const elForm_4 = document.querySelector('#form4');
const elmultipleinput_1 = document.querySelector('#multiple_1');
const elmultipleinput_2 = document.querySelector('#multiple_2');
const elBtn_multiple = document.querySelector('#btn_multiple');
const elResult_multiple = document.querySelector('#result_multiple');


elForm_4.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let multiple_first_number = elmultipleinput_1.value - 0
    let multiple_second_number = elmultipleinput_2.value - 0
    
    if(!isNaN(multiple_first_number, multiple_second_number)){
        let resultmultiple = multiple_first_number * multiple_second_number
        elResult_multiple.textContent = resultmultiple
    }else{
        elResult_multiple.textContent = 'Raqam kiriting' 
    }

    elmultipleinput_1.value = ''
    elmultipleinput_2.value = ''
})