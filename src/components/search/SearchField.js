import React from 'react';
import { AutoComplete   } from "antd";
import './SearchField.css';

const searchs = [
  {
    id: 1,
    name: "Arman",
    magnetLink: "magnet:?xt=urn:btih:1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF",
    label: "Torrent 1",
  },
  {
    id: 2,
    name: "Dimash",
    magnetLink: "magnet:?xt=urn:btih:234567890ABCDEF1234567890ABCDEF1234567890ABCDEF",
    label: "Torrent 2",
  },
  {
    id: 3,
    name: "F",
    magnetLink: "magnet:?xt=urn:btih:3333333333333333333333333333333333333333",
    label: "Torrent 3",
  },
  {
    id: 4,
    name: "A",
    magnetLink: "magnet:?xt=urn:btih:4444444444444444444444444444444444444444",
    label: "Torrent 4",
  },
  {
    id: 5,
    name: "B",
    magnetLink: "magnet:?xt=urn:btih:5555555555555555555555555555555555555555",
    label: "Torrent 5",
  },
  {
    id: 6,
    name: "C",
    magnetLink: "magnet:?xt=urn:btih:6666666666666666666666666666666666666666",
    label: "Torrent 6",
  },
  {
    id: 7,
    name: "D",
    magnetLink: "magnet:?xt=urn:btih:7777777777777777777777777777777777777777",
    label: "Torrent 7",
  },
  {
    id: 8,
    name: "D",
    magnetLink: "magnet:?xt=urn:btih:8888888888888888888888888888888888888888",
    label: "Torrent 8",
  },
  {
    id: 9,
    name: "E",
    magnetLink: "magnet:?xt=urn:btih:9999999999999999999999999999999999999999",
    label: "E",
  },
  {
    id: 10,
    name: "F",
    magnetLink: "magnet:?xt=urn:btih:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    label: "Torrent 10",
  },
];



export const SearchField = () => {
  const [searchResults, setSearchResults] = React.useState(searchs);

  const fetchSearchResults = async (query) => {
    const results = searchs.filter((search) => search.name.toLowerCase().includes(query));
    setSearchResults(results);
  };

  return (
    <AutoComplete
      options={searchResults}
      onSearch={fetchSearchResults}
      placeholder="Search..."
      allowClear="true"
      style={{ 
        overflow: "auto", 
        height: "3rem",
        width: "22.5rem",
      }}
    />
  );
};
export default SearchField;