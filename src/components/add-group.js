export default function AddGroup({ friends, createGroup }) {
  function create() {
    createGroup({
      name: "test",
      members: [1, 2, 3]
    });
  }
  return (
    <div className="group-form">
      <div className="form-control">
        <label>Group Name</label>
        <input id="group-name" />
      </div>
      <div className="form-control">
        <label>Select members</label>
        <select name="cars" id="cars" multiple>
          {friends.map((friend) => (
            <option key={friend.id} value={friend.id}>
              {friend.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <button onClick={() => create()}>Save</button>
      </div>
    </div>
  );
}
