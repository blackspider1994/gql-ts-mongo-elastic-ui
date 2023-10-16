import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import userQuery from "./userQuery";

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useViewer(): Array<any> {

    const [users,setUsers]=useState(null)
  const { loading, data, refetch } = useQuery(userQuery);



  useEffect(() => {
    if (loading) {
      return;
    }
    setUsers(data?.users?.users);
  }, [data]);

  return [users, loading, refetch];
}
