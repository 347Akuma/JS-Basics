function vegetableMarket(input) {
    let priceKiloVeg = Number(input[0]);
    let priceKiloFru = Number(input[1]);
    
    let totalKiloVeg = Number(input[2]);
    let totalKiloFru = Number(input[3]);

    let totalPriceVeg = priceKiloVeg * totalKiloVeg;
    let totalPriceFru = priceKiloFru * totalKiloFru;

    let totalPriceEur = (totalPriceVeg + totalPriceFru) / 1.94;
    
    console.log(totalPriceEur.toFixed(2));

    


     
}
vegetableMarket([0.194,19.4,10,10])