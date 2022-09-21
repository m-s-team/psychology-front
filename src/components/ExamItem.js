import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { ChevronLeft, Delete } from "@material-ui/icons";
import TestItemCard from "./TestItemCard";
import Typography from "@material-ui/core/Typography";
import { useHistory  } from "react-router-dom";



 function ExamItem({ data, deleteFunc}) {

    const [isOpened,setIsOpened]=useState(false);
   const history = useHistory();

    const nextPath = (path) =>{
      history.push(path);

  }

  let guidance1=(<>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </>)



    return (
      <div>
        {/*<div className="text-right">*/}
        {/*  <label className="label">*/}
        {/*    Opened:*/}
        {/*    <input*/}
        {/*      className="input"*/}
        {/*      type="checkbox"*/}
        {/*      checked={isOpened}*/}
        {/*      onChange={({ target: { checked } }) => this.setState({ isOpened: checked })} />*/}
        {/*  </label>*/}


        {/*</div>*/}
        <button

          className="w-100 rounded-5 m-2 p-3 border rounded" onClick={() => setIsOpened(!isOpened)}
        >

          <div className="w-100 d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <ChevronLeft />
              <span className="px-3" dir={"rtl"}>آزمون :{" "}{new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "full",
                timeStyle: "long",
              }).format(new Date(data.createdDate))}</span>
            </div>
            <Delete onClick={() => deleteFunc(data.id)} />
          </div>
        </button>

        <Collapse isOpened={isOpened}>
          <div className="row">
            <TestItemCard goTo={()=>nextPath('/test/barret/visualReasoningSubtest')} isComplete={data.visualReasoningSubtest.createdDate} name={"استدلال تصویر"}
                          index={1}>{guidance1}</TestItemCard>
            <TestItemCard isComplete={data.numericalReasoningSubtest.createdDate} name={"استدلال ریاضی"}
                          index={2} />
            <TestItemCard isComplete={data.verbalAnalysisSubtest.createdDate} name={"تحلیل کلامی"}
                          index={3} />
            <TestItemCard isComplete={data.sequentialReasoningSubtest.createdDate} name={"استدلال توالی"}
                          index={4} />
            <TestItemCard isComplete={data.spatialRecognitionSubtest.createdDate} name={"تشخیص فضایی"}
                          index={5} />
            {/*<TestItemCard isComplete={data.threeDSubtest.createdDate} name={"سه بعدی"} index={6}/>*/}
          </div>
        </Collapse>
      </div>
    );

}

export default ExamItem;
//
// {
//   "id": 1000000001,
//   "createdDate": "2022-08-03T02:32:30.100603994Z",
//   "visualReasoningSubtest": {
//   "createdDate": "2022-08-03T02:32:30.100603994Z",
//     "completedDate": "2022-08-03T02:45:12.10865477Z"
// },
//   "numericalReasoningSubtest": {
//   "createdDate": "2022-08-03T02:32:30.100603994Z",
//     "completedDate": "2022-08-03T02:45:12.10865477Z"
// },
//   "verbalAnalysisSubtest": {
//   "createdDate": "2022-08-03T02:32:30.100603994Z",
//     "completedDate": "2022-08-03T02:45:12.10865477Z"
// },
//   "sequentialReasoningSubtest": {
//   "createdDate": "2022-08-03T02:32:30.100603994Z",
//     "completedDate": "2022-08-03T02:45:12.10865477Z"
// },
//   "spatialRecognitionSubtest": {
//   "createdDate": "2022-08-03T02:32:30.100603994Z",
//     "completedDate": "2022-08-03T02:45:12.10865477Z"
// },
//   "threeDSubtest": {
//   "createdDate": "2022-08-03T02:32:30.100603994Z",
//     "completedDate": "2022-08-03T02:45:12.10865477Z"
// }
// }
