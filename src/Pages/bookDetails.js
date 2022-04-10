import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_KEY } from ".";

export function BookDetails() {
  let { id } = useParams();
  const [showBookDetails, setShowBookDetails] = useState();


  // -------------useEffect to fetch data again (2nd api call)------------------

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await axios
  //         .get(
  //           "https://www.googleapis.com/books/v1/volumes/" +
  //             id +
  //             "?key=" +
  //             API_KEY
  //         )
  //         .then((data) => {
  //           console.log(data);
  //           setShowBookDetails(data.data);
  //           console.log(showBookDetails.volumeInfo.title);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();

  // }, []);

  // function getBookDetails(data, id) {
  //   return data.find((book) => book.id === id);
  // }

  // const bookDetail = getBookDetails(data, id);

  return (
    <div>
      BookDetails {id}
      {/* {showBookDetails.volumeInfo.title}{" "} */}
    </div>
  );
}
