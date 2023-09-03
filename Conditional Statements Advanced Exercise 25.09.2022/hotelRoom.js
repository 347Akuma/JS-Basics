function hotelRoom(input) {

    let month = input[0];
    let nightCount = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month == "May" || month == "October") {
        studioPrice = nightCount * 50;
        apartmentPrice = nightCount * 65;
        if (nightCount > 7 && nightCount <= 14) {
            studioPrice = (nightCount * 50) * 0.95;
        } else if (nightCount > 14) {
            studioPrice = (nightCount * 50) * 0.70;
            apartmentPrice = (nightCount * 65) * 0.90;
        }

    } else if (month == "June" || month == "September") {
        if (nightCount > 14) {
            studioPrice = (nightCount * 75.20) * 0.80;
            apartmentPrice = (nightCount * 68.70) * 0.90;
        } else {
            studioPrice = nightCount * 75.20;
            apartmentPrice = nightCount * 68.70;
        }
    } else if (month == "July" || month == "August") {
        studioPrice = nightCount * 76;
        apartmentPrice = nightCount * 77;
        if (nightCount > 14) {
            apartmentPrice = (nightCount * 77) * 0.90;
        }
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);





}
hotelRoom(["June", "14"]);