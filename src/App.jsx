import React from "react";
import BasketballPlayerCard from "./BasketballPlayerCard/BasketballPlayerCard";

const App = () => {
  return (
    <div>
      <BasketballPlayerCard
        name="LeBron James"
        image="https://www.usatoday.com/gcdn/presto/2020/01/26/USAT/80802abd-a62b-4420-8e15-ac4bd08c5929-2020-01-25_LeBron1.jpg?crop=2245,1688,x476,y589&width=700&height=527&format=pjpg&auto=webp"
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
