function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let minutesEarly = 0;
    let minutesLate = 0;

    let finalArrival = arrivalHour * 60 + arrivalMinute;
    let finalExam = examHour * 60 + examMinute;

    if (finalArrival > finalExam) {
        console.log(`Late`);
        minutesLate = finalArrival - finalExam;
        if (minutesLate < 60) {
            console.log(`${minutesLate} minutes after the start`);
        } else {
            let hours = Math.floor(minutesLate / 60);
            let minutes = minutesLate % 60;
            let formattedMinutes = String(minutes).padStart(2, "0");
            console.log(`${hours}:${formattedMinutes} hours after the start`);

        }


    } else if (finalArrival < finalExam && finalExam - finalArrival > 30) {
        console.log("Early");
        minutesEarly = finalExam - finalArrival;
        if (minutesEarly < 60) {
            console.log(`${minutesEarly} minutes before the start`);

        } else {
            let hours = Math.floor(minutesEarly / 60);
            let minutes = minutesEarly % 60;
            let formattedMinutes = String(minutes).padStart(2, "0");
            console.log(`${hours}:${formattedMinutes} hours before the start`);

        }
    } else if (finalArrival <= finalExam) {
        console.log(`On Time`);
        minutesEarly = finalExam - finalArrival;
        if (minutesEarly <= 30) {
            console.log(`${minutesEarly} minutes before the start`);
        }
    }
}
onTimeForTheExam(["9", "00", "8", "30"]);