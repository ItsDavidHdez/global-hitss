import React from "react";
import Header from "./Header";

function RegisterList() {
  const register = JSON.parse(localStorage.getItem("register"));
  return (
    <div className="w-4/6">
      <Header />
      <div className="grid grid-cols-3 gap-4">
        {register?.length === 0 ? (
          <h1 className=" text-white">No register yet</h1>
        ) : (
          <>
            {register?.map((person) => (
              <div key={person.id} className="bg-neutral-800 p-4 rounded-md">
                <h3>{person.name}</h3>
                <h4>{person.email}</h4>
                <h5>{person.gender}</h5>
                <h6>{person.hobbies}</h6>
                <h6>{person.date}</h6>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default RegisterList;
