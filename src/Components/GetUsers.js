import React from "react";
import { LOAD_USERS } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";

function GetUsers() {
  const { data, loading } = useQuery(LOAD_USERS);
  const allUsers = data?.getAllUsers || [];

  return (
    <div style={{ textAlign: "center" }}>
      {loading && <h1>Loading</h1>}
      {allUsers.length > 0 &&
        Array(...allUsers)
          .reverse()
          .map((val, id) => {
            return <div key={id}> {val.firstName}</div>;
          })}
    </div>
  );
}

export default GetUsers;
