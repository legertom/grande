import useHooks from 'axios-hooks';

// const endpoint = "https://grande-means-medium.herokuapp.com/api/";
const endpoint = "http://localhost:3000/api/";
const useRegisterUserHooks = () => {
  const [{ data, loading, error }, executeRegisterUser] = useHooks(
    {
      url: `${endpoint}users`,
      method: 'POST',
    },
    { manual: true }
  );

  return { data, loading, error, executeRegisterUser };
};

export default useRegisterUserHooks;
