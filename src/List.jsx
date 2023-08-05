import React, { useState } from "react";
import "./App.css";

const List = ({ currentElement, index, addTask, setTask, deleteNotify, setUserInput, editTask, setEditTask, setActiveEditBtn, activeEditBtn }) => {




  // deleting the item from the list
  function deleteList(listid, addTask, setTask, deleteNotify) {
    let filteredItem = addTask.filter((currentElement) => {
      return listid !== currentElement.id;
    });
    setTask(filteredItem);
    deleteNotify();
  }


  //edit functionality 

  function editListItem(currentElement) {
    setActiveEditBtn(true)
    setUserInput(currentElement.task)
    const editedItem = addTask.find((curEle) => {
      return curEle.id === currentElement.id
    })
    setEditTask(editedItem.id)
  }

  return (
    <>
      <li key={index}>
        <div className="user-task">
          {" "}
          <span className="serial-num">{`${index + 1}. `}</span>
          {currentElement.task}
        </div>
        <span>
          <button onClick={() => editListItem(currentElement)} className=" btn edit-btn">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              deleteList(currentElement.id, addTask, setTask, deleteNotify);
            }}
            className=" btn delete-btn"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </span>
      </li>
    </>
  );
};

export default List;
