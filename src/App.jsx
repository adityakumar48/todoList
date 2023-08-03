
import { useEffect, useState } from 'react';
import './App.css'


function App() {


  const [userInput, setUserInput] = useState('');
  const [addTask, setTask] = useState([]);
  
  function captureInput(e) {
    setUserInput(e.target.value)
  }
  function addTaskToList() {
    if (!userInput) {
      return 
    } else {
      setTask([...addTask, userInput]);
      setUserInput('');
    }

  }


  return (

    <>
     
      <div className="main-container">
        <div className="heading">Your Todo's</div>
        <div className="input-box"> <input type="text" placeholder='Add your tasks' onChange={captureInput} /> <button className='addItem-btn btn' onClick={addTaskToList} ><i class="fa-solid fa-plus"></i></button></div>
        <div className="lists">
          <ul>
            {addTask.map((currentElement,index) => {
            return <>

              <li><div className='user-task'> <span className='serial-num'>{index +1 }</span>{currentElement}</div>
                <span>
                  <button className=' btn edit-btn' >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className=" btn delete-btn">
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
