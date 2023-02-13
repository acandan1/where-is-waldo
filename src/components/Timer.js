import React, { useEffect, useState } from "react";

const Timer = (props) => {
    console.log(props.bool);
    const [seconds, setSeconds] = useState(0);
    const [load, setLoad] = useState(false);
    const [stop, setStop] = useState(false);

    /**
     * Self-adjusting interval to account for drifting
     * 
     * @param {function} workFunc  Callback containing the work to be done
     *                             for each interval
     * @param {int}      interval  Interval speed (in milliseconds)
     * @param {function} stopWhen
     * @param {function} errorFunc (Optional) Callback to run if the drift
     *                             exceeds interval
     */
    function AdjustingInterval(workFunc, interval, stopWhen, errorFunc) {
        if (stopWhen()) { 
            console.log("called");
            clearTimeout(timeout);
        }
        var that = this;
        var expected, timeout;
        this.interval = interval;

        this.start = function() {
            expected = Date.now() + this.interval;
            timeout = setTimeout(step, this.interval);
        }

        this.stop = function() {
            clearTimeout(timeout);
        }

        function step() {
            var drift = Date.now() - expected;
            if (drift > that.interval) {
                // You could have some default stuff here too...
                if (errorFunc) errorFunc();
            }
            if (!props.bool) {
                workFunc();
            }
        }
    }

    var num = -1;

    // Define the work to be done
    var doWork = function() {
        setSeconds(++num);
    };

    var stopWn = function() {
        if (props.bool) { return true; }
    };

    // Define what to do if something goes wrong
    var doError = function() {
        console.warn('The drift exceeded the interval.');
    };

    // (The third argument is optional)
    var ticker = new AdjustingInterval(doWork, 1000, stopWn, doError);

    useEffect(() => {
        if (!load) {
            ticker.start();
            setLoad(true);
            console.log("start");
        }
    }, [props.bool, load, ticker, stop]);


    return (
        <div className="timer">
            <p><span id="seconds">{seconds}</span>:<span id="tens"></span></p>
        </div>
    )
}

export default Timer;