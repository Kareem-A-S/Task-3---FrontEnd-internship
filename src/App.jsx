import React from "react";
import Button from "@mui/material/Button";
import BottomActionsCard from "./revCard";
function App() {
  return (
    <div className="review-section">
      <h1 className="reviews-title">Reviews:</h1>
      <div className="reviewsSection">
        <BottomActionsCard />
        <BottomActionsCard />
        <BottomActionsCard />
      </div>
    </div>
  );
}

export default App;
