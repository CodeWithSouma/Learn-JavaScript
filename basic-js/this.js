// The this Keyword

const video = {
    title:'a',
    play(){
        console.log(this);//it display video object
    }
}

// method -> object
// video.play();

// video.stop = function () {
//     console.log(this);
// }

// video.stop();


// function -> global(window,global)
// function playVideo() {
//     console.log(this);//returns global object window
// }

// playVideo();

// constructor function
function Video(title) {
    this.title = title;
    console.log(this);//returns global object window
}
const v = new Video('a');