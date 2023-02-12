import {useState} from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [st, setSt] = useState(1)
    const inc = () => {
        setSt(st + 1)
    }
    return <div className={classes.button}>
        <button onClick={inc}>
            counter {st} !!!!!@@@@
        </button>
    </div>
}