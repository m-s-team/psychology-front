import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../components/Loading";

const VisualReasoningSubtest = () => {

  const { getAccessTokenSilently } = useAuth0();
  const { user } = useAuth0();
  const [subtests, setSubtests] = useState(null);
  const [loading, setLoading] = useState(true);

  let getSubTests = async () => {
    try {
      setLoading(true);
      const token = await getAccessTokenSilently({
        audience: "https://api.psychology.ml/",
        scope: "openid profile email",
      });
      const response = await fetch(`https://api.psychology.ml/barrett/${"1000000006"}/visual-reasoning`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setSubtests(await response.json());
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  };

  useEffect( () =>{
     getSubTests();

  }, [getAccessTokenSilently, user?.sub]);


  if (loading)
    return <Loading />;


  return (
    <div>
      {subtests.tests[0].question}
    </div>
  );
};

export default VisualReasoningSubtest;
