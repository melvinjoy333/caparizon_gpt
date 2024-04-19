type Props = {
  data: any;
};

const User = ({ data }: Props) => {
  return <div className="cz-user-container">{data?.content}</div>;
};

export default User;
