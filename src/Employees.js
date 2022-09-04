import { useNavigate } from "react-router-dom";

export function Employees() {
  const EmployeeList = [
    {
      name: "Rudolph McCullough",
      email: "Angus.Collins53@yahoo.com",
      username: "Brain.Rice",
      address: "89578-5670",
      id: "1",
    },
    {
      name: "Tom Gutkowski Sr.",
      email: "Jennifer81@yahoo.com",
      username: "Allan.Franey67",
      address: "11251-9078",
      id: "2",
    },
    {
      name: "Francis Rutherford",
      email: "Quentin1@hotmail.com",
      username: "Ida.Rolfson77",
      address: "98181-8336",
      id: "3",
    },
    {
      name: "Sadie Kiehn",
      email: "Raleigh.Bernier@hotmail.com",
      username: "Fredy19",
      address: "15024-4397",
      id: "4",
    },
    {
      name: "Marcia Renner",
      email: "Mable.Tromp42@yahoo.com",
      username: "Chadd_OReilly58",
      address: "50247",
      id: "5",
    },
    {
      name: "Lester Bednar",
      email: "Zackery79@gmail.com",
      username: "Thelma21",
      address: "05784-9898",
      id: "6",
    },
    {
      name: "Chester Denesik Sr.",
      email: "Gina92@yahoo.com",
      username: "Lazaro57",
      address: "76333",
      id: "7",
    },
    {
      name: "Dexter Lockman",
      email: "Torrey69@hotmail.com",
      username: "Orlo_Brekke92",
      address: "17167-3044",
      id: "8",
    },
    {
      name: "Mrs. Donnie Bailey",
      email: "Niko_Johns11@yahoo.com",
      username: "Joanie_Gislason10",
      address: "03652",
      id: "9",
    },
    {
      name: "Marilyn Abshire",
      email: "Humberto.Hackett@hotmail.com",
      username: "Charlotte.Wolff62",
      address: "46778-8312",
      id: "10",
    },
  ];
  const navigation = useNavigate();
  return (
    <div className="employees">
      <h1>Employee details</h1>
      <button onClick={() => navigation("/employees/create")}>Create</button>
      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>UserName</td>
            <td>Email</td>
            <td>Address</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {EmployeeList.map((value) => {
            return (
              <tr>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>{value.address}</td>
                <td>
                  <button
                    onClick={() =>
                      navigation(`/employees/view/${value.id}`, {
                        state: { data: EmployeeList },
                      })
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
