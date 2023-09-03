function catWalking(input) {

    let dailyWalkMin = Number(input[0]);
    let dailyWalkCount = Number(input[1]);
    let dailyCalIntake = Number(input[2]);

    let totalMinWalk = dailyWalkMin * dailyWalkCount;

    let calPerMin = 5;
    let totalCalBurned = totalMinWalk * calPerMin;

    calBurnedNeeded = dailyCalIntake * 0.50;

    if (totalCalBurned > calBurnedNeeded) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalBurned}.`);
    } else if (totalCalBurned < calBurnedNeeded) {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalBurned}.`)
    }


}
catWalking([40, 2, 300])