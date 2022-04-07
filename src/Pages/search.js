import axios from "axios";
import React, { useState } from "react";
import { API_KEY } from ".";

export function Search() {
  const [book, setBook] = useState("");
  const [display, setDisplay] = useState([]);

  const handleBookSearchInput = (e) => {
    console.log(e.target.value);
    const book = e.target.value;
    setBook(book);
    console.log(API_KEY);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          API_KEY
      )
      .then((data) => {
        console.log(data.data.items);
        setDisplay(data.data.items);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen max-w-screen-lg m-auto">
      <div className="-mt-20">
        Search
        <form className=" " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search your fav books.."
            className="border-2 p-4"
            onChange={handleBookSearchInput}
          />
          <button type="submit">Search </button>
        </form>
        <div className="flex">
          {display.map((book) => (
            <div key={book.id} className="border-2 border-black">
              {book.volumeInfo.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
