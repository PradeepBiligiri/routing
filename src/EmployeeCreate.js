export function EmployeeCreate() {
  return (
    <div className="employee-create">
      <h1>Employee Create</h1>
      <div className="employee-input">
        <input type="text" name="id" id="id" placeholder="enter id" />
        <input type="text" name="name" id="name" placeholder="enter Name" />
        <input type="text" name="email" id="email" placeholder="enter Email" />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter username"
        />
        <input
          type="text"
          name="address"
          id="address "
          placeholder="enter address"
        />

        <button>submit</button>
      </div>
    </div>
  );
}
