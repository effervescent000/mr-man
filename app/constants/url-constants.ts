export const URLS = () => ({
  ROOT:
    process.env.NODE_ENV === "production" ? "a url" : "http://127.0.0.1:8000",
  AUTH: "auth/",
  LOGIN: "auth/login",
});
