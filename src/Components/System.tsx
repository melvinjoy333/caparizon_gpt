import React from "react";

type Props = {
  data: any;
};
const System = ({ data }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        minWidth: "300px",
        border: "2px solid white",
        borderRadius: "25px",
        padding: "6px",
      }}
    >
      {data?.content}
    </div>
  );
};

export default System;
