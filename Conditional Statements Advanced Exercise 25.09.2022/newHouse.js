function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let flowersPrice = 0;

    switch (flowerType) {
        case "Roses":
            flowersPrice = flowerCount * 5;
            if (flowerCount > 80) {
                flowersPrice = flowersPrice * 0.90;
            }
            break;
        case "Dahlias":
            flowersPrice = flowerCount * 3.80;
            if (flowerCount > 90) {
                flowersPrice = flowersPrice * 0.85;
            }
            break;
        case "Tulips":
            flowersPrice = flowerCount * 2.80;
            if (flowerCount > 80) {
                flowersPrice = flowersPrice * 0.85;
            }
            break;
        case "Narcissus":
            flowersPrice = flowerCount * 3;
            if (flowerCount < 120) {
                flowersPrice = flowersPrice * 1.15;
            }
            break;
        case "Gladiolus":
            flowersPrice = flowerCount * 2.50;
            if (flowerCount < 80) {
                flowersPrice = flowersPrice * 1.20;
            }
            break;




    }
    if (budget >= flowersPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - flowersPrice).toFixed(2)} leva left.`)



    } else {
        console.log(`Not enough money, you need ${(flowersPrice - budget).toFixed(2)} leva more.`)
    }








}
newHouse(["Tulips", "88", "260"]);
