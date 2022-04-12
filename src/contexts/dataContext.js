import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const DataContext = createContext();

export function DataProvider({ children }) {
  const [book, setBook] = useState();
  const [display, setDisplay] = useState([]);   //displays an array of books searched from the API
  const [isError, setError] = useState(false);  //error state
  const [loader, setLoader] = useState(false);  // loading state

  //contains value of the input book
  const handleBookSearchInput = (e) => {
    const book = e.target.value;
    setBook(book);
  };

  // onSubmit, axios call is made to the api -> data is fetched and stored in display
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

// only one api call is made, hence the values are stored in context, so that both the search feature and book details page can access it.

export function useData() {
  return useContext(DataContext);
}
