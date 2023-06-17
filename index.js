//Funcion para pintar numeros en la calculadora
const  printsAllNumbers = (id) => {
    let textValue = document.getElementById(id).innerHTML;

    if(($('#bigInput').val().includes('+') || $('#bigInput').val().includes('-') || $('#bigInput').val().includes('*') || $('#bigInput').val().includes('/')) && (textValue == '+' || textValue == '-' || textValue == '*' ||textValue == '/')){
        console.log('no poner signos de operacion matematica');
    }else{
        let inputValue = document.getElementById("bigInput").value;
        document.getElementById("bigInput").value = inputValue + textValue;
    }   
}


// funcion para borrar
const Del = () => {
    let inputValue = document.getElementById("bigInput").value;
    document.getElementById("bigInput").value = inputValue.substr(0,inputValue.length-1);
}

// Funcion reset
const Reset = () =>{
    document.getElementById("bigInput").value = "";
}

//Funcion para calcular la operacion matematica

const Result = () =>{
    let number1;
    let number2;
    let result;

    let inputValue =  document.getElementById("bigInput").value;

    if(inputValue.includes('+')){
        number1 = Number(inputValue.substr(0,inputValue.indexOf('+')));
        number2 = Number(inputValue.substr(inputValue.indexOf('+')+1,inputValue.length));
        result = number1 + number2;
        document.getElementById("bigInput").value = result;
    } else if(inputValue.includes('-')){
        number1 = Number(inputValue.substr(0,inputValue.indexOf('-')));
        number2 = Number(inputValue.substr(inputValue.indexOf('-')+1,inputValue.length));
        result = number1 - number2;
        document.getElementById("bigInput").value = result;
    } else if (inputValue.includes('/')){
        number1 = Number(inputValue.substr(0,inputValue.indexOf('/')));
        number2 = Number(inputValue.substr(inputValue.indexOf('/')+1,inputValue.length));
        result = number1 / number2;
        document.getElementById("bigInput").value = result;
    } else if(inputValue.includes('*')){
        number1 = Number(inputValue.substr(0,inputValue.indexOf('*')));
        number2 = Number(inputValue.substr(inputValue.indexOf('*')+1,inputValue.length));
        result = number1 * number2;
        document.getElementById("bigInput").value = result;
    }

}

//Funcion que controla el Toogle
const controlToogle = () => {

    if ($('#CircleActive').hasClass('one')) {
        $("#CircleActive").offset({ left: $("#CircleActive").offset().left + 16 });
        $('#CircleActive').removeClass('one');
        $('#CircleActive').addClass('two');
        addClassWhite();
    }else if($('#CircleActive').hasClass('two')){
        $("#CircleActive").offset({ left: $("#CircleActive").offset().left + 16 });
        $('#CircleActive').removeClass('two');
        $('#CircleActive').addClass('three');
        addClassPurple();
    }else if($('#CircleActive').hasClass('three')){
        $("#CircleActive").offset({ left: $("#CircleActive").offset().left - 32 });
        $('#CircleActive').removeClass('three');
        $('#CircleActive').addClass('one');
        addClassDark()
    }
}

//Funcion para agregar clase White en los elementos necesarios para el cambio de color
const addClassWhite = () =>{
    $('body').removeClass('dark');
    $('body').removeClass('purple');
    $('body').addClass('white');

    $('.sequence-numbers').removeClass('dark');
    $('.sequence-numbers').removeClass('purple');
    $('.sequence-numbers').addClass('white')

    $('.theme').removeClass('dark');
    $('.theme').removeClass('purple');
    $('.theme').addClass('white');

    $('.clac').removeClass('dark');
    $('.clac').removeClass('purple');
    $('.clac').addClass('white');

    $('.fromb-bottom-interactive-container').removeClass('dark');
    $('.fromb-bottom-interactive-container').removeClass('purple');
    $('.fromb-bottom-interactive-container').addClass('white');

    $('.circle-active').removeClass('dark');
    $('.circle-active').removeClass('purple');
    $('.circle-active').addClass('white');

    $('.big-input').removeClass('dark');
    $('.big-input').removeClass('purple');
    $('.big-input').addClass('white');

    $('.numbers-calculate-container').removeClass('dark');
    $('.numbers-calculate-container').removeClass('purple');
    $('.numbers-calculate-container').addClass('white');

    $('.Delettle').removeClass('dark');
    $('.Delettle').removeClass('purple');
    $('.Delettle').addClass('white');

    $('.left-bottom').removeClass('dark');
    $('.left-bottom').removeClass('purple');
    $('.left-bottom').addClass('white');

    $('.right-bottom').removeClass('dark');
    $('.right-bottom').removeClass('purple');
    $('.right-bottom').addClass('white');
}

//Funcion para agregar clase purple en los elementos necesarios para el cambio de color
const addClassPurple = () =>{
    $('body').removeClass('dark');
    $('body').addClass('purple');
    $('body').removeClass('white');

    $('.sequence-numbers').removeClass('dark');
    $('.sequence-numbers').addClass('purple');
    $('.sequence-numbers').removeClass('white');

    $('.theme').removeClass('dark');
    $('.theme').addClass('purple');
    $('.theme').removeClass('white');

    $('.clac').removeClass('dark');
    $('.clac').addClass('purple');
    $('.clac').removeClass('white');

    $('.fromb-bottom-interactive-container').removeClass('dark');
    $('.fromb-bottom-interactive-container').addClass('purple');
    $('.fromb-bottom-interactive-container').removeClass('white');

    $('.circle-active').removeClass('dark');
    $('.circle-active').addClass('purple');
    $('.circle-active').removeClass('white');

    $('.big-input').removeClass('dark');
    $('.big-input').addClass('purple');
    $('.big-input').removeClass('white');

    $('.numbers-calculate-container').removeClass('dark');
    $('.numbers-calculate-container').addClass('purple');
    $('.numbers-calculate-container').removeClass('white');

    $('.Delettle').removeClass('dark');
    $('.Delettle').addClass('purple');
    $('.Delettle').removeClass('white');

    $('.left-bottom').removeClass('dark');
    $('.left-bottom').addClass('purple');
    $('.left-bottom').removeClass('white');

    $('.right-bottom').removeClass('dark');
    $('.right-bottom').addClass('purple');
    $('.right-bottom').removeClass('white');

    $('.all-numbers').removeClass('dark');
    $('.all-numbers').addClass('purple');
    $('.all-numbers').removeClass('white'); 
}

//Funcion para agregar clase dark en los elementos necesarios para el cambio de color
const addClassDark = () =>{
    $('body').addClass('dark');
    $('body').removeClass('purple');
    $('body').removeClass('white');

    $('.sequence-numbers').addClass('dark');
    $('.sequence-numbers').removeClass('purple');
    $('.sequence-numbers').removeClass('white');

    $('.theme').addClass('dark');
    $('.theme').removeClass('purple');
    $('.theme').removeClass('white');

    $('.clac').addClass('dark');
    $('.clac').removeClass('purple');
    $('.clac').removeClass('white');

    $('.fromb-bottom-interactive-container').addClass('dark');
    $('.fromb-bottom-interactive-container').removeClass('purple');
    $('.fromb-bottom-interactive-container').removeClass('white');

    $('.circle-active').addClass('dark');
    $('.circle-active').removeClass('purple');
    $('.circle-active').removeClass('white');

    $('.big-input').addClass('dark');
    $('.big-input').removeClass('purple');
    $('.big-input').removeClass('white');

    $('.numbers-calculate-container').addClass('dark');
    $('.numbers-calculate-container').removeClass('purple');
    $('.numbers-calculate-container').removeClass('white');

    $('.Delettle').addClass('dark');
    $('.Delettle').removeClass('purple');
    $('.Delettle').removeClass('white');

    $('.left-bottom').addClass('dark');
    $('.left-bottom').removeClass('purple');
    $('.left-bottom').removeClass('white');

    $('.right-bottom').addClass('dark');
    $('.right-bottom').removeClass('purple');
    $('.right-bottom').removeClass('white');

    $('.all-numbers').addClass('dark');
    $('.all-numbers').removeClass('purple');
    $('.all-numbers').removeClass('white'); 
}
