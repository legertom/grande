import useHooks from 'axios-hooks';

// const endpoint = "https://grande-means-medium.herokuapp.com/api/";
const endpoint = "http://localhost:3000/api/";
const useLoginUserHooks = () => {
  const [{ data, loading, error }, executeLoginUser] = useHooks(
    {
      url: `${endpoint}session`,
      method: 'POST',
    },
    { manual: true }
  );

  return { data, loading, error, executeLoginUser };
};

export default useLoginUserHooks;
