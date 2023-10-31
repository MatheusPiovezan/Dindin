import axios from "axios";

export default axios.create({
  baseURL: "https://apidindin-1-w2658157.deta.app/api",
  headers: { "Content-Type": "application/json" },
});
