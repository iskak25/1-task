// JavaScript Practical Tasks
// Part 1
// #1
// for (let i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }
// };
// What will the console display and why?
// #2
// Write a JavaScript program to display the current day and time in the following format.
// Sample Output :
// Today is: Friday.
// Current time is: 4PM:50:22

// let today = new Date();
// const day = today.getDay();
// const daylist = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday ",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(`Today is : ${daylist[day]}.`);

// let hour = today.getHours();
// let minute = today.getMinutes();
// let second = today.getSeconds();
// let prepend = hour >= 12 ? " PM " : " AM ";

// console.log(
//   "Current time is: " + hour + prepend + " : " + minute + " : " + second
// );

// #3
// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

// function number(n) {
//   // 1 way
//   let a = +n;
//   console.log(a);

//   // 2 way
//   n = n + "";
//   return n.split("").reverse().join("");
// }
// console.log(Number(number(32243)));

// #4
// Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

// function factorial(number) {
//   if (number == 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// }
// console.log(factorial(6));

// function factorial(n) {
//   let number = 1;
//   if (n == 0 || n == 1) {
//     return number;
//   } else {
//     for (let i = n; i >= 1; i--) {
//       number = number * i;
//     }
//     console.log(number);
//   }
// }
// factorial(4);

// #5
//  Write a JavaScript program that accepts two integers in prompt() and alert the larger one.

// #6
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join());
// console.log(myColor.join("+"));

// #7
// Write a JavaScript function to get the month name from a particular date.
// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"

// let month_name = function (dt) {
//   mlist = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   return mlist[dt.getMonth()];
// };
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));

// #8
// Write a JavaScript program to test the first character of a string is uppercase or not

// function upper_case(str) {
//   regexp = /^[A-Z]/;
//   if (regexp.test(str)) {
//     console.log("String's first character is uppercase");
//   } else {
//     console.log("String's first character is not uppercase");
//   }
// }
// upper_case("Abcd");
// upper_case("abcd");

// #9
// Write a JavaScript program to draw a smile

// function draw() {
//   let canvas = document.getElementById("canvas");
//   if (canvas.getContext) {
//     let context = canvas.getContext("2d");
//     context.beginPath();
//     context.arc(75, 75, 50, 0, Math.PI * 2, true);
//     context.moveTo(110, 75);
//     context.arc(75, 75, 35, 0, Math.PI, false);
//     context.moveTo(55, 65);
//     context.arc(60, 65, 5, 0, Math.PI * 2, true);
//     context.arc(90, 65, 5, 0, Math.PI * 2, true);
//     context.stroke();
//   }
// }

// draw();

// Part 2
// #1
// На странице есть верстка:
{
  /* <div id="string-1">Ядра в вёдра, выдру в тундру!</div>
<div id="string-2">Выдрав с выдры в тундре гетры</div>
<div id="string-3">В недрах тундры, выдры в гетрах </div>
<div id="string-4">Вытру гетрой выдре морду </div>
<div id="string-5">Тырят в вёдра ядра кедров!</div>
<div id="string-6">Вытру выдрой ядра кедров</div> */
}

// Необходимо поочередно обратиться к каждому тэгу в нужном порядке, и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.

// let tetle = document.getElementById("string-1");
// let tetle2 = document.getElementById("string-2");
// let tetle3 = document.getElementById("string-3");
// let tetle4 = document.getElementById("string-4");
// let tetle5 = document.getElementById("string-5");
// let tetle6 = document.getElementById("string-6");

// console.log(tetle.innerHTML);
// console.log(tetle2.innerHTML);
// console.log(tetle3.innerHTML);
// console.log(tetle4.innerHTML);
// console.log(tetle5.innerHTML);
// console.log(tetle6.innerHTML);

// Вывод в консоли:
// В недрах тундры, выдры в гетрах
// Тырят в вёдра ядра кедров!
// Выдрав с выдры в тундре гетры
// Вытру выдрой ядра кедров
// Вытру гетрой выдре морду
// Ядра в вёдра, выдру в тундру!

// #2
// На странице есть верстка

{
  /* <div class="element">Element 1</div>
<div class="element">Element 2</div>
<div class="element">Element 3</div>
<div class="element">Element 4</div>
<div class="element">Element 5</div>
<div class="element">Element 6</div> */
}

// С помощью JS необходимо первым трем  элементам задать красный цвет текста, а остальным трем - зеленый.

// const elems = document.getElementsByClassName("element");
// elems[0].style.color = "#AA0000";
// elems[1].style.color = "#AA0000";
// elems[2].style.color = "#AA0000";
// elems[3].style.color = "#7CFC00";
// elems[4].style.color = "#7CFC00";
// elems[5].style.color = "#7CFC00";

// #3

// На странице есть контейнер <ol id="todo-list"></ol>, необходимо с помощью цикла добавить в него пять задач (элементов <li>) с классом task и текстом, взятым из массива задач из пяти элементов:

// const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

// Ожидаемый результат в инспекторе после выполнения скрипта:

// <ol id="todo-list">
//   <li class="task">Buy lemonade</li>
//   <li class="task">Make toasts</li>
//   <li class="task">Repair car</li>
//   <li class="task">Play games</li>
//   <li class="task">Pet a cat</li>
// </ol>

// function myContainer() {
//   let tasks = [
//     "Buy lemonade",
//     "Make toasts",
//     "Repair car",
//     "Play games",
//     "Pet a cat",
//   ];
//   for (let i = 0; i < 5; i++) {
//     let newLi = document.createElement("li");
//     let todolist = document.querySelectorAll("#todolist");
//     newLi.innerHTML = tasks[i];
//     todolist[0].appendChild(newLi);
//     newLi.className = "task";
//   }
// }

// myContainer();

// #4
// На странице есть следующая разметка:

// <article>
// <h3>What is Lorem Ipsum?</h3>
// <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
// <h3>Where does it come from?</h3>
// <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. from "The Extremes of Good and Evil" by Cicero</p>
// <h3>Why do we use it?</h3>
// <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
// </article>

// Вам необходимо с помощью JavaScript вставить после каждого тега <p> тег <hr>, для визуального отделения абзацев друг от друга.

// Указания:
// Подразумевается, что вышеуказанная разметка находится внутри тега <body>.
// Нельзя модифицировать указанную разметку.
// За использование цикла дополнительные баллы.

// for (let p of document.querySelectorAll("p"))
//   p.after(document.createElement("hr"));

// #5
// Дана такая разметка:

// <div id="cart-items">
// 	<div class="item">Milk 1 l.<span class="qty">x 2</span></div>
// 	<div class="item">Cola 1.5 l. <span class="qty">x 1</span></div>
// 	<div class="item">Bread <span class="qty">x 2</span></div>
// 	<div class="item">Cheese <span class="qty">x 1</span></div>
// 	<div class="item">Chocolate bar <span class="qty">x 3</span></div>
// </div>

// Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" и заменить товар "Chocolate bar" на "Canned Fish", количеством 4 штуки.

// let delet = document.querySelectorAll(".item");

// let item1 = document.createElement("div");
// item1.innerText = "Canned Fish  x 3";

// delet[1].remove();
// delet[4].remove();
// document.body.appendChild(item1);

// Указания:
//  Для удаления использовать .remove()
// Для замены использовать .replaceChild()
// Подразумевается, что вышеуказанная разметка находится внутри тега <body>.

// #6

// function addinfo() {
//   let ul = document.createElement("ul");
//   document.body.appendChild(ul);
//   while (true) {
//     let newLi = prompt("Введите текст для пункта списка", "");

//     if (newLi === null || newLi === 0 || newLi === "") {
//       break;
//     }

//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(newLi));
//     ul.appendChild(li);
//   }
// }
// addinfo();

// function hrline() {
//   let referenceNode = document.querySelectorAll("p");
//   for (let i = 0; i < referenceNode.length; i++) {
//     let newNode = document.createElement("hr");
//     referenceNode[i].appendChild(newNode);
//   }
// }

// let newli = prompt("Введите текст для пункта списка");
// let newul = document.createElement("ul");
// newul.innerHTML = `<li>${newli}<li>`;

// let body = document.querySelectorAll("body");
// body.appendChild(newul);
// for (let i = 0; i < 5; i++) {
//     let newLi = document.createElement("li");
//     let todolist = document.querySelectorAll("#todolist");
//     newLi.innerHTML = tasks[i];
//     todolist[0].appendChild(newLi);
//     newLi.className = "task";
//   }

// Напишите программу для создания списка, которые будет вводить пользователь.
// Для каждого пункта:
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте пункт и добавляйте его к <ul>.
// Процесс прерывается, когда пользователь нажимает "Отмена" или вводит пустую строку.
