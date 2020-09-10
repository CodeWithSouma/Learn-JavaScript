// create a stop watch object that have three public method
// 1.start
// 2.stop
// 3.reset

function StopWatch() {
    let duration,startTime,endTime,running;
    this.start = function () { 
        if(running) 
            throw new Error('Stopwatch has already started.');
        
        running = true;
        startTime = new Date();
        return 'Started';
    }; 
    this.stop = function () { 
        if(!running)
            throw new Error('Stopwatch is not started.');
       
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
        return 'Stoped';
    };
    this.reset = function () { 
        startTime = null;
        endTime = null;
        duration = 0;
        running = false;
        return 'Reseted.'
    };

    Object.defineProperty(this,'duration',{
        get:function () { return duration; }
    });

}

// stopwatch instant
const stopWatch = new StopWatch();
