import React, { useState } from "react";
import axios from "axios";

function XoUtil() {
  const [loading, setLoading] = useState(0);

  //Ajax request handler
  const ajax = async (url, method, data = null, loading) => {
    if (!loading) {
      setLoading(false);
    }

    return await axios({
      url,
      method,
      data,
    })
      .then((response) => {
        setLoading(false);
        return response.data;
      })
      .error((error) => console.log(error));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
}
