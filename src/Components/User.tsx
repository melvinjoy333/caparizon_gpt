type Props = {
  data: any;
};

const User = ({ data }: Props) => {
  return <div className="cz-system-container">{data?.content}</div>;
};

export default User;
