import { useState } from "react";
import "./Users.css";
import { usersdata } from "./Users";
function Users() {
  const [users, setUsers] = useState(usersdata);
  return (
    <div className="users-container">
      <h1>Users Information</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Eaque quasi illum dolorum. Voluptatem ullam iure inventore doloribus maiores, 
        debitis quos? Dolor reprehenderit sequi fuga saepe velit et est ipsa corrupti?</p>
    

      <div className="user-cards">
        {users.map(function (user, index) {
          return (
            <div className="card">
              <img src={user.image} alt="" width="100%" height="230" />
              <h3>{user.name}</h3>
              <p>{user.gender}</p>
              <p>{user.description}</p>
              <button>Profile Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;