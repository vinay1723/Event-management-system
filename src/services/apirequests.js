import axios from "axios";

export async function signup(user) {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/v1/user/signup",
      data: user,
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function login(user) {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/v1/user/login",
      data: user,
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function logout() {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:3000/api/v1/user/logout",
      withCredentials: true,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getAllEvents() {
  try {
    const res = await axios({
      method: "GET",
      url: `http://localhost:3000/api/v1/userevent/events`,
      withCredentials: true,
    });

    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function createEvent(event) {
  try {
    const res = await axios({
      method: "POST",
      url: `http://localhost:3000/api/v1/userevent/${event.user}`,
      data: event,
      withCredentials: true,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateEvent(event) {
  try {
    const res = await axios({
      method: "PATCH",
      url: `http://localhost:3000/api/v1/userevent/${event.user}`,
      data: event,
      withCredentials: true,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteEvent(event) {
  try {
    const res = await axios({
      method: "DELETE",
      url: `http://localhost:3000/api/v1/userevent/${event.user._id}`,
      data: event,
      withCredentials: true,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateSettings(user, data) {
  try {
    const res = await axios({
      method: "PATCH",
      url: `http://localhost:3000/api/v1/user/updateMyPassword`,
      data: user,
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
