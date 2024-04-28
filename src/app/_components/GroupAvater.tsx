import { Avatar, Tooltip } from "antd";
import Image from "next/image";
import React from "react";

interface UsersProps {
  users: {
    firstname: string;
    lastname: string;
    image: string | null;
  }[];
}

export default function GroupAvater({ users = [] }: UsersProps) {
  const colors = [
    {
      text: "#004D00",
      background: "#EEFFF3",
    },
    {
      text: "#595FD9",
      background: "#F1F1FF",
    },
    {
      text: "#4D4000",
      background: "#FFF7D0",
    },
    {
      text: "#4D0000",
      background: "#FFD0D0",
    },
    {
      text: "#595FD9",
      background: "#C6C9FF",
    },
  ];

  return (
    <Avatar.Group
      maxCount={5}
      size="small"
      maxPopoverTrigger="click"
      maxStyle={{
        color: "#f56a00",
        backgroundColor: "#fde3cf",
      }}
    >
      {users?.map((user, idx: number) => (
        <Tooltip
          title={`${user?.firstname} ${user?.lastname}`}
          placement="top"
          key={idx}
        >
          <Avatar
            style={{
              backgroundColor: colors[idx]?.background || "#F1F1FF",
              color: colors[idx]?.text || "#595FD9",
            }}
            src={user.image && user.image}
          >
            {user.image && (
              <p className="uppercase cursor-pointer text-xs">
                {user?.firstname?.charAt(0)}
                {user?.lastname?.charAt(0)}
              </p>
            )}
          </Avatar>
        </Tooltip>
      ))}
    </Avatar.Group>
  );
}
