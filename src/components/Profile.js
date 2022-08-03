import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Redirect to="/login" />;
  } else {
    console.log(currentUser.data.api_employee);
  }
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.data.api_employee.ProfileID}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.data.api_employee.EmailID.substring(0, 20)} ...{" "}
        {currentUser.data.api_employee.EmailID.substr(currentUser.data.api_employee.EmailID.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.data.api_employee.ProfileID}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.data.api_employee.EmailID}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};
export default Profile;