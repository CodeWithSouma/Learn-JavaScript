const movies = [
    {title:'a',year:2018,rating:4.5},
    {title:'b',year:2018,rating:4.7},
    {title:'c',year:2018,rating:3},
    {title:'d',year:2017,rating:4.5}
];

// all the movie in 2018 with rating > 4
// sort by them by there rating (descending order)
// pick their title like this 'b' 'a'

const titles = movies
                .filter(m => m.year === 2018 && m.rating >= 4)
                .sort((a,b) => a.rating - b.rating)
                .reverse()
                .map(m => m.title);

    // a.rating = 4.5
    // b.rating = 4
    // a - b = .5 positive means a > b
    // same as if a - b = negtive means a < b
    // and a - b = 0 means a === b

    console.log(titles);


