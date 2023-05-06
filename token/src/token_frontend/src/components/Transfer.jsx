import React, { useState } from "react";
import { canisterId, createActor } from "../../../declarations/token_backend/index";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client";

function Transfer() {
  const [recipientId, setReId] = useState("");
  const [amount, setAmount] = useState("");

  async function handleClick() {
    const recipient = Principal.fromText(recipientId);
    const amountToTransfer = Number(amount);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity()

    console.log(identity)

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      }
    }) 
    await authenticatedCanister.transfer(recipient, amountToTransfer);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) => setReId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick}>
            Transfer
          </button>
        </p>
      </div>
    </div>
  );
}

export default Transfer;
