import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import editMutation from "./deleteQuery";
import getUsersQuery from "../getUsers/userQuery";

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useViewer(): Array<any> {

    const [users,setUsers]=useState(null)
  const [deleteUser,{ loading, data }] = useMutation(editMutation,{
    refetchQueries: [
      { query: getUsersQuery }
    ]
  });



  useEffect(() => {
    if (loading) {
      return;
    }
    setUsers(data?.users?.users);
  }, [data]);

  return [users, loading,deleteUser];
}
