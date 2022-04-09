import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from ".";

export function Search() {
  const [book, setBook] = useState("");
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
    <div className="flex justify-center max-w-screen-lg  m-auto mb-4">
      <div className=" relative">
        <form
          className="sticky top-0 py-4 backdrop-blur bg-white/30 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search your fav books.."
            className="border-2 p-4 backdrop-blur-lg bg-white/30 "
            onChange={handleBookSearchInput}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="ml-4 px-4 py-2 rounded-md text-white bg-primaryCoral font-medium uppercase"
          >
            Search{" "}
          </button>
        </form>
        <div className="flex flex-wrap justify-between ">
          {display.map((book) => (
            <Link to={`/book/${book.id}`} key={book.id}>
              {/* <a href={book.volumeInfo.previewLink}> */}
              <div className="border-2 w-44 p-2 my-4  text-left">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  className="h-48"
                  alt={book.volumeInfo.title}
                />
                <p className="mt-2 font-medium">{book.volumeInfo.title}</p>
              </div>
              {/* </a> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
