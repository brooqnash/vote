const useMatch = async () => {
  const req = await fetch("http://localhost:3000/api/dogs");
  const res = await req.json();

  return res;
};

export default useMatch;
