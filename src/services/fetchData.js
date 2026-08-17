export const fetchData = async (query) => {
  const BASE_URL = "https://dummyjson.com/";

  const response = await fetch(`${BASE_URL}${query}`);

  if (!response.ok) {
    throw new Error("Products not Found");
  }

  return response.json();
};
