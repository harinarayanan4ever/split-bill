import { Link } from "react-router-dom";

export default function Group({ group }) {
  const summary = group.summary;
  const personIds = Object.keys(summary);
  return (
    <div>
      <h1>{`Welcome to ${group.name}`}</h1>
      <h2>Here's the Summary</h2>
      {personIds.map((personId) =>
        summary[personId].amount >= 0 ? (
          <div
            key={personId}
          >{`Person ${personId} gets ${summary[personId].amount}`}</div>
        ) : (
          <div key={personId}>{`Person ${personId} owes ${
            summary[personId].amount * -1
          }`}</div>
        )
      )}
      <Link to="add-bill">Add Bill</Link>
    </div>
  );
}
