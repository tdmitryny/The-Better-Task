import React, { useState } from 'react';
import { TaskLists } from './TaskLists';

export function FirstBox() {

    const [btn, setBtn] = useState(true);

    const clickRight = () => {
        setBtn(!btn)
    }

    return (
        <div className={btn ? "FirstBox" : "FirstBox-hide"}>
            <button className={"Btn-first-box"} onClick={clickRight}></button>
            <div className="Title-box">
                <h1 className="Title-inner">💡The Better Task</h1>
            </div>
            <TaskLists />
        </div >
    )
}

export default FirstBox
