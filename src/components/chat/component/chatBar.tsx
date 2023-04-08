import { useEffect, useState } from "react";
import "../style.scss";

interface Props {
  socket: any;
  users: any;
}

export const ChatBar = ({ socket, users }: Props) => {
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users.map((user: any) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
