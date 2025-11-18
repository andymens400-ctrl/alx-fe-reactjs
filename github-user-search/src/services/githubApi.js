const token = import.meta.env.VITE_APP_GITHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});
