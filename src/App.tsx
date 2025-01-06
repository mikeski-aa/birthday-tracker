import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showAdd, setShowAdd] = useState<boolean>(false);

  const handleAddClick = () => {
    setShowAdd(!showAdd);
  };

  const handleAddBday = () => {};

  return (
    <>
      <div className="mainContainer">
        <div className="headerContainer">
          <div className="leftHeader">
            <h3>Birthday Tracker</h3>
          </div>
          <div className="rightHeader">Something</div>
        </div>
        <div className="birthdayHolder">map birthdays here</div>
        <div className="addNewBday">
          {showAdd ? (
            <div className="newBdayForm">
              <div className="nameInputHolder">
                <label htmlFor="nameInput">Name</label>
                <input type="text" id="nameInput" />
              </div>
              <div className="dateInputHolder">
                <label htmlFor="dateInput">Date</label>
                <input type="date" id="dateInput" />
              </div>
              <button onClick={handleAddBday}>Save</button>
              <button onClick={handleAddClick}>Cancel</button>
            </div>
          ) : (
            <button onClick={handleAddClick}>Add birthday</button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
