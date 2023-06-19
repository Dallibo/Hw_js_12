// let goods = [
//     {name: "Bread", count: 4, bought: false},
//     {name: "Butter", count: 2, bought: true},
//     {name: "Water", count: 3, bought: false},
//     {name: "Juice", count: 1, bought: true},
// ]

// function sortGoodsByNeed(a, b){
//     if (a.bought === b.bought)
//     return
//     else
//     if(!a.bought && b.bought)
//     return -1;
//     else 
//     return 1;
// }
// goods.sort(sortGoodsByNeed)
// goods.forEach(elem =>{
// console.log(`Name: ${elem.name}, count: ${elem.count}, ${!elem.bought ? "Придбано" : "Не придбано"}`)
// });

// let sortGoods = []


// function addGoodToCheck(check, addedGood){
//     let present = false
//     for(let i = 0; i < check.lenght; i++){;
//         if(check[i].name === addedGood.name){
//             present = true;
//             break
//         }
//     }
//     if(present){
//         let goodToIncreaceCount = Array.from(check).find(g=>{
//             return g.name === addedGood.name
//         })
//         goodToIncreaceCount.count += addedGood
//     }
//     else
//     check.push(addedGood);
//     return check;
// }

// addGoodToCheck(goods, {name: "Caviar", count: 1, bought: false})
// console.log(goods);
// addGoodToCheck(goods,  {name: "Water", count: 3, bought: false},)



console.log("-------------")

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

console.log("-------------")

function allPrice() {
    let total = 0;
    check.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  }
  const totalPrice = allPrice();
  console.log(`Общая сумма покупки: ${totalPrice} грн`)

  console.log("-------------")

function highestPrice(){
    const sortedCheck = check.sort((a, b) => b.price - a.price);
    return sortedCheck[0];
}
const newHigestPrice = highestPrice();
console.log(`Самая дорогая покупка: ${newHigestPrice.name} - ${newHigestPrice.price} грн`);

console.log("-------------")

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

  console.log("-------------")
function averagePrice(check){
    let totalPrice = 0;
    let totalQuantity = 0;
    check.forEach(elem=>{
        totalPrice+=elem.price*elem.quantity;
        totalQuantity += elem.quantity;
    });
    return (totalPrice/totalQuantity).toFixed(2);
}

console.log(averagePrice(check))
  

function averagePrice2(check){
    let totalPrice = Array.from(check).reduce((acc, elem)=>{
        acc+=elem.price*elem.quantity;
        return acc;
    }, 0);
    let totalQuantity = Array.from(check).reduce((acc, elem)=>{
        return acc+elem.quantity
    }, 0);
    return (totalPrice / totalQuantity).toFixed(2);
}
console.log(averagePrice2(check))

function info(check){
    let res = Array.from(check)
    .reduce((acc, elem)=>{
        let obj = {title: elem.name, totalPrice: elem.price * elem.quantity, quantity: elem.quantity};
        console.log(obj);
        acc.items.push(obj);
        acc.totalPrice += elem.price * elem.quantity;
        return acc;
    }, {items: [], totalPrice: 0});
    return res;
}

function infoMap(check){
    let res = Array.from(check)
    .map(elem=>{
        return {name: elem.name, totalPrice: elem.price * elem.quantity}
    })
    return res;
}
console.log(info(check));
console.log(infoMap(check));