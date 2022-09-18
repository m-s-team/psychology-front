import React from "react";
import { Button } from "@material-ui/core";
import { Book } from "@material-ui/icons";

const JamesBarret = () => {
  return (
    <>
      <div className="d-flex justify-content-start p-2 p-md-3">
        <Button
          variant="contained"
          size="large"
          color="primary" endIcon={<Book />}>
          افزودن آزمون جدید
        </Button>
      </div>
      <hr/>
      <div className="alert alert-warning text-center m-lg-5" role="alert">
        لیست آزمون های جیمز برت شما خالی می باشد. جهت اضافه کردن آزمون جیمز برت جدید برروی دکمه  <a className="alert-link">افزودن آزمون جدید </a>در بالای صفحه کلیک کنید.
      </div>
    </>
  );
};

export default JamesBarret;
