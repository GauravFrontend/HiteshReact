import React, { useEffect, useState } from "react";
import useUser from "../context/UserContext";

const Profile = () => {
  const { user } = useUser();
  const [login, setLogin] = useState(null);
  console.log();
  useEffect(() => {
    if (user.username) {
      setLogin(<div>Welcome : {user.username}</div>);
    }
    if (!user.username) {
      setLogin(<div>Please Login</div>);
    }
  }, [user]);
  return <>{login}</>;
};

export default Profile;
