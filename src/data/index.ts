const years: number[] = [];

for (let i = 2023; i > 1899; i--) {
	years.push(i);
}


const months = ["Jan", "Feb", "Mar", "Apr", "May",
"Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];


const daysOfMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]


const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];


const minutes: number[] = []

for (let i = 0; i < 61; i++) {
	minutes.push(i);
}

export { years, months, daysOfMonth, hours, minutes };