import React, { useState } from 'react';
import { TaskLists } from './TaskLists';

export function FirstBox() {

    const [btn, setBtn] = useState(true);

    const clickRight = () => {
        setBtn(!btn)
    }

    return (
        <div className={btn ? "FirstBox" : "FirstBox-hide"}>
            <button className={btn ? "Btn-first-box" : "Btn-first-box-active"} onClick={clickRight}></button>
            <div className="Title-box">
                <h1 className="Title-inner">🌿MicroGreens Task</h1>
            </div>
            <TaskLists />
        </div >
    )
}

export default FirstBox
