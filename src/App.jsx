import React from "react";
import BasketballPlayerCard from "./BasketballPlayerCard/BasketballPlayerCard";

const App = () => {
  return (
    <div>
      <BasketballPlayerCard
        name="LeBron James"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/800px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg"
        position="Forward"
        stats={{
          pointsPerGame: 25.4,
          assistsPerGame: 7.1,
          reboundsPerGame: 10.5,
        }}
      />
    </div>
  );
};

export default App;
