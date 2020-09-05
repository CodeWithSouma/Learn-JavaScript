// Switch...case
// type of user 
let role = 'Guest';
switch (role.toLowerCase()) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator user');
        break;
    
    default:
        console.log('Unkown User');
        break;
}