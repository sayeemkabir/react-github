import React, { Fragment } from "react";
import App from "../App";
import Useritems from "./Useritems";
import Spinner from "./spinner";

const Users = ({ users, loading }) => {
  if (loading) {
    return (
      <Fragment>
        <div className="text-center m-auto flex justify-center align-middle mt-4 rounded-3xl">
          <Spinner className="m-auto rounded-3xl" />;
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="flex flex-wrap justify-center gap-5">
          <Useritems users={users} />
        </div>
      </Fragment>
    );
  }
};

export default Users;
