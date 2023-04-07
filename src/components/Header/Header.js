import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <h1 data-testid="title" className="header">
      {title}
    </h1>
  );
}
