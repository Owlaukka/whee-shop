import { useEffect, useState } from 'react';

interface IUseFetchDataReturn<T> {
  data: T | null;
  isLoading: boolean;
}

const useFetchData = <T>(fetch: () => Promise<T>): IUseFetchDataReturn<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);
      try {
        const fetchedData = await fetch();
        setData(fetchedData);
      } catch (e) {
        console.error('Could not fetch data', e);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetcher();
  }, [fetch]);

  return { data, isLoading };
};

export default useFetchData;
