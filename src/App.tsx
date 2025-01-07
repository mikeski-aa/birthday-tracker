import { SyntheticEvent, useState } from "react";
import "./App.css";

export interface iBday {
  name: string;
  birthday: string;
}

function calculateDays(input: string) {
  const currentDate = new Date();
  const convertedInput = new Date(input);

  let result =
    (convertedInput.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  if (result < 0) {
    result = 365 + result;
  }

  console.log(result);
  return Math.ceil(result);
}

function App() {
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [birthdays, setBirthdays] = useState<iBday[]>([]);
  const [name, setName] = useState<string>("");
  const [bday, setBday] = useState<string>("");

  const handleAddClick = () => {
    setShowAdd(!showAdd);
  };

  const handleAddBday = (e: SyntheticEvent) => {
    const target = e.target as HTMLDataElement;

    setBday(target.value);
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
      setBday("");
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
        <div className="birthdayHolder">
          {birthdays.map((item, index) => (
            <div className="birthdayItem" key={index}>
              <div className="personName">{item.name}</div>
              <div className="personBday">{item.birthday}</div>
              <div className="personBday">{calculateDays(item.birthday)}</div>
            </div>
          ))}
        </div>
        <div className="addNewBday">
          {showAdd ? (
            <div className="newBdayForm">
              <div className="nameInputHolder">
                <label htmlFor="nameInput">Name</label>
                <input
                  type="text"
                  id="nameInput"
                  onChange={(e) => handleNameInput(e)}
                  value={name}
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
