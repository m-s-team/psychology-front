import React from 'react';
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

const TestItemCard = ({isComplete = false,name='',index=0,goTo,children}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius:'20px',
        boxShadow: 24,
        p: 4,
    };

    return (

        <div className="p-2 col-12 col-sm-6 col-lg-4">
            <div className={isComplete ? "card border-success" : "card"}>
                <h5 className="card-header text-center" style={isComplete ? {backgroundColor: "#befdbb"} : {}}>آزمون
                    {index}</h5>
                <div className="card-body">
                    <h5 className="card-title text-right">{name}</h5>
                    <p className="card-text text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است</p>
                    {isComplete ? <div> <a className="btn btn-outline-success mx-3">تکمیل شده</a></div> : <div>
                        <button onClick={handleOpen} className="btn btn-outline-info mx-3">راهنما</button>
                        <button onClick={goTo} className="btn btn-primary text-white">شروع</button>
                    </div>}
                </div>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </div>

    );
};

export default TestItemCard;
