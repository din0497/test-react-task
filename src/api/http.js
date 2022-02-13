import axios from "axios";

const baseURL = "http://92.63.206.40:1122/api";

export const registrate = async () => {
  let res;
  let formData = new FormData();
  formData.append("login", "rar@gmail.com");
  formData.append("password", "145668879");
  formData.append("surname", "Abdunazarov");
  formData.append("name", "Rivojiddin");
  formData.append("faculty_id", "123");
  formData.append("phone", "995206152");
  formData.append("email", "ra@gmail.com");
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
  formData.append("login", "rar@gmail.com");
  formData.append("password", "145668879");
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




export const changePassword = async () => {
  let token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfa…jIwfQ.qBcdAwsJIKkLldUt6UdrgYo62uJ1SqgUNMX4uyyv0ls";
  let res;
  let formData = new FormData();
  formData.append("old_password", "7654321");
  formData.append("new_password", "765432177");
  formData.append("repeat_password", "765432177");

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

export const changePhone = async () => {
  let token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOjIwfQ.qBcdAwsJIKkLldUt6UdrgYo62uJ1SqgUNMX4uyyv0ls";
  let res;
  let formData = new FormData();
  formData.append("phone", "7654321");


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

export const changeEmail = async () => {
  let token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOjIwfQ.qBcdAwsJIKkLldUt6UdrgYo62uJ1SqgUNMX4uyyv0ls";
  let res;
  let formData = new FormData();
  formData.append("email", "my@gmail.com");


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

