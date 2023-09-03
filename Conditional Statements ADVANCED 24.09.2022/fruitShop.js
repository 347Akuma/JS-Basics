function fruitShop(input) {
    let fruitType = input[0];
    let weekDay = input[1];
    let quantity = Number(input[2]);
    let price = 0;
 
    if (weekDay == "Saturday" || weekDay == "Sunday" ) {
       if (fruitType == "banana") {
        price = quantity * 2.70;
       } else if (fruitType == "apple") {
        price = quantity * 1.25;
       } else if (fruitType == "orange") {
        price = quantity * 0.90;
       } else if (fruitType == "grapefruit") {
        price = quantity * 1.60;
       } else if (fruitType == "kiwi") {
        price = quantity * 3.00;
       } else if (fruitType == "pineapple") {
        price = quantity * 5.60;
       } else if (fruitType == "grapes") {
        price = quantity * 4.20;
       }
    } else if (weekDay == "Monday" || weekDay == "Tuesday" || weekDay == "Wednesday" || weekDay == "Thursday" || weekDay == "Friday") {
        if (fruitType == "banana") {
            price = quantity * 2.50;
           } else if (fruitType == "apple") {
            price = quantity * 1.20;
           } else if (fruitType == "orange") {
            price = quantity * 0.85;
           } else if (fruitType == "grapefruit") {
            price = quantity * 1.45;
           } else if (fruitType == "kiwi") {
            price = quantity * 2.70;
           } else if (fruitType == "pineapple") {
            price = quantity * 5.50;
           } else if (fruitType == "grapes") {
            price = quantity * 3.85;
           } else {
            price = "error";
           }
    } else {
        price = "error";
    }
 
 
    if (price !== "error") {
        console.log(price.toFixed(2));
    } else {
        console.log(price);
    }
 
 
 
 
 
}
fruitShop(["tomato", "Tuesday", "2"]);