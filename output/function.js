"use strict";
function add(num1, num2 = 0) {
    console.log(`Result: ${num1 + num2}`);
}
/* jevabe function declare kora exactly oi koekta parameter pass kora lagbe */
add(12, 8);
function getDetails(name, id, adress) {
    console.log(`Name: ${name}\n Id:${id}\n Address:${adress}`);
}
/* ? mark thakle oi parameter na dileo chole  */
getDetails('Adnan', 478);
