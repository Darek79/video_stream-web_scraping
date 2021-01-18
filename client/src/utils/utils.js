import axios from "axios";
import moment from "moment";
export const fetchData = async (path, id, fn) => {
  try {
    const r = await axios.get(`${path}/${id}`);
    // const r = JSON.parse(localStorage.getItem("links"));
    fn(r.data);
  } catch (error) {
    return error;
  }
};

export const changeDate = (str) => {
  return moment(str).format("DD.MM.YYYY");
};

export const changeText = (str) => {
  console.log(str);
  return str.split(/\>(.*?)\</g)[1];
};
