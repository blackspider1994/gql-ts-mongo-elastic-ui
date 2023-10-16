import React, { useEffect, useState } from "react";
import useEditUser from "../hooks/editUser"
import { useLocation } from "react-router-dom";
interface FormData {
  name: string;
  email: string;
  phone: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
};

const Edit = () => {
  let { state } = useLocation();

  const [user,loading,editUser]=useEditUser()
  const [formData, setFormData] = useState(initialFormData);
useEffect(()=>{
  console.log("user",user);
},[user])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <div className="text-3xl text-blue-600 font-bold text-center mb-6">
          Edit Record
        </div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={()=>editUser({variables:{
            "input": {
              "name":formData.name
            },
            "updateUserId": state?._id
          }})}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-left text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>

          

          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            >
              Edit Record
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
