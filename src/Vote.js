import "./App.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Specs } from "./Specs";

export function Vote({brandName,model,specs}) {
    const [like, setLike] = useState(0);
    const [dislike, setDesLike] = useState(0);
    return (
      <div
      className="Vote"
        style={{
          background: like >= dislike ? "green" : "crimson",
          textTransform: "uppercase",
          color: "white"
        }}
      >
        <h1>{brandName}</h1>
        <h2>{model}</h2>
        <Button variant="contained">Contained</Button>
  
        <Specs specs={specs}/>
        <button onClick={() => setLike(like + 1)}>👍{like}</button>
        <button onClick={() => setDesLike(dislike + 1)}>👎{dislike}</button>
      </div>
    );
  }

