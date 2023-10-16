import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import editMutation from "./Query";
import getUsersQuery from "../getUsers/userQuery";

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useViewer(): Array<any> {

    const [users,setUsers]=useState(null)
  const [editUser,{ loading, data }] = useMutation(editMutation,{
    refetchQueries: [
      { query: getUsersQuery }
    ]
  });



  useEffect(() => {
    if (loading) {
      return;
    }
    setUsers(data);
  }, [data]);

  return [users, loading,editUser];
}
