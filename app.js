
// let rec = receipt()

// rec.deleveryPrice = 'Бесплатно'

// for(let key in rec) {
//     for(let newKey in rec[key]){
//         console.log(`Вы заказали ${key} | Общая стоимость ${rec[key][newKey]} сум с доставкой ${deliveryprice}`);
//     }
// }





















 let users = {};

 for (let i = 1; i <= 10; i++) {
   let name = prompt(`Введите имя `);
   let age = prompt(`Введите возраст `);
   users[i] = {
     name,
     age
   };
 }

 for (let key in users) {
   console.log(`Пользователь - ${key}`);
   console.log(` Ваше имя - ${users[key].name}`);
   console.log(`Ваш возраст - ${users[key].age}`);
 }

 console.log(users);