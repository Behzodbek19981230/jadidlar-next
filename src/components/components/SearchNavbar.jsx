import { useRouter } from "next/router";
import React from "react";

export default function SearchNavbar() {
  const navigate = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",

      search: createSearchParams({
        title: e.target.SearchInput.value,
      }).toString(),
    });
  };
  return (
    <div className="input-container2">
      <br />
      <form onSubmit={onSubmit}>
        <input placeholder="Qidiruv" type="search" name="SearchInput" />
        <div className="back">
          <button className="modal_search_button" type="submit">
            Qidiruv{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
