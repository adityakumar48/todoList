import { useState } from "react";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import List from "./List";

function App() {
  const toastOptions = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const successNotify = () => toast.success("Task added", toastOptions);
  const deleteNotify = () =>
    toast.info("Task Delete Successfully", toastOptions);
  const Failnotify = () => toast.warning("Please enter a task", toastOptions);

  const [userInput, setUserInput] = useState("");
  const [addTask, setTask] = useState([]);

  //getting the user input
  function captureInput(e) {
    setUserInput(e.target.value);
  }

  //adding task to the list
  function addTaskToList() {
    if (!userInput) {
      Failnotify();
      // alert("Please enter a task");
    } else {
      const currentDate = new Date().getTime().toString();
      const listData = {
        id: currentDate,
        task: userInput,
      };
      // console.log(listData);
      setTask([...addTask, listData]);
      setUserInput("");
      successNotify();
    }
  }

  return (
    <>
      <div className="main-container">
        <div className="heading">TODO LIST</div>
        <div className="input-box">
          {" "}
          <input
            type="text"
            placeholder="Add your tasks"
            onChange={captureInput}
            value={userInput}
          />{" "}
          <button className="addItem-btn btn" onClick={addTaskToList}>
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="lists">
          <ul>
            {addTask.map((currentElement, index) => {
              return (
                <>
                  <List
                    currentElement={currentElement}
                    index={index}
                    addTask={addTask}
                    setTask={setTask}
                    deleteNotify={deleteNotify}
                  />
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
