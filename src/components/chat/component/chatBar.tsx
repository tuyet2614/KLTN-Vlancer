import { useEffect, useState } from "react";
import "../style.scss";

interface Props {
  socket: any;
  users: any;
}

export const ChatBar = ({ socket, users }: Props) => {
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
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users?.map((user: any) => (
            <p key={user.socketID}>{user.attributes.users}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
