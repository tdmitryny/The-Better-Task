import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import { Task } from "./Task";
import { CompleteTask } from "./CompleteTask";
import { IncompleteTask } from "./IncompleteTask";
import { generateId } from "./Id";
import { useSelector } from "react-redux";

const currentDate = new Date().toLocaleDateString("en-EN");

export function SecondBox({ addSecondBox }) {
    const activeTagLeft = useSelector((state) => state.activeTag);

    const [task, setTask] = useState([
        {
            id: generateId(),
            text: "Strawberries",
            status: "todo", //todo, complete, uncomplete
            tag: 1,
            //date: date,
        },
        {
            id: generateId(),
            text: "Apples",
            status: "todo", //todo, complete, uncomplete
            tag: 1,
            //date: date,
        },
        {
            id: generateId(),
            text: "Potatos 1lb.",
            status: "todo", //todo, complete, uncomplete
            tag: 1,
            //date: date,
        },
    ]);

    const [showID, setShowId] = useState(-1);
    const [inputText, setInputText] = useState("");
    const [inputTask, setInputTask] = useState({
        id: "",
        text: "",
    });

    const [alert, setAlert] = useState('sfdsf');

    //Task create
    const addTask = (newText) => {
        let newObj = Object.assign({}, newText, {
            status: "todo",
            tag: activeTagLeft,
        });
        const setDate = newObj.date;

        setTask(
            task.map((item) => {
                if (currentDate > setDate && item.status !== "complete")
                    item.status = "incomplete";
                return item;
            })
        );
        setTask((list) => [newObj, ...list]);
    };

    const editTask = () => {
        setTask(
            task.map((item) => {
                if (item.id === inputTask.id) item.text = inputText;
                return item;
            })
        );
    };

    const changeStatusToComplete = (list) => {
        setTask(
            task.map((item) => {
                if (item.id === list.id) item.status = "complete";
                return item;
            })
        );
    };

    //Remove task
    const removeTask = (id) => {
        setTask(task.filter((list) => list.id !== id));
    };

    //Edit task
    const showInput = (item) => {
        setShowId(item.id);
        setInputTask({
            id: item.id,
        });
        editTask(item);
        setInputText(item.text);
    };

    const hideText = () => {
        setTask("");
    };

    //Change task
    const handleInputChnage = ({ target }) => {
        setInputText(target.value);
    };

    const inputEdit = (list) => {
        return (
            <div className="Edit-form">
                <input
                    value={inputText}
                    onChange={handleInputChnage}
                    type={showID !== list.id ? "hidden" : "text"}
                />

                <button onClick={showInput}>OK</button>
            </div>
        );
    };

    const showNewTask = () => {
        console.log("New clicked");
    };

    return (
        <div className="SecondBox">
            <div className="SecondBox-inner">
                <h2 className="Titles">Create new task</h2>
            </div>
            <Form onAdd={addTask} onHide={hideText} />

            <div className="Task-todo__box">
                <h2 className="Titles">to-do</h2>
                <ul className="Task-box">
                    {task.length > 0
                        ? task.map(
                            (list) =>
                                list.status === "todo" &&
                                list.tag === activeTagLeft && (
                                    <Task
                                        key={list.id}
                                        onChangeStatus={
                                            changeStatusToComplete
                                        }
                                        onRemoveTask={removeTask}
                                        onShowInput={showInput}
                                        onInputEdit={inputEdit}
                                        list={list}
                                        showID={showID}
                                    />
                                )
                        )
                        : <p className="Confirm">No task to show, please create new task!</p>}
                </ul>

                <h2 className="Titles">complete</h2>
                <ul className="Task-box">
                    {task.length > 0
                        && task.map(
                            (list) =>
                                list.status === "complete" &&
                                list.tag === activeTagLeft && (
                                    <CompleteTask
                                        key={list.id}
                                        list={list}
                                        onRemoveTask={removeTask}
                                    />
                                )
                        )
                    }
                </ul>
                <h2 className="Titles">incomplete</h2>
                <ul className="Task-box">
                    {task.length > 0
                        && task.map(
                            (list) =>
                                list.status === "incomplete" &&
                                list.tag === activeTagLeft && (
                                    <IncompleteTask
                                        key={list.id}
                                        list={list}
                                        onRemoveTask={removeTask}
                                    />
                                )
                        )
                    }
                </ul>
            </div>

        </div>
    );
}

export default SecondBox;
