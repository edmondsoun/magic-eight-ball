import React, { useState } from "react";
import './EightBall.css';

/** Generate random number between 0 and max. */
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

/** Generate default eight-ball and random answer on click. 
 * Props:
 * Answers is array of objects: [{msg, color}, ...]
 * 
 * Returns HTML with default message or random answer on click.
*/
function EightBall({ answers }) {

    console.log(answers)

    const [result, setResult] = useState({
        msg: "Think of a question",
        color: "black",
    });

    function handleClick() {
        //break out into variables
        setResult(answers[getRandom(answers.length)]);
    }

    console.log(result)

    return (
        <div style={{backgroundColor:result.color}}
            onClick={handleClick}>
            {result.msg}
        </div>
    )

}




export default EightBall;