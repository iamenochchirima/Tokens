import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token_backend } from "../../../declarations/token_backend/index";

function Balance() {
  const [inputValue, setInputValue] = useState("");
  const [balanceResult, setBalance] = useState("");
  const [currency, setCurrency] = useState("")
  const [isHidden, setIsHidden] = useState(true)

  async function handleClick() {
    const principal = Principal.fromText(inputValue);
    const balance = await token_backend.balanceOf(principal);
    const symbol = await token_backend.getSymbol();
    setCurrency(symbol)
    setBalance(balance.toLocaleString());
    setIsHidden(false)
  }

  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button id="btn-request-balance" onClick={handleClick}>
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {`${balanceResult} ${currency}`}.</p>
    </div>
  );
}

export default Balance;
