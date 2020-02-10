// const now = new Date();

// console.log(now);
// console.log(typeof now);

// // year, month, day, times
// console.log('getFullYear: ', now.getFullYear());
// console.log('getMonth: ', now.getMonth());
// console.log('getDate: ', now.getDate());
// console.log('getDay: ', now.getDay());
// console.log('getHours: ', now.getHours());
// console.log('getMinutes: ', now.getMinutes());
// console.log('getSeconds: ', now.getSeconds());

// // timestamps
// console.log('timestamp: ', now.getTime());

// // date string
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// const before = new Date('February 1 2019 7:30:59');
// console.log(now.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime();
// console.log(diff);

// const mins = diff / 1000 / 60;
// const hours = diff / 1000 / 60 / 60;
// const days = diff / 1000 / 60 / 60 / 24;

// console.log(mins, hours, days);

// const firstDate = new Date('February 1 2019 7:30:30');
// const secondDate = new Date('February 1 2019 7:30:31');

// const d = secondDate.getTime() - firstDate.getTime();
// const daysInD = d / 1000 / 60 / 60 / 24;
// console.log(d);

// const da = new Date(1548999058999);
// console.log(da);
// console.log(da.getTime());

// ///////////////////////////////////////////////////// 2.

// const clock = document.querySelector('.clock');

// const tick = () => {

//     const nowDate = new Date();

//     let h = nowDate.getHours();
//     let m = nowDate.getMinutes();
//     let s = nowDate.getSeconds();
//     if(h < 10) {
//         h = `0${h}`;
//     }
//     if(m < 10) {
//         m = `0${m}`;
//     }
//     if(s < 10) {
//         s = `0${s}`;
//     }

//     const html = `
//         <span>${h}</span> : <span>${m}</span> : <span>${s}</span>
//     `;

//     clock.innerHTML = html;

// };

// tick();
// setInterval(tick, 1000);

// ///////////////////////////////////////////////////// date-fns

const now = new Date();

console.log(dateFns.isToday(now));

console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'DD.MM.YYYY'));

const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));