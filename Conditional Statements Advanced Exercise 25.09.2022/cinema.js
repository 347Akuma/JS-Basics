function cinema(input) {
    let projectionType = input[0];
    let rowsCount = Number(input[1]);
    let columnsCount = Number(input[2]);

    let ticketPrice = 0;

    switch (projectionType) {
        case "Premiere":
            ticketPrice = 12.00;
            break;
        case "Normal":
            ticketPrice = 7.50;
            break;
        case "Discount":
            ticketPrice = 5.00;
            break;
    }
    
    let totalIncome = ((rowsCount * columnsCount) * ticketPrice).toFixed(2);
    console.log(`${totalIncome} leva`);




}
cinema(["Discount","12","30"])
