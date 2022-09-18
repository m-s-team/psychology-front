import React from "react";
import TestItemCard from "../../components/TestItemCard";

const TestPage = () => {
  return (
      <div className="row p-5 m-5 justify-content-center">
          {/*<TestItemCard />*/}
          {/*<TestItemCard isComplete={true}/>*/}
          {/*<TestItemCard/>*/}
        <div className="alert alert-warning text-center m-lg-5" role="alert">
          آزمون مورد نظر به زودی پیاده سازی می شود
        </div>
      </div>
  );
};

export default TestPage;
