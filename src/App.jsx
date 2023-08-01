
import './App.css';

function App() {
  return (
    <>
      <div className="main-container">
        

        <div className="heading"><p>Add Your Tasks</p></div>
        <div className="input-box"> <input type="text" /> <button className='addItem-btn btn'><i class="fa-solid fa-plus"></i></button></div>
        <div className="lists">
          <ul>
            <li><div className='user-task'>Task</div> <span> <button className=' btn edit-btn' ><i class="fa-solid fa-pen-to-square"></i></button> <button className=" btn delete-btn"><i class="fa-solid fa-trash"></i></button></span></li>
          </ul>
        </div>
       
        



            



      </div>
      


    </>
  );
}

export default App;
