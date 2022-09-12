import React from 'react';

const TestItemCard = ({isComplete = false}) => {


    return (

        <div className="col">
            <div className={isComplete ? "card border-success" : "card"}>
                <h5 className="card-header text-center" style={isComplete ? {backgroundColor: "#befdbb"} : {}}>آزمون
                    1</h5>
                <div className="card-body">
                    <h5 className="card-title text-right">استدلال تصویر</h5>
                    <p className="card-text text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است</p>
                    {isComplete ? <div> <a className="btn btn-outline-success mx-3">تکمیل شده</a></div> : <div>
                        <a className="btn btn-outline-info mx-3">راهنما</a>
                        <a className="btn btn-primary text-white">شروع</a>
                    </div>}
                </div>
            </div>
        </div>

    );
};

export default TestItemCard;
