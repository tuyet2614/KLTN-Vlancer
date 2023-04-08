import { List as AntdList, Avatar } from "antd";
import { Button, Input } from "antd";
import socket from "socket.io-client";

interface Props {
  users: any;
  id: any;
  username: any;
}
export const List = ({ users, id, username }: Props) => {
  const handleClick = async (id: any, socketid: any) => {
    const io = socket("http://localhost:1337");
    await fetch("http://localhost:1337/api/active-users/" + id, {
      method: "Delete",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async (e) => {
        io.emit("kick", { socketid }, (error: any) => {
          if (error) return alert(error);
        });
        setTimeout(() => location.reload(), 3000);
      })
      .catch((e) => location.reload());
  };
  return (
    <AntdList
      itemLayout="horizontal"
      dataSource={users}
      renderItem={(user: any) => (
        <AntdList.Item>
          <AntdList.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={user?.attributes?.username}
          />
          <Button onClick={() => handleClick(id, user.attributes.socketid)}>
            Delete
          </Button>
        </AntdList.Item>
      )}
    />
  );
};
