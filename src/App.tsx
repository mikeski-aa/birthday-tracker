import { SyntheticEvent, useState } from "react";
import "./App.css";

export interface iBday {
  name: string;
  birthday: Date;
}

function App() {
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [birthdays, setBirthdays] = useState<iBday[]>([]);
  const [name, setName] = useState<string>("");
  const [bday, setBday] = useState<Date>(new Date());

  const handleAddClick = () => {
    setShowAdd(!showAdd);
  };

  const handleAddBday = (e: SyntheticEvent) => {
    const target = e.target as HTMLDataElement;

    const newDate = new Date(target.value);
    console.log(newDate);
    setBday(newDate);
  };

  const handleNameInput = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;

    setName(target.value);
  };

  const handleSave = () => {
    if (bday && name) {
      const newPerson: iBday = {
        name: name,
        birthday: bday,
      };

      const bdayCopy: iBday[] = [...birthdays];
      bdayCopy.push(newPerson);

      setBirthdays(bdayCopy);

      setName("");
      setBday(new Date());
    }
  };

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
                <input
                  type="text"
                  id="nameInput"
                  onChange={(e) => handleNameInput(e)}
                />
              </div>
              <div className="dateInputHolder">
                <label htmlFor="dateInput">Date</label>
                <input
                  type="date"
                  id="dateInput"
                  onChange={(e) => handleAddBday(e)}
                  value={bday}
                />
              </div>
              <button onClick={handleSave}>Save</button>
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
