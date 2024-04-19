import React from "react";

type Props = {
  data: any;
};
const System = ({ data }: Props) => {
  return <div className="cz-system-container">{data?.content}</div>;
};

export default System;
