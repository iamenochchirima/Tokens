import React, { useState } from "react";
import { token_backend } from "../../../declarations/token_backend/index";


function Faucet(props) {
  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisable(true);
    const result = await token_backend.payOut();
    console.log("payout: " + result);
    setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>
        Get your free DAngela tokens here! Claim 10,000 DANG tokens to 2vxsx-fae
      </label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;

// import React, {useState} from "react";
// import {canisterId, createActor } from "../../../declarations/token_backend/index";
// import { AuthClient } from "@dfinity/auth-client";

// function Faucet({userPrincipal}) {
//   const [isDisabled, setDisabled] = useState(false)
//   const [buttonText, setText] = useState("Gimme gimme")

//   async function handleClick(event) {
//     setDisabled(true)

//     const authClient = await AuthClient.create()
//     const identity = await authClient.getIdentity()

//     const authenticatedCanister = createActor(canisterId, {
//       agentOptions: {
//         identity,
//       },

//     })

//     const result = await authenticatedCanister.payOut()
//     setText(result)
//     setDisabled(false)
//   }

//   return (
//     <div className="blue window">
//       <h2>
//         <span role="img" aria-label="tap emoji">
//           🚰
//         </span>
//         Faucet
//       </h2>
//       <label>Get your free DAngela tokens here! Claim 10,000 DANG coins to {userPrincipal}.</label>
//       <p className="trade-buttons">
//         <button disabled={isDisabled} id="btn-payout" onClick={handleClick}>
//           {buttonText}
//         </button>
//       </p>
//     </div>
//   );
// }

// export default Faucet;
