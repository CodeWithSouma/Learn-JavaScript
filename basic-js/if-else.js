// If...else
// depending upon current HOUR we greet diffrent Message
// If hour between 6am and 12pm: Good Morning
// If it is between 12pm and 6pm:Good Afternoon
// otherwise we display : Good evening

let currentTime = new Date().toLocaleTimeString();
let currentHour = new Date().getHours();
let message = '';

if (currentHour >= 6 && currentHour < 12) 
    message = 'Good Morning!';
else if(currentHour < 18)
    message = 'Good Afternoon!';
else
    message = 'Good Evening!';


console.log(currentTime);
console.log(message);