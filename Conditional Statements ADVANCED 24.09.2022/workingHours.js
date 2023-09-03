function workingHours(input) {

    let hour = Number(input[0]);
    let weekDay = input[1];

    if ((weekDay == "Monday" || weekDay == "Tuesday" || weekDay == "Wednesday" || weekDay == "Thursday" || weekDay == "Friday" || weekDay == "Saturday") && (hour >= "10" && hour < "18")) {
        console.log("open");
    } else {
        console.log("closed");

    }
    } 
    



    






workingHours(["11", "Saturday"]);