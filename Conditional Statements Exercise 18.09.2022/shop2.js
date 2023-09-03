function shop2(input) {
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuPrice = gpuCount * 250;

    let cpuPrice = gpuPrice * 0.35;
    let cpuPriceTotal = cpuPrice * cpuCount;
    

    let ramPrice = gpuPrice * 0.10;
    let ramPriceTotal = ramPrice * ramCount;

    let totalSum = gpuPrice + cpuPriceTotal + ramPriceTotal;

    if (gpuCount >= cpuCount) {
        totalSum = totalSum - (totalSum * 0.15).toFixed(2);
    }
    let moneyLeft = budget - totalSum;
    let moneyNeeded = (totalSum - budget).toFixed(2);

    if (totalSum <= budget) {
        console.log(`You have ${Math.abs(moneyLeft).toFixed(2)} leva left!`);
    } else if (totalSum > budget) {
        console.log(`Not enough money! You need ${moneyNeeded} leva more!`)
    }
    
    

    


}
shop2(["920.45", "3", "1", "1"])