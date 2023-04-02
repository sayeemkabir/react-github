import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const { login } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fecthAPI() {
      const request = await fetch(
        `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}`
      );

      const reqJson = await request.json();

      setUser(reqJson);

      console.log(login);
    }

    fecthAPI();
  }, []);

  const { name, avatar_url, blog, location, followers, following, created_at } =
    user;

  return (
    <div className="m-auto flex flex-col p-3 h-32 w-96 shadow-xl ring-1">
      <div className="image m-auto text-center items-center">
        <img src={avatar_url} alt={name} />
      </div>
      <div className="mt-3">
        <p className="gap-2">
          Name: {name}
          Website: {blog}
          Location: {location}
          Followers: {followers}
          Following: {following}
          Member since: {created_at}
        </p>
      </div>
    </div>
  );
};

export default SingleUser;
