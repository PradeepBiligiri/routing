import { useLocation, useParams } from "react-router-dom";

export function EmployeeDetails() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.state.data);
  console.log(id);
  return (
    <div className="employee-details">
      <h1>Employee Details</h1>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <td>
                <h1>Name</h1>
              </td>
              <td>
                <h1>Email</h1>
              </td>
              <td>
                <h1>UserName</h1>
              </td>
              <td>
                <h1>Address</h1>
              </td>
              <td>
                <h1>Action</h1>
              </td>
            </tr>
          </thead>
          <tbody>
            {location.state.data
              .filter((value) => value.id === id)
              .map((data) => {
                return (
                  <tr>
                    <td>
                      <h3>{data.name}</h3>
                    </td>
                    <td>
                      <h3>{data.email}</h3>
                    </td>
                    <td>
                      <h3>{data.username}</h3>
                    </td>
                    <td>
                      <h3>{data.address}</h3>
                    </td>
                    <td>
                      <button>
                        <h3>Edit</h3>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
