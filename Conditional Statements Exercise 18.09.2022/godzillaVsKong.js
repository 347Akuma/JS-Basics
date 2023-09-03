function godzillaVsKong(input) {
    function goodzillaVsKong(input) {
        //Get Data
        let budget = Number(input[0]);
      let statists = Number(input[1]);
      let price = Number(input[2]);
  
        //Price
      let decorePrice = budget * 0.1;
      let clothPrice = statists * price;
  
        //Discount
      if (statists > 150) {
          clothPrice = clothPrice - (clothPrice * 0.1);
      }
    
        //Difference
      let finalPrice = decorePrice + clothPrice;
      let diff = Math.abs(budget - finalPrice).toFixed(2);
      
        //Print
      if (finalPrice <= budget) {
          console.log("Action!");
          console.log("Wingard starts filming with " + diff + " leva left.");
      } else {
          console.log("Not enough money!");
          console.log("Wingard needs " + diff + " leva more.");
      }
  }
}
godzillaVsKong(["15437.62", "186", "57.99"])