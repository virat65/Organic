const backendServer = import.meta.env.VITE_BACKENDURL;
console.log(backendServer, "BACKEND SERVER");
const backendurl = {
  login: {
    url: `${backendServer}/api/login`,
    method: "post",
  },
  signup: {
    url: `${backendServer}/api/signup`,
    method: "post",
  },
};
export default backendurl;
