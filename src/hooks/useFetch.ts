import { useEffect, useState } from 'react';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
  method: HttpMethod;
  body?: string | Record<string, any>;
  headers?: Record<string, string>;
}

interface UseFetchResponse<T> {
  data: T | null;
  loading: boolean;
  fetchData: (url: string, options?: FetchOptions) => Promise<void>;
}

export function useFetch<T>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url: string, options: FetchOptions = { method: 'GET' }) => {
    try {
      setLoading(true);

      const response = await fetch(url, {
        method: options.method,
        body: options.body ? JSON.stringify(options.body) : undefined,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
        console.log(err)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // You can add any cleanup logic here if needed.
    return () => {
      // Cleanup code here, if necessary.
    };
  }, []);

  return { data, loading, fetchData } as UseFetchResponse<T>;
}


// function MyComponent() {
//     const { data, error, loading, fetchData } = useFetch<YourDataType>();
  
//     useEffect(() => {
//       // Fetch data when the component mounts
//       fetchData('https://api.example.com/data');
//     }, []);
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }
  
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     }
  
//     return (
//       <div>
//         {/* Render your data here */}
//         {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//       </div>
//     );
//   }
  
//   export default MyComponent;
//   In this example, the useFetch hook provides a fetchData function that you can use to make GET, POST, PUT, or DELETE requests by specifying the HTTP method in the options object. The hook also manages loading and error states, making it easier to handle asynchronous data fetching in your TypeScript components.
  
  
  
  
  
  