




// задание 1)
const firstname = prompt('Введите ваше имя');
const lastname = prompt('Введите вашу фамилию');

let element = document.getElementById('myElement');
element.innerHTML = firstname  + '&nbsp' + lastname;
console.log(firstname + lastname);
// задание 1)




// задание 2)
const num1 = prompt('Введите первое число');
const num2 = prompt('Введите второе число');

let number = document.getElementById('number');

 if(num1 === num2){
   number.innerHTML = 'Числа равны';
 }else {
   number.innerHTML = 'Числа не равны';М
 }
// задание 2)



//задание 3)
const Color = prompt('Введите цвет светофора: 1 - красный, 2 - желтый, 3 - зеленый.');

let nums = document.getElementById('nums');

 if(Color == 1){
   nums.innerHTML = 'цвет светофора - Красный - Стоять';
 } else if (Color == 2) {
   nums.innerHTML = 'цвет светофора - Желтый - Ждать';
 } else if (Color == 3) {
   nums.innerHTML = 'цвет светофора - Зеленый - Идти';
 }

//задание 3)




//Доп задание
 const Stars = prompt('Введите количество звезд отеля 1-5.');

   let star = document.getElementById('star_text');


    if(Stars == 1){
      star.innerHTML = '1 звездочный отель - 20$';
    } else if (Stars == 2) {
      star.innerHTML = '2 звездочный отель - 30$';
    } else if (Stars == 3) {
      star.innerHTML = '3 звездочный отель - 50$';
    } else if (Stars == 4) {
      star.innerHTML = '4 звездочный отель - 70$';
    }else if (Stars == 5) {
      star.innerHTML = '5 звездочный отель - 120$';
    } else {
      star.innerHTML = 'Такого количества звезд нету';
    }
//Доп задание



































































































































































