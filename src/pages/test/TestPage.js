import React from "react";
import TestItemCard from "../../components/TestItemCard";

const TestPage = () => {
  return (
      <div className="row p-5 m-5">
          <TestItemCard />
          <TestItemCard isComplete={true}/>
          <TestItemCard/>
      </div>
  );
};

export default TestPage;
