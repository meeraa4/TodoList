import React from "react";
import "./TodoItem.css";
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md"

const TodoItem = ({todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoItem">
            <div className= {`content ${checked ? "checked" : ""}`}>
                {checked ? (
                    <MdCheckBox
                        onClick={() => {
                            onCheckToggle(id);
                        }}/>
                ) : (
                    <MdCheckBoxOutlineBlank
                        onClick={() => {
                            onInsertToggle(id);
                        }}
                    />
                )}
                <div className="work" onClick={() => {
                    onChangeSelectedTodo(todo);
                    onInsertToggle();
                }}>{text}</div>
            </div>
        </div>
    );
}

export default TodoItem;