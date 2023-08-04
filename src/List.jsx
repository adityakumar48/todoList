import React from "react";
import "./App.css";

const List = ({ currentElement, index, addTask, setTask, deleteNotify }) => {

  
// deleting the item from the list
function deleteList(listid, addTask, setTask, deleteNotify) {
  let filteredItem = addTask.filter((currentElement) => {
    return listid !== currentElement.id;
  });
  setTask(filteredItem);
  deleteNotify();
}


//edit functionality 

function editListItem(id) {
  
  let filteredList = addTask.filter((currEle) => {
    return id !== currEle;
  })
  console.log(filteredList.task)

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
          <button onClick={()=> editListItem(currentElement.id)} className=" btn edit-btn">
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
