function solve(args) {
    let year = +args[0],
        month = +args[1],
        day = +args[2];

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (day == 1) {
        switch (month) {
            case 1: day = 31; month = 12; year -= 1; break;
            case 2: day = 31; month -= 1; break;
            case 3:
                if (year % 4 == 0) {
                    day = 29;
                } else {
                    day = 28;
                }
                month -= 1; break;
            case 4: day = 31; month -= 1; break;
            case 5: day = 30; month -= 1; break;
            case 6: day = 31; month -= 1; break;
            case 7: day = 30; month -= 1; break;
            case 8: day = 31; month -= 1; break;
            case 9: day = 31; month -= 1; break;
            case 10: day = 30; month -= 1; break;
            case 11: day = 31; month -= 1; break;
            case 12: day = 30; month -= 1; break;

        }
        console.log(`${day}-${months[month - 1]}-${year}`);
    } else {
        console.log(`${day - 1}-${months[month - 1]}-${year}`);
    }
}
solve(['1984', '3', '1']);