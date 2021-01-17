import axios from "axios";
import moment from "moment";
export const fetchData = async (id, fn) => {
  try {
    const r = await axios.get(`video/${id}`);
    // const r = JSON.parse(localStorage.getItem("links"));
    fn(r.data);
  } catch (error) {
    return error;
  }
};

export const changeDate = (str) => {
  return moment(str).format("DD.MM.YYYY");
};
