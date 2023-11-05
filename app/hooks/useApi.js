import { useState } from 'react';

export default function useApi(apiFunc) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function request() {
    setLoading(true);
    const response = apiFunc();
    setData(response);
    setLoading(false);
  }

  return { data, loading, request };
}
