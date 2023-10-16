import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useGetUserById from "../hooks/getUserById";
import { useEffect, useState } from "react";

interface TableData {
  id: number;
  name: string;
  email: string;
  phone: number;
}
const View = () => {
  let { state } = useLocation();
  const [users,loading,getUser]=useGetUserById();
  const [userData,setuserData]=useState({name:""})
 useEffect(()=>{
  if(state?._id){
    getUser({variables:{
      userId:state?._id
    }})
  }
 },[state])
 useEffect(()=>{
  console.log("users",users)
  if(users?.length){
    setuserData(users[0])
  }
 },[users])
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-4xl text-blue-500 font-bold text-center">
          User Management
        </div>
        <Link
          to="/add"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
        >
          Add
        </Link>
      </div>
      <table className="table-auto w-full mx-auto mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
          </tr>
        </thead>
        <tbody>
         {userData&&
          <tr>
            <td className="border px-4 py-2">{userData.name}</td>
            </tr>
}
        </tbody>
      </table>
    </div>
  );
};

export default View;
