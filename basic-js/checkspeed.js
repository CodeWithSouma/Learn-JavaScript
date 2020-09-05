// speed limit = 70 => ok
// after 70 km/h every 5 km  => 1 point
// if point > 12 licence suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed < speedLimit+kmPerPoint) {
        return 'Ok';
    }else{
       let point = Math.floor((speed - speedLimit) / kmPerPoint);
        if (point >= 12) {
            return 'Licence Suspended.';
        }else{
            return point + ' Points';
        }
    }
}

console.log(checkSpeed(80));