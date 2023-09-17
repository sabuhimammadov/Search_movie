import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchInfo.module.css";
import { useGlobalState } from "../../shared/provider/GlobalProvider/useGlobalstate";
import { Search_Movie } from "../../shared/provider/GlobalProvider/types";
import { Search } from "../../assents/icons";
import { GetMovie } from "../../service/movie";

export const SearchInfo = () => {
  const inputRef = useRef();
  const [text, setText] = useState("");
  const { state: { moviesSearch }, dispatch } = useGlobalState();

  const handleSend = () => {
    const movieName = inputRef.current.value;
    setText(movieName);
    inputRef.current.value = "";
  };

  useEffect(() => {
    console.log("text:", text); // Debugging: Check the value of 'text'

    // Check if text is not empty before making the API call
    if (text) {
      const refetch = async () => {
        try {
          const res = await GetMovie({s: text});
          dispatch({ type: Search_Movie, payload: res.data.Search });
        } catch (error) {
          console.error("Error in GetMovie:", error);
        }
      };

      refetch();
    }
  }, [text, dispatch]);

  console.log(moviesSearch);

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className={styles.title}>What movie do you want to see?</h2> <br />
      <div className={styles["search-info"]}>
        <input
          className={styles['search-input']}
          placeholder="Search"
          ref={inputRef}
        />
        <button className={styles["search-icon"]} onClick={handleSend}><Search /></button>
      </div>
    </div>
  );
};
