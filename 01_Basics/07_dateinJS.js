
// console.log(myDate.getDate()) // current date
// console.log(myDate.getDay())  //day of the week starting from monday
// console.log(myDate.getFullYear())  // gives current year
// console.log(myDate.getHours()) // give time in hours by 24hr clock
// console.log(myDate.getMilliseconds()) // time in miliseconds
// console.log(myDate.getMinutes()) ///time on minutes in current hour going on
// console.log(myDate.getMonth()) //month range is from 0 to 11 

// console.log(myDate.getSeconds())
// console.log(myDate.getTime())
// console.log(myDate.getTimezoneOffset())
// console.log(myDate.getVarDate)

// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
