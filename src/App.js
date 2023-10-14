import React, { useEffect, useState } from "react";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>IP</th>
          <th>Gmail Domain</th>
          <th>University</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td><img src={user.image} alt="Profile Pic" /></td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td>{user.ip}</td>
            <td>{user.email.split("@")[1]}</td>
            <td>{user.university}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;