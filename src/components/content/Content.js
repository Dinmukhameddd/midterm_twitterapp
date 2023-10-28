import React from "react";
import { List } from'antd';


const posts = [
  {
    id: 1,
    name: "Arman",
    magnetLink: "Hello, World!",
    label: "Torrent 1",
  },
  {
    id: 2,
    name: "Dimash",
    magnetLink: "Hello, world",
    label: "Torrent 2",
  },
  {
    id: 3,
    name: "Akim",
    magnetLink: "Hello, everyone!",
    label: "Torrent 3",
  },
  {
    id: 4,
    name: "Project",
    magnetLink: "Go",
    label: "Torrent 4",
  },
  {
    id: 5,
    name: "Someone",
    magnetLink: "travel",
    label: "Torrent 5",
  },
  {
    id: 6,
    name: "FFF",
    magnetLink: "FFF",
    label: "Torrent 6",
  },
  {
    id: 7,
    name: "Lady",
    magnetLink: "KBTU",
    label: "Torrent 7",
  },
  {
    id: 8,
    name: "Someone",
    magnetLink: ")))",
    label: "Torrent 8",
  },
  {
    id: 9,
    name: "Someone",
    magnetLink: "...",
    label: "Torrent 9",
  },
  {
    id: 10,
    name: "Someone",
    magnetLink: "TWITTER",
    label: "Torrent 10",
  },
];


export const Content = () => {
    return (
    <List
        id="list"
        header="Posts"
        itemLayout="horizontal"
        dataSource={ posts }
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
                title={<p>{item.name}</p>}
                description={<p>{item.magnetLink}</p>}
            />
          </List.Item>
        )}
    />
    )
}