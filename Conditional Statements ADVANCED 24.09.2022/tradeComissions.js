function tradeComissions(input) {
    let city = input[0];
    let salesVolume = Number(input[1]);
    let commission = 0;

    if (city == "Sofia") {
        if (0 <= salesVolume && salesVolume <= 500 ) {
            commission = salesVolume * 0.05;
        } else if (500  < salesVolume && salesVolume <= 1000) {
            commission = salesVolume * 0.07;
        } else if (100 < salesVolume && salesVolume <= 10000) {
            commission = salesVolume * 0.08;
        } else if (salesVolume > 10000) {
            commission = salesVolume * 0.12;
        } else {
            commission = "error";
        }

    } else if (city == "Varna") {
        if (0 <= salesVolume && salesVolume <= 500 ) {
            commission = salesVolume * 0.045;
        } else if (500  < salesVolume && salesVolume <= 1000) {
            commission = salesVolume * 0.075;
        } else if (100 < salesVolume && salesVolume <= 10000) {
            commission = salesVolume * 0.10;
        } else if (salesVolume > 10000) {
            commission = salesVolume * 0.13;
        } else {
            commission = "error";
        }

    } else if (city == "Plovdiv") {
        if (0 <= salesVolume && salesVolume <= 500 ) {
            commission = salesVolume * 0.055;
        } else if (500  < salesVolume && salesVolume <= 1000) {
            commission = salesVolume * 0.08;
        } else if (100 < salesVolume && salesVolume <= 10000) {
            commission = salesVolume * 0.12;
        } else if (salesVolume > 10000) {
            commission = salesVolume * 0.145;
        } else {
            commission = "error";
        }


    } else {
        commission = "error";
    }
    if (commission !== "error") {
        console.log(commission.toFixed(2));
    } else {
        console.log(commission)
    }



}
tradeComissions(["Plovdiv", "8543.86"]);