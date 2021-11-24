import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Home from "./components/home";
import AddGroup from "./components/add-group";
import Groups from "./components/groups";
import { useState } from "react";
import Group from "./components/group";
import AddBill from "./components/add-bill";

export default function App() {
  let navigate = useNavigate();

  const currentUser = {
    id: 1,
    name: "John doe",
    email: "johndoe@zeta.com",
    groups: [],
    friends: [2, 3, 4, 5]
  };
  const friends = [
    {
      name: "One",
      id: 1
    },
    {
      name: "Two",
      id: 2
    },
    {
      name: "Three",
      id: 3
    },
    {
      name: "Four",
      id: 4
    },
    {
      name: "Five",
      id: 5
    }
  ];

  const [groups, setGroup] = useState([]);

  function createGroup(group) {
    group.id = groups.length;
    group.summary = group.members.reduce((prev, current) => {
      prev[current] = {
        amount: 0
      };
      return prev;
    }, {});
    groups.push(group);
    setGroup(groups);
    navigate("/groups");
  }

  function splitBill(amount, groupId) {
    const { summary, members } = groups[groupId];
    const split = amount / members.length;
    const paidPerson = currentUser.id;
    for (const personId in summary) {
      if (personId == paidPerson) {
        summary[personId].amount += amount - split;
      } else {
        summary[personId].amount -= split;
      }
    }
    navigate(`/groups/${groupId}`);
  }

  return (
    <div className="App">
      <header>
        <button className="add-group">
          <Link to="/add-group">Add Group</Link>
        </button>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route
            path="/add-group"
            element={
              <AddGroup
                currentUser={currentUser}
                friends={friends}
                createGroup={createGroup}
              />
            }
          />
          <Route
            path="/groups/:id/add-bill"
            element={<AddBill group={0} splitBill={splitBill} />}
          />
          <Route path="/groups/:id" element={<Group group={groups[0]} />} />
          <Route path="/groups" element={<Groups groups={groups} />} />
        </Routes>
      </main>
    </div>
  );
}
