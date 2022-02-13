import axios from "axios";

const baseURL = "http://92.63.206.40:1122/api";

export const registrate = async (userData) => {
  
  let res;
  let formData = new FormData();
  formData.append("login", userData.login);
  formData.append("password", userData.password);
  formData.append("surname", userData.surname);
  formData.append("name", userData.name);
  formData.append("faculty_id", userData.faculty);
  formData.append("phone", userData.phone);
  formData.append("email", userData.email);
  try {
    res = await axios.post(`${baseURL}/signin`, formData);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const login = async (login, password) => {
  let res;
  let formData = new FormData();
  formData.append("login", login);
  formData.append("password", password);
  try {
    res = await axios.post(`${baseURL}/login`, formData);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (token) => {
  let res;
  try {
    res = await axios.get(`${baseURL}/user`, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err.response.data);
  }
};




export const changePassword = async (passwords,token) => {
  let res;
  let formData = new FormData();
  formData.append("old_password", passwords.old);
  formData.append("new_password", passwords.new);
  formData.append("repeat_password", passwords.confirm);

  try {
    res = await axios.post(`${baseURL}/change_password`, formData, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const changePhone = async (phone,token) => {
  let res;
  let formData = new FormData();
  formData.append("phone", phone);


  try {
    res = await axios.post(`${baseURL}/change_phone`, formData, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const changeEmail = async (email,token) => {

  let res;
  let formData = new FormData();
  formData.append("email", email);


  try {
    res = await axios.post(`${baseURL}/change_email`, formData, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

