
import { useState } from 'react';
import './App.css'

function App() {

  const [userInput, setUserInput] = useState('');
  const [addTask, setTask] = useState([]);
  
  //getting the user input 
  function captureInput(e) {
    setUserInput(e.target.value)
  }


  //adding task to the list 
  function addTaskToList() {
    if (!userInput) {
      return alert("Please Enter Something")
    } else {
      const currentDate = new Date().getTime().toString();
      const listData = {
        id: currentDate,
        task:userInput
      }
      setTask([...addTask, listData]);
      setUserInput("");
    }

  }

  // deleting the item form the list 
  function deleteList(itemID) {
    let filteredItem = addTask.filter((currentElement) => {
      return itemID !== currentElement.id
    })
    setTask(filteredItem)
  }


  //updating the item in the list 

  function updateList(itemID, task) {
    setUserInput(task)
   

  }

  return (
    <>
      <div className="main-container">
        <div className="heading">Your Todo's</div>
        <div className="input-box"> <input type="text" value={userInput} placeholder='Add your tasks' onChange={captureInput} /> <button className='addItem-btn btn' onClick={addTaskToList} ><i class="fa-solid fa-plus"></i></button></div>
        <div className="lists">
          <ul>
            {addTask.map((currentElement,index) => {
            return <>
              <li key={index}><div className='user-task'> <span className='serial-num'>{index +1 }</span>{currentElement.task}</div>
                <span>
                  <button onClick={()=> updateList(currentElement.id , currentElement.task)} className=' btn edit-btn' >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button onClick={() => { deleteList(currentElement.id) }} className=" btn delete-btn">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </span>
              </li>
            </>
             
           })}
            

          </ul>
        </div>

      </div>



    </>
  );
}

export default App;
