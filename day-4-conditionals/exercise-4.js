{
    // let day = prompt('What is the day today?').toLowerCase()

    // if (day === 'saturday' || day === 'sunday') {
    //     console.log(`${day} is a weekend.`)
    // } else {
    //     console.log(`${day} is a working day.`)
    // }
}

{
    let month = {
        january: 'January has 31 days',
        february: 'February has 28 days',
        march: 'March has 31 days',
        april: 'April has 30 days',
        may: 'May has 31 days',
        june: 'June has 30 days',
        july: 'July has 31 days',
        august: 'August has 31 days',
        september: 'September has 30 days',
        october: 'October has 31 days',
        november: 'November has 30 days',
        december: 'December has 31 days',
    }

    let input = prompt('Enter a month').toLowerCase()

    switch (true) {
        case input === 'january':
            console.log(month.january);
            break;
        case input === 'february':
            console.log(month.february);
            break;
        case input === 'march':
            console.log(month.march);
            break;
        case input === 'april':
            console.log(month.april);
            break;
        case input === 'may':
            console.log(month.may);
            break;
        case input === 'june':
            console.log(month.june);
            break;
        case input === 'july':
            console.log(month.july);
            break;
        case input === 'august':
            console.log(month.august);
            break;
        case input === 'september':
            console.log(month.september);
            break;
        case input === 'october':
            console.log(month.october);
            break;
        case input === 'november':
            console.log(month.november);
            break;
        case input === 'december':
            console.log(month.december);
            break;
        default:
            console.log('invalid input');
    }
}

