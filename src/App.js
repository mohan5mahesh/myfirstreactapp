import "./App.css";
import { Brands } from "./Brands";
import {Routes, Route, Link, useParams } from "react-router-dom"
import { Users } from "./Users";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";
import { INITIAL_USERS_LIST } from "./initialUserList";
import { Tictactoe } from "./Tictactoe";

function App(){
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        style = {{backgroundColor : 'crimson' }}
      >
        <Link to="/"><Tab value="one" label="HOME" /></Link>
        <Link to="/brands"><Tab value="two" label="Brands" /></Link>
        <Link to="/user"><Tab value="three" label="Users" /></Link>
        <Link to="/tictactoe"><Tab value="four" label="TicTacToe" /></Link>
      </Tabs>
    </Box>
 <Routes>
      <Route path="/user/:userid" element={<UserDetails />} />
      <Route path="/user" element={<Users />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/vote" element={<Brands />} />
      <Route path="/tictactoe" element={<Tictactoe />} />
      <Route exact path="/" element={<Home />} />    
      {/* default case for routing */}
      <Route  path="*" element={<NotFound />} />  
    </Routes>
    </>
  )
}

function Home(){
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function NotFound(){
  return (
    <div>
      <h2>May be you were looking for some other page</h2>
    </div>
  )
}

function UserDetails(){
  const {userid} = useParams();
  const user = INITIAL_USERS_LIST.find((user) => user.id === +userid);
  return (
    <div>
      <h2>User Details! {user.name}</h2>
    </div>
  )
}

export default App;