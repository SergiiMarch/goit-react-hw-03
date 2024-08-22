import React from "react";
import Contact from "../Contact/Contact";

export default function ContactList({ values }) {
  return (
    <div>
      {values.map((value) => (
        <Contact key={value.id} value={value} />
      ))}
    </div>
  );
}
