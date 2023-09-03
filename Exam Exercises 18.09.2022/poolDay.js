function poolDay(input) {
    let peopleNumber = Number(input[0]);
    let entryFee = Number(input[1]);
    let sunLounger = Number(input[2]);
    let umbrella = Number(input[3]);

    let entryFeeTotal = peopleNumber * entryFee;
    
    let sunLoungerPercent = Math.ceil(peopleNumber * 0.75);
    let sunLoungerTotal = sunLoungerPercent * sunLounger;
  
    let umbrellaPercent = Math.ceil(peopleNumber * 0.50);
    let umbrellaTotal = umbrellaPercent * umbrella;
    
    let totalEntrySum = (entryFeeTotal + sunLoungerTotal + umbrellaTotal).toFixed(2);
    
    console.log(`${totalEntrySum} lv.`);


}
poolDay(["50", "6", "8", "4"])