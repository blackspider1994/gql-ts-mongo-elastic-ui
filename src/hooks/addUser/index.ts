import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import addMutation from "./Query";
import getUsersQuery from "../getUsers/userQuery";

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useViewer(): Array<any> {

    const [users,setUsers]=useState(null)
  const [addUser,{ loading, data }] = useMutation(addMutation);



  useEffect(() => {
    if (loading) {
      return;
    }
    setUsers(data?.createUser);
  }, [data]);

  return [users, loading,addUser];
}
