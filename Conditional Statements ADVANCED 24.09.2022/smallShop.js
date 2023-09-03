function smallShop(input) {
    let productName = input[0];
    let townName = input[1];
    let quantity = Number(input[2]);

    let priceTotal = 0;

    if (townName == "Sofia") {
        if (productName == "coffee") {
            priceTotal = 0.50 * quantity;

        } else if(productName == "water") {
            priceTotal = 0.80 * quantity;


        } else if(productName == "beer") {
            priceTotal = 1.20 * quantity;


        } else if (productName == "sweets") {
            priceTotal = 1.45 * quantity;


        } else if (productName == "peanuts") {
            priceTotal = 1.60 * quantity;


        }

    } else if (townName == "Plovdiv") {
        if (productName == "coffee") {
            priceTotal = 0.40 * quantity;

        } else if(productName == "water") {
            priceTotal = 0.70 * quantity;


        } else if(productName == "beer") {
            priceTotal = 1.15 * quantity;


        } else if (productName == "sweets") {
            priceTotal = 1.30 * quantity;


        } else if (productName == "peanuts") {
            priceTotal = 1.50 * quantity;


        }

    } else if (townName == "Varna"){
        if (productName == "coffee") {
            priceTotal = 0.45 * quantity;

        } else if(productName == "water") {
            priceTotal = 0.70 * quantity;


        } else if(productName == "beer") {
            priceTotal = 1.10 * quantity;


        } else if (productName == "sweets") {
            priceTotal = 1.35 * quantity;


        } else if (productName == "peanuts") {
            priceTotal = 1.55 * quantity;


        }

    }

    console.log("Total price:" + priceTotal.toFixed(2));



}
smallShop(["sweets", "Sofia", "2"])