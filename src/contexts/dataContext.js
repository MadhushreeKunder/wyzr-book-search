import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { API_KEY } from "../Pages";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [book, setBook] = useState();
  const [display, setDisplay] = useState([]);
  const [isError, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleBookSearchInput = (e) => {
    const book = e.target.value;
    setBook(book);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    setLoader(true);

    (async () => {
      try {
        await axios
          .get(
            "https://www.googleapis.com/books/v1/volumes?q=" +
              book +
              // "&key=" +
              // API_KEY +
              "&maxResults=20"
          )
          .then((data) => {
            console.log(data);
            setDisplay(data.data.items);
          });
        setLoader(false);
      } catch (error) {
        setError(true);
        console.log("loading... error");
        setLoader(false);
      }
    })();
  };

  return (
    <DataContext.Provider
      value={{
        book,
        display,
        handleBookSearchInput,
        handleSubmit,
        isError,
        loader,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
