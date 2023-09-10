
export const BASE_URL = "http://45.12.72.210:8000"
export const UseFetch = async (
  url: string,
  Method: "POST" | "GET" | "PUT" | "DELETE",
  data?: any
) => {  
  switch (Method) {
    case "POST":
     try {
      const res = await fetch(BASE_URL + url, {
        method: Method,
        body: JSON.stringify(data),
      });
      return res.json();
     } catch (error) {  
        console.log(error)
     }
      break;
    case "GET":
      try {
        const res2 = await fetch(BASE_URL + url, {
          method: Method,
          headers: { "Content-Type": "application/json" },
        });
        return res2.json();
      } catch (error) { 
          console.log(error)
      }
      break;
  }
};
