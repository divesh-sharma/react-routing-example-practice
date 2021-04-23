import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = ({ match }) => {
  const { name, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  // return <h1>Hello , I am a user, name - {match.params.name}</h1>;
  return (
    <div>
      <h1>
        Hello , I am a user, name - {name} {lname}
      </h1>
      <p>My current path is -{location.pathname}</p>
      {location.pathname === `/user/divesh/sharma` ? (
        <button onClick={() => history.goBack()}>Click Me</button>
      ) : null}
    </div>
  );
};

export default User;
