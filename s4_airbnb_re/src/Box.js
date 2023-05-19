import React from "react";
import styled from "./Box.module.css";

const Box = (props) => {
  return (
    <div>
      <img className={styled.image} src={props.img} />
      <div className={styled.header}>
        <div className={styled.title}>{props.title}</div>
        <div className={styled.rate}>{props.rate}⭐</div>
      </div>

      <div className={styled.len}>{props.len}</div>
      <div className={styled.date}>{props.date}</div>
      <div className={styled.price}>{props.price}</div>
    </div>
  );
};

export default Box;
