import { Link } from "react-router-dom";
import getUser from "../hooks/getUsers";
import useDeleteUser from "../hooks/deleteUser";
import { useEffect, useState } from "react";
interface TableData {
  _id: string;
  name: string;
  email: string;
  phone: number;
}
const Home = () => {
  const [users,loading,refetch]=getUser();
  const [deletedUser,deleteLoading,deleteUser]=useDeleteUser();
  

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
            <th className="px-4 py-2">Edit</th>
            <th className="px-4 py-2">View</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users&&users.length>0&&users?.map((item: TableData) => (
            <tr key={item?._id}>
              <td className="border px-4 py-2">{item?.name}</td>
              <td className="border px-4 py-2">
                <Link
                  to="/edit"
                  state={{_id:item?._id}}
                  
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </Link>
              </td>
              <td className="border px-4 py-2">
                <Link
                  to="/view"
                  state={{_id:item?._id}}

                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  View
                </Link>
              </td>
              <td className="border px-4 py-2">
                <div
                  onClick={()=>deleteUser({variables:{deleteUserId:item._id}})}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
