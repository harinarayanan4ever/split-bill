import { useState } from "react";

export default function AddBill({ groupId, splitBill }) {
  const [amount, setAmount] = useState(0);
  function add() {
    splitBill(amount, 0);
  }
  return (
    <div className="group-form">
      <div className="form-control">
        <label>Amount</label>
        <input
          id="amount"
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
      </div>
      <div className="form-control">
        <button onClick={() => add()}>Save</button>
      </div>
    </div>
  );
}
