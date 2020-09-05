// display all the  String Properties of a object
function showProperties(obj) {
    for (let key in obj) {
      if(typeof obj[key] === 'string')
         console.log(key,obj[key]);             
    }
}

var movie ={
    name:'Razz3',
    releaseYear:2002,
    rating:4.5,
    director:'Vikram Bhatt'
}

showProperties(movie);