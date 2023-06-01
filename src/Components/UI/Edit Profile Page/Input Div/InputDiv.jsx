import React, { useState } from "react";
import "./InputDiv.css";

function InputDiv(props) {
  const [edit, setEdit] = useState(true);

  return (
    <div className=" InputDiv-div ">
      <input
        disabled={edit || props.notAllow}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
      />

      <i
        style={{ color: `${props.notAllow ? "grey" : "#1877f2"}` }}
        onClick={() => {
          setEdit((p) => !p);
        }}
        className="bx bxs-edit"
      ></i>
    </div>
  );
}

export default InputDiv;
