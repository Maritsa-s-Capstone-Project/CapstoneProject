import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllUsers } from "../API/users";

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      try {
        const results = await getAllUsers();
        setUsers(results);
        return results;
      } catch (err) {
        console.log(err);
      }
    }
    loadUser();
  }, []);
}
