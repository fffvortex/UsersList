import React, { useEffect, useState } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

const usersPath = "https://reqres.in/api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(usersPath)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
        console.log(users);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении пользоваетелей");
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id != id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () =>{
    setSuccess(true)
  }

  return (
    <div className="App">
      {success ? (
        <Success allInvites={users.length} count={invites.length}/>
      ) : (
        <Users
          onClickInvite={onClickInvite}
          invites={invites}
          items={users}
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          isLoading={isLoading}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}

export default App;
