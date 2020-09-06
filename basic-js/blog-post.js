//create a object for blog post that content these property
// title
// body
// author
// views
//comments[{author,body},..]
// isLive 

// using object literal
let post = {
    title:'How to write clean code in javascript',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
    ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
    ' Ut enim ad minim veniam, quis nostrud exercitation'+
    ' ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author:'Soumadip Dey',
    views:50,
    comments:[
        {
            author:'Soumik Nandi',
            comments:'Nice post...good job souma.'
        },
        {
            author:'Arijit Das',
            comments:'What a great post ...keep it up.'
        }
    ],
    isLive:true
}

console.log(post);