import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Book } from "@material-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
import ExamItem from "../../components/ExamItem";
import Loading from "../../components/Loading";

const JamesBarret = () => {
    const { getAccessTokenSilently } = useAuth0();
    const { user } = useAuth0();
    const [subtests, setSubtests] = useState(null);
    const [loading, setLoading] = useState(true);

    let getSubTests=async () => {
    try {
      setLoading(true)
      const token = await getAccessTokenSilently({
        audience: "https://api.psychology.ml/",
        scope: "openid profile email",
      });
      const response = await fetch("https://api.psychology.ml/barrett", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setSubtests(await response.json());
    } catch (e) {
      console.error(e);
    }
    setLoading(false)
  }
    let addSubTests=async () => {
    setLoading(true)
      try {
      const token = await getAccessTokenSilently({
        audience: "https://api.psychology.ml/",
        scope: "barret/post",
      });


      const response = await fetch("https://api.psychology.ml/barrett", {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      await getSubTests();
    } catch (e) {
      console.error(e);
    }
    setLoading(false)
  }
  let deleteSubTest=async (id) => {
    setLoading(true)
      try {
      const token = await getAccessTokenSilently({
        audience: "https://api.psychology.ml/",
        scope: "barret/post",
      });


      const response = await fetch(`https://api.psychology.ml/barrett/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        console.log(response.json());
      await getSubTests();
    } catch (e) {
      console.error(e);
    }
    setLoading(false)
  }

    useEffect(() => {
      getSubTests();
    }, [getAccessTokenSilently, user?.sub]);

    if ( loading)
      return <Loading/>

    console.log(subtests);
    return (
      <>
        <div className="d-flex justify-content-start p-2 p-md-3 " >
          <Button
            variant="contained"
            size="large"
            onClick={addSubTests}
            color="primary" endIcon={<Book />}>
            افزودن آزمون جدید
          </Button>
        </div>
        <hr />

        {
          subtests.length < 1 ?
            (<div className="alert alert-warning text-center m-lg-5" role="alert">
              لیست آزمون های جیمز برت شما خالی می باشد. جهت اضافه کردن آزمون جیمز برت جدید برروی دکمه <a
              className="alert-link">افزودن آزمون جدید </a>در بالای صفحه کلیک کنید.
            </div>)
            :
            (<div className="">
              <div>
                {subtests.map(subtest => <ExamItem deleteFunc={deleteSubTest} key={subtest.id} data={subtest} />)}
              </div>


            </div>)
        }
      </>
    );
  }
;





export default JamesBarret;
