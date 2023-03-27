import React, { Component } from "react";

const Useritems = ({ users }) => {
  return users.map((user) => (
    <div key={user.id} className="shadow-md rounded-md p-4 text-center w-[30%]">
      <img
        className="rounded-full w-32 text-center mb-2 mx-auto ring-offset-2 ring-4"
        src={user.avatar_url}
        alt={user.login}
      />
      <h3 className="mb-2">{user.login}</h3>

      <a
        className="bg-blue-900 text-white px-3 py-2 rounded-sm"
        href={user.html_url}
      >
        Learn More about {user.login}
      </a>
    </div>
  ));
};

export default Useritems;
