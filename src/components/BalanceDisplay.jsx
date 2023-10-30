const BalanceDisplay = ({ balance }) => {
  return (
    <>
      <div id="moneyContainer">
        <div id="moneyDisplay">
          <span id="moneySymbol">$</span>
          <span id="dollars">{balance}</span>
        </div>
      </div>
    </>
  );
};
export default BalanceDisplay;
