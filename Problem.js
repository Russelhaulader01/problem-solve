
const arr = [
    {
        name: 'Mr Rashed',
        birthYear: 1999,
        currentYear: 2022,
        district: "Dhaka",
        postNo: 1200,
        priority: 2
    },
    {
        name: 'Mr Rahim',
        birthYear: 1998,
        currentYear: 2022,
        district: "Khulna",
        postNo: 7400,
        priority: 1
    },
    {
        name: 'Md Karim',
        birthYear: 1995,
        currentYear: 2022,
        district: "Jashore",
        postNo: 1400,
        priority: 3
    },
]

const cardDistribution = (arr) => {
    let serial = 0;
    const cardNum = arr.map(person => {
        const districtPart = person.district.slice(0, 2).toUpperCase();
        const postalNumPart = person.postNo.toString().slice(0, 2);
        serial++
        const serialNum = '000000'.slice(0, 6 - serial.toString().length) + `${serial}`;

        return {
            cardNumber: districtPart + postalNumPart + person.birthYear + serialNum,
            gift: serial % 2 === 0 ? 'R' : 'W',
            priority: person.priority
        }
    })
    return cardNum.sort(function (x, y) {
        return x.priority - y.priority;
    });
}
console.log(cardDistribution(arr));