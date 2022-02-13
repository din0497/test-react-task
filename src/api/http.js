import axios from "axios";

const baseURL = "http://92.63.206.40:1122/api";

export const registrate = async () => {
  let res;
  let formData = new FormData();
  formData.append("login","ra@gmail.com")
  formData.append("password","7654321")
  formData.append("surname","Abdunazarov")
  formData.append("name","Rivojiddin")
  formData.append("faculty_id","123")
  formData.append("phone","995206152")
  formData.append("email","ra@gmail.com")
  try {
    res = await axios.post(`${baseURL}/signin`, formData);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const login = async () => {
  let res;
  let formData = new FormData();
  formData.append("login","ra@gmail.com")
  formData.append("password","7654321")
  try {
    res = await axios.post(`${baseURL}/login`, formData);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
