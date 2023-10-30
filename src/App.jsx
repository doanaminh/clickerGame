// React Components
import { useState, useEffect } from "react";
import "./App.css";

// Custom Components
import ClickButton from "./components/ClickButton";
import BalanceDisplay from "./components/BalanceDisplay";
import User from "./components/User";

function App() {
  let userData =
    localStorage.getItem("userData") == null
      ? User
      : JSON.parse(localStorage.getItem("userData"));

  const [user, setUser] = useState(userData);

  const handleChange = () => {
    user.balance++;
    setUser({
      ...user,
    });
  };

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user));
  }, [user]);

  // let dollars = user.balance,
  //   factoryIncomeInterval;

  // const clickButton = document.getElementById("clickButton");
  // const moneyDisplay = document.getElementById("dollars");
  // const passiveIncomeDisplay = document.getElementById("passiveIncome");
  // const factoryContainer = document.getElementById("factoryContainer");
  // const factoryButton = document.getElementById("buyFactoryButton");
  // const businessTab = document.getElementsByClassName("businessButton");
  // const businessOptions = document.getElementById("businessOptions");

  // clickButton.addEventListener("click", () => {
  //   dollars++;
  //   moneyDisplay.innerText = dollars;
  // });

  // function toggleBusinesses() {
  //   if (businessOptions.classList.contains("toggled")) {
  //     businessOptions.classList.remove("toggled");
  //   } else {
  //     businessOptions.classList.add("toggled");
  //   }
  // }

  // function buyFactory() {
  //   if (user.businesses.factory) {
  //     user.businesses.factory++;
  //   } else {
  //     user.businesses["factory"] = {
  //       amount: 1,
  //       passiveIncome() {
  //         setInterval(() => {
  //           balance += this.amount;
  //         }, 5000);
  //       },
  //     };
  //   }
  //   if (balance >= 20) {
  //     balance -= 20;
  //     // factoryOwned = true;
  //     // clickButton.disabled = true;
  //     // clickButton.innerText = 'Factory Purchased!';
  //     // factoryIncomeInterval = setInterval(() => {
  //     //   dollars++;
  //     //   moneyDisplay.innerText = dollars;
  //     // }, 5000);
  //     // passiveIncomeDisplay.innerText = "Passive Income: $1 every 5 seconds";
  //   }

  //   // factoryIncomeInterval = setInterval(() => {
  //   //   moneyDisplay.innerText = dollars;
  //   // }, 1000);
  // }

  return (
    <>
      {/* <header id="businessOptions">
        <div id="factoryContainer">
          <div id="factoryImageContainer">
            <img id="factoryImage" src="" alt="Factory Image" />
          </div>
          <div id="factoryPrice">$100</div>
          <button
            id="buyFactoryButton"
            className="clickable"
            onClick={buyFactory()}
          >
            Buy Lemonade Stand
          </button>
        </div>
        <div id="factoryContainer">
          <div id="factoryImageContainer">
            <img id="factoryImage" src="" alt="Factory Image" />
          </div>
          <div id="factoryPrice">$1,000</div>
          <button
            id="buyFactoryButton"
            className="clickable"
            onClick={buyFactory()}
          >
            Buy Cookie Store
          </button>
        </div>
        <div id="factoryContainer">
          <div id="factoryImageContainer">
            <img id="factoryImage" src="" alt="Factory Image" />
          </div>
          <div id="factoryPrice">$10,000</div>
          <button
            id="buyFactoryButton"
            className="clickable"
            onClick={buyFactory()}
          >
            Buy Toy Factory
          </button>
        </div>
      </header> */}

      <BalanceDisplay balance={user.balance} />

      <ClickButton clickFunc={handleChange} />

      {/* <div id="businessesBar">
        <button className="businessButton" onClick={toggleBusinesses()}>
          Businesses
        </button>
        <div id="passiveIncome"></div>
      </div> */}
    </>
  );
}

export default App;
