import { useCallback, useState } from "react";
import API from "../api";

export default (config = {}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = useCallback(
    async (options = {}) => {
      try {
        setLoading(true);
        // console.log("config: ", config);
        const response = await API.request({ ...config, ...options });
        setLoading(false);
        setData(response.data);

        return response;
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(err);
      }
    },
    [config]
  );

  return [
    fetch,
    {
      loading,
      data,
      error,
    },
  ];
};
