import React from "react";

export default function Icon({ className, icon, callback, id }) {
  return (
    <a onClick={callback} className={className} id={id}>
      <i className={icon} />
    </a>
  );
}
