import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRegister } from "../features/register/registerSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function RegisterForm() {
  const [data, setData] = useState({
    name: "",
    date: "",
    email: "",
    gender: "",
    hobbies: [],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const registerData = useSelector((state) => state.register);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addRegister({
        ...data,
        id: uuid(),
      })
    );

    navigate("/");
  };

  useEffect(() => {
    setData(registerData.find((register) => register.id === params.id));
  }, [params, registerData]);

  return (
    <form onSubmit={handleSubmit} className=" bg-zinc-800 max-w-sm p-4">
      <label htmlFor="name" className="block text-sm font-bold mb-2">
        Name
      </label>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={handleChange}
        className=" w-full p-2 rounded-md bg-zinc-600 mb-2"
        required
      />
      <label htmlFor="date" className="block text-sm font-bold mb-2">
        Fecha Nacimiento
      </label>
      <input
        name="date"
        type="date"
        onChange={handleChange}
        className=" w-full p-2 rounded-md bg-zinc-600 mb-2"
        required
      />
      <label htmlFor="email" className="block text-sm font-bold mb-2">
        Email
      </label>
      <input
        name="email"
        type="text"
        placeholder="email"
        onChange={handleChange}
        className=" w-full p-2 rounded-md bg-zinc-600 mb-2"
        required
      />
      <label htmlFor="gender" className="block text-sm font-bold mb-2">
        Gender
      </label>
      {/* <input
        name="gender"
        type="text"
        placeholder="gender"
        onChange={handleChange}
      /> */}
      <select
        name="gender"
        onChange={handleChange}
        defaultValue="Hombre"
        className=" w-full p-2 rounded-md bg-zinc-600 mb-2"
        required
      >
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option>
      </select>
      <label htmlFor="hobbies" className="block text-sm font-bold mb-2">
        Hobbies
      </label>
      <input
        name="hobbies"
        type="text"
        placeholder="hobbies"
        onChange={handleChange}
        className=" w-full p-2 rounded-md bg-zinc-600 mb-2"
      />

      <button className=" bg-indigo-600 px-2 py-1" type="submit">
        Save
      </button>
    </form>
  );
}

export default RegisterForm;
