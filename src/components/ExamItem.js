import React from "react";
import { Collapse } from "react-collapse";
import { ChevronLeft,Delete } from "@material-ui/icons";
import TestItemCard from "./TestItemCard";

class ExamItem extends React.Component {


  static
  defaultProps = {
    isOpened: false,
    data: null,
  };


  constructor(props) {
    super(props);
    const { isOpened, data } = this.props;
    this.state = { isOpened, data: data };
  }


  render() {
    const { isOpened } = this.state;

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

          className="w-100 rounded-5 m-2 p-3 border rounded" onClick={() => this.setState({ isOpened: !isOpened })}
          >

          <div className="w-100 d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <ChevronLeft/>
              <span className="px-3" dir={"rtl"}>آزمون :{" "}{new Intl.DateTimeFormat('fa-IR', {dateStyle: 'full', timeStyle: 'long'}).format(new Date(this.state.data.createdDate))}</span>
            </div>
            <Delete />
          </div>
        </button>

        <Collapse isOpened={isOpened}>
          <div className="row">
            <TestItemCard isComplete={this.state.data.visualReasoningSubtest.createdDate} name={"استدلال تصویر"} index={1}/>
            <TestItemCard isComplete={this.state.data.numericalReasoningSubtest.createdDate} name={"استدلال ریاضی"} index={2}/>
            <TestItemCard isComplete={this.state.data.verbalAnalysisSubtest.createdDate} name={"تحلیل کلامی"} index={3}/>
            <TestItemCard isComplete={this.state.data.sequentialReasoningSubtest.createdDate} name={"استدلال توالی"} index={4}/>
            <TestItemCard isComplete={this.state.data.spatialRecognitionSubtest.createdDate} name={"تشخیص فضایی"} index={5}/>
            {/*<TestItemCard isComplete={this.state.data.threeDSubtest.createdDate} name={"سه بعدی"} index={6}/>*/}
          </div>
        </Collapse>
      </div>
    );
  }
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
