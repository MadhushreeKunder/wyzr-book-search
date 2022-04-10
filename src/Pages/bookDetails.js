import React from "react";
import { useParams } from "react-router";
import { useData } from "../contexts/dataContext";

export function BookDetails() {
  let { id } = useParams();
  const { display } = useData();

  function getBookDetails(data, id) {
    return data.find((book) => book.id === id);
  }

  const bookDetail = getBookDetails(display, id);
  console.log(bookDetail);

  return (
    <div>
      BookDetails {id}
      {bookDetail.searchInfo.textSnippet}
    </div>
  );
}
