import axios from "axios";
import { createContext, useContext, useState } from "react";
import { API_KEY } from "../Pages";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [book, setBook] = useState();
  const [display, setDisplay] = useState([]);

  const handleBookSearchInput = (e) => {
    console.log(e.target.value);
    const book = e.target.value;
    setBook(book);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    (async () => {
      try {
        await axios
          .get(
            "https://www.googleapis.com/books/v1/volumes?q=" +
              book +
              "&key=" +
              API_KEY +
              "&maxResults=20"
          )
          .then((data) => {
            console.log(data);
            setDisplay(data.data.items);
          });
      } catch (error) {
        console.log("loading... error");
      }
    })();
  };

  return (
    <DataContext.Provider
      value={{
        book,
        setBook,
        display,
        setDisplay,
        handleBookSearchInput,
        handleSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
