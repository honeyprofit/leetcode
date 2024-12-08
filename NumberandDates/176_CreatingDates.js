//Create a date
const now = new Date();
console.log(now); //Sun Dec 08 2024 22:55:33 GMT+0900 (한국 표준시)

console.log(new Date('December 24,2015')); //Thu Dec 24 2015 00:00:00 GMT+0900 (한국 표준시)

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); //Thu Nov 19 2037 15:23:05 GMT+0900 (한국 표준시)
console.log(new Date(2037, 10, 31)); //Thu Dec 01 2037 00:00:00 GMT+0900 (한국 표준시)

//밀리세컨드(1/1000)s
console.log(new Date(0)); //Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //3일뒤: Sun Jan 04 1970 09:00:00 GMT+0900 (한국 표준시)

//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); //20237
console.log(future.getMonth()); //10
console.log(future.getDate()); //19
console.log(future.getDay()); //4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //2037-11-19T06:23:00.000Z

//Time Stamp
console.log(future.getTime()); //2142224580000
console.log(new Date(2142224580000)); //Thu Nov 19 2037 15:23:00 GMT+0900 (한국 표준시)

console.log(Date.now()); //1733666816335

future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040 15:23:00 GMT+0900 (한국 표준시)
