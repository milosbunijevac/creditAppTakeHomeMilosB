import React from "react";
import { useSelector } from "react-redux";

const DisqualificationPage = () => {
  const errorMessage = useSelector((state) => state.errorMessage);

  return (
    <div id="disqualificationPage">
      <div id="shownErrorMessage">{errorMessage}</div>
      <div>
        Please contact customer support at (999)-123-4567 for more information
        on this issue.
      </div>
    </div>
  );
};

export default DisqualificationPage;
