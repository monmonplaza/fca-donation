const fetchApi = (url, fd = {}) => {
  const data = fetch(url, {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(fd),
  })
    .then((res) => res.json())

    .catch((error) => {
      console.error(error);
    });
  return data;
};

export default fetchApi;
