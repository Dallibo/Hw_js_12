let goods = [
    {name: "Bread", count: 4, bought: false},
    {name: "Butter", count: 2, bought: true},
    {name: "Water", count: 3, bought: false},
    {name: "Juice", count: 1, bought: true},
]

function sortGoodsByNeed(a, b){
    if (a.bought === b.bought)
    return
    else
    if(!a.bought && b.bought)
    return -1;
    else 
    return 1;
}
goods.sort(sortGoodsByNeed)
goods.forEach(elem =>{
console.log(`Name: ${elem.name}, count: ${elem.count}, ${!elem.bought ? "Придбано" : "Не придбано"}`)
});

let sortGoods = []

console.log("--------------------")

function addGoodToCheck(check, addedGood) {
  let present = false;
  for (let i = 0; i < check.length; i++) {
    if (check[i].name === addedGood.name) {
      present = true;
      check[i].count += addedGood.count;
      break;
    }
  }
  if (!present) {
    check.push(addedGood);
  }
  return check;
}

addGoodToCheck(goods, { name: "Caviar", count: 1, bought: false });
addGoodToCheck(goods, { name: "Water", count: 3, bought: false });
console.log(goods);

console.log("--------------------")

function buyProduct(productName) {
  let foundProduct = goods.find((item) => item.name === productName);
  if (foundProduct) {
    foundProduct.bought = true;
    console.log(`Продукт "${productName}" Приобретенный.`);
  } else {
    console.log(`Продукт "${productName}" Не приобретенный.`);
  }
}
buyProduct("Bread");
buyProduct("Milk");

console.log("--------------------")

let check = [
    { name: "Apple", quantity: 5, price: 3 },
    { name: "Orange", quantity: 3, price: 10 },
    { name: "Banana", quantity: 1, price: 13 },
    { name: "Mango", quantity: 4, price: 20 },
  ];
  
  function displayCheck() {
    console.log('Чек:');
    check.forEach((item) => {
      const total = item.quantity * item.price;
      console.log(`${item.name} - ${item.quantity} шт. x ${item.price} грн = ${total} грн`);
    });
  }

displayCheck();

console.log("--------------------")

function allPrice() {
    let total = 0;
    check.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  }
  const totalPrice = allPrice();
  console.log(`Общая сумма покупки: ${totalPrice} грн`)

  console.log("--------------------")

function highestPrice(){
    const sortedCheck = check.sort((a, b) => b.price - a.price);
    return sortedCheck[0];
}
const newHigestPrice = highestPrice();
console.log(`Самая дорогая покупка: ${newHigestPrice.name} - ${newHigestPrice.price} грн`);

console.log("--------------------")

function averageCost() {
    let totalQuantity = 0;
    check.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  }
  const totalAmount = averageCost();
  const avgCost = (totalPrice / totalAmount).toFixed(2);
  console.log(`Средняя цена каждого товара ${avgCost}`);

  console.log("--------------------")

  var styles = [
    {name: 'color', value: 'blue'},
    {name: 'font-size', value: '50px'},
    {name: 'text-align', value: 'center'},
    {name: 'border', value: ' 1px solid red'}
  ];
  function styleText(styles, text) {
    var styleAttribute = '';
    for (var i = 0; i < styles.length; i++) {
      var style = styles[i];
      styleAttribute += style.name + ': ' + style.value + '; ';
    }
    document.write('<p style="' + styleAttribute + '">' + text + '</p>');
  }
  var text = 'JavaScript';
  styleText(styles, text);

  console.log("--------------------")

  var classrooms = [
    { name: "193", seats: 15, faculty: "Web-31" },
    { name: "256", seats: 12, faculty: "Web-32" },
    { name: "103", seats: 20, faculty: "Web-33" },
  ];
  
  function AllClassrooms() {
    for (var i = 0; i < classrooms.length; i++) {
      var classroom = classrooms[i];
      console.log("Аудитория: " + classroom.name);
      console.log("Колличество мест: " + classroom.seats);
      console.log("Факультет: " + classroom.faculty);
      console.log("--------------------");
    }
  }
  AllClassrooms();
  
  function printFaculty(faculty) {
    for (var i = 0; i < classrooms.length; i++) {
      var classroom = classrooms[i];
      if (classroom.faculty === faculty) {
      console.log("Аудитория: " + classroom.name);
      console.log("Колличество мест: " + classroom.seats);
      console.log("Факультет: " + classroom.faculty);
      console.log("--------------------");
      }
    }
  }
printFaculty("Web-32");
  

function printClassroomsByGroup(group) {
  for (var i = 0; i < classrooms.length; i++) {
    var classroom = classrooms[i];
    if (classroom.faculty === group.faculty && classroom.seats >= group.numberOfStudents) {
      console.log("Аудитория: " + classroom.name);
      console.log("Колличество мест: " + classroom.seats);
      console.log("Факультет: " + classroom.faculty);
      console.log("--------------------");
    }
  }
}
var group = { name: "Group-1", numberOfStudents: 15, faculty: "Web-31" };
printClassroomsByGroup(group);

function sortClassrooms() {
  var sortedClassrooms = classrooms.slice();
  sortedClassrooms.sort(function(a, b) {
    return a.seats - b.seats;
  });
  for (var i = 0; i < sortedClassrooms.length; i++) {
    var classroom = sortedClassrooms[i];
    console.log("Аудитория: " + classroom.name);
      console.log("Колличество мест: " + classroom.seats);
      console.log("Факультет: " + classroom.faculty);
      console.log("--------------------");
  }
}
sortClassrooms();

function sortClassroomsByName() {
  var sortedClassrooms = classrooms.slice();
  sortedClassrooms.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  for (var i = 0; i < sortedClassrooms.length; i++) {
    var classroom = sortedClassrooms[i];
    console.log("Аудитория: " + classroom.name);
      console.log("Колличество мест: " + classroom.seats);
      console.log("Факультет: " + classroom.faculty);
      console.log("--------------------");
  }
}
sortClassroomsByName();

