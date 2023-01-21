import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({});
  const url = "https://jsonplaceholder.typicode.com/users/1";

  //Other option
  /*   const getUserData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  }; */

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error));
  }, []);

  // No need to touch code below
  return (
    <div className="App">
      <h2>User Data</h2>
      <p data-testid='name-id'>
        <strong>Name: </strong>{" "}
        {userData.name || "(Need to populate name here)"}
      </p>
      <p data-testid='website-id'>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p data-testid='email-id'>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p data-testid='phone-id'>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
    </div>
  );
}

export default App;
