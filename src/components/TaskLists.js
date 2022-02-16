import React, { useState, useContext } from "react";
import crossAdd from "../assets/crossAdd.svg";
import { generateId } from "./Id";
import showSecondBox from "./Context";
import { useDispatch, useSelector } from "react-redux";

export function TaskLists() {
    const dispatch = useDispatch();
    // const activeTagLeft = useSelector((state) => state.activeTag);

    const setActiveTagLeft = (id) => {
        dispatch({ type: "SET_ACTIVE_TAG", payload: id });
    };

    const [todo, setTodo] = useState([
        {
            id: generateId(),
            text: "Work task",
        },
    ]);

    const [inputTodoText, setInputTodoText] = useState("");
    const [showTask, setShowTask] = useState(false);
    // const [activeTag, setActiveTag] = useState(null);

    const { state, setState } = useContext(showSecondBox);

    const newFunc = (item) => {
        setActiveTagLeft(item.id);
        // setActiveTag(item.id);
        setState(true);
        console.log(todo);
        //Test if it works
        const random = Math.floor(Math.random() * 10);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputTodoText.length > 0) {
            const updated = {
                id: generateId(),
                text: inputTodoText,
            };

            addNewTask(updated);
            setInputTodoText("");
        } else {
            alert("Please add task");
        }
    };

    //Ad new todo list
    const addNewTask = (task) => {
        setTodo([...todo, task]);
    };

    //Remove todo
    const removeTodo = (id) => {
        setTodo(todo.filter((list) => list.id !== id));
    };

    return (
        <div className="First-box-component">
            <div className="Alltasks">
                <div className="All-lists">
                    <p className="List-name">All</p>

                    <ul className="Lists">
                        {todo.map((list) => (
                            <li className="List" key={list.id}>
                                <a
                                    className="List__link"
                                    href="#"
                                    onClick={() => newFunc(list)}
                                >
                                    {list.text}
                                </a>
                                <button
                                    className="btn-list"
                                    onClick={() => removeTodo(list.id)}
                                >
                                    🗑
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="Add-new-list">
                        <button
                            className="btn-newlist"
                            onClick={() => setShowTask(!showTask)}
                        >
                            <img src={crossAdd} alt="cross" />
                        </button>
                        <div className="Newlist">
                            {!showTask ? "Create New Task" : null}
                        </div>
                        {showTask && (
                            <form onSubmit={onSubmit}>
                                <div className="Edit-form__first-box">
                                    <input
                                        value={inputTodoText}
                                        onChange={(e) =>
                                            setInputTodoText(e.target.value)
                                        }
                                        type={"text"}
                                        placeholder="Type your task"
                                    />
                                    <input type="submit" value="Ok" />
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <p className="copyright">
                &#169; All Rights Reserved “The Better Task”
            </p>
        </div>
    );
}

export default TaskLists;
