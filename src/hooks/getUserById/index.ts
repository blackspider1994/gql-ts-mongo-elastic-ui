import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import userQuery from "./userQuery";

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useViewer(): Array<any> {

    const [users,setUsers]=useState(null)
  const [getUser,{ loading, data, refetch }] = useLazyQuery(userQuery);



  useEffect(() => {
    if (loading) {
      return;
    }
    setUsers(data?.user);
  }, [data]);

  return [users, loading, getUser];
}
