import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
// import { INITIAL_USERS_LIST } from './initialUserList'; 

export function Users() {
  const [users, setuser] = useState([]);
  const [username, setusername] = useState("");
  const [userprofile, setuserfile] = useState("");

  function getUsers() {
    fetch("https://60efffc3f587af00179d3c2f.mockapi.io/users", { method: "GET" })
      .then((data) => data.json())
      .then((users) => setuser(users))
  }

  function deleteUser(id) {
    fetch(`https://60efffc3f587af00179d3c2f.mockapi.io/users/${id}`, { method: "DELETE" })
      .then((data) => data.json())
      .then(() => getUsers())
  }

  function createUser() {
    console.log("Create User");
    fetch("https://60efffc3f587af00179d3c2f.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username, profilePic: userprofile })
    })
      .then((data) => data.json())
      .then(() => getUsers())
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {/* <input value={username} type="text" onChange={(event) => setusername(event.target.value)} /> */}
      <TextField value={username} onChange={(event) => setusername(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
      <TextField value={userprofile} onChange={(event) => setuserfile(event.target.value)} id="outlined-basic" label="Image" variant="outlined" />
      {/* <button onClick={() => setuser([...users, { name: username, pic: userprofile }])}>AddUser</button> */}
      {/* <Button variant="contained" onClick={() => setuser([...users, { name: username, profilePic: userprofile }])}> Add User</Button> */}
      <Button variant="contained" onClick={() => createUser()}> Add User</Button>
      {
        users.map((user) => (
          <User name={user.name} pic={user.profilePic} id={user.id} deleteUser={deleteUser} />))
      }
    </div>

  );
}

function User({ name, pic, id, deleteUser }) {
  const navigate = useNavigate();
  return (
    <div>
      <Card className='user-card'>
        <img style={{ borderRadius: '20%', height: '75px', width: '75px', objectFit: 'cover' }} src={pic} alt='profile pic' />
        <h2>{name}</h2>
        <button onClick={() => deleteUser(id)}>Delete</button>
        <button onClick={() => navigate('/user/' + id)} >Details</button>
      </Card>
    </div>
  )

}


// function User(props){
//   return(
//     <div>
//       <Card>
//         <h2>{props.name}</h2>
//       </Card>
//     </div>
//   )

// }