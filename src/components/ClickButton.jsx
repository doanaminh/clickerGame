import User from "./User";

export default function ({ clickFunc }) {
  let balance = User.balance;

  return (
    <>
      <div id="clickButton" className="clickable" onClick={clickFunc}>
        Click to earn money
      </div>
    </>
  );
}
