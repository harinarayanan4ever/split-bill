import { Link } from "react-router-dom";

export default function Groups({ groups }) {
  console.log(groups);
  return (
    <div className="groups">
      {groups.map((group) => (
        <Link key={group.id} to={`${group.id}`}>
          {group.name}
        </Link>
      ))}
    </div>
  );
}
