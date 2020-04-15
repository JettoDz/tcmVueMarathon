const fetchData = async () => {
  await new Promise(resolver => setTimeout(resolver, 1000));
  return [
    {
      id: 1,
      Title: "My blog title",
      Description: "Description"
    },
    {
      id: 2,
      Title: "My blog title2",
      Description: "Description"
    }
  ];
};

export default {
  fetchData
};
