import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { INITIAL_USERS_LIST } from './initialUserList'; 

export function Users() {
  const [users, setuser] = useState(INITIAL_USERS_LIST);
  const [username, setusername] = useState("");
  const [userprofile, setuserfile] = useState("");
  return (
    <div>
      {/* <input value={username} type="text" onChange={(event) => setusername(event.target.value)} /> */}
      <TextField value={username} onChange={(event) => setusername(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
      <TextField value={userprofile} onChange={(event) => setuserfile(event.target.value)} id="outlined-basic" label="Image" variant="outlined" />
      {/* <button onClick={() => setuser([...users, { name: username, pic: userprofile }])}>AddUser</button> */}
      <Button variant="contained" onClick={() => setuser([...users, { name: username, pic: userprofile }])}> Add User</Button>
    
      {
        users.map((user) => (
          <User name={user.name} pic={user.pic} id = {user.id} />))
      }
    </div>

  );
}

function User({ name, pic, id }) {
  const navigate = useNavigate();
  return (
    <div>
      <Card onClick={() => navigate('/user/' + id)} className='user-card'>
        <img style={{ borderRadius: '20%', height: '75px', width: '75px' , objectFit:'cover' }} src={pic} alt='profile pic' />
        <h2>{name}</h2>
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