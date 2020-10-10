import React from "react";

import "./Post.css";


// const date = new Date().toLocaleDateString();
const post = (props) => (
    
  <article className="Post">
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">
        {props.content}
      </div>
      <p>{props.date}</p>
    </div>
  </article>
  
);

export default post;
