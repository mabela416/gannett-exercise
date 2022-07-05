import { useCallback, useState } from 'react';

const useApi = apiFunc => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (...args) => {
    return apiFunc(...args).then((response) => {
        setData(response.data);
    }).catch((error) => {
        setError(error)
    }).finally(() => {
        setLoading(false)
    })
  }, [apiFunc])

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useApi;
