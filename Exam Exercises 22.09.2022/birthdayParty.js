function birthdayParty(input) {
    
    let rent = Number(input[0]);
    
    let cake = rent * 0.20;
    let drinks = cake - (cake * 0.45);
    let animator = rent / 3;

    let totalSum = rent + cake + drinks + animator;
    
    console.log(totalSum.toFixed(2));




}

birthdayParty([3720]);