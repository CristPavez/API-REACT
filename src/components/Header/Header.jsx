import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "../../styles/Header/header.module.css";
export default function Header() {
  return (
    <>
      <ul className={style.containerHeader}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </>
  );
}
