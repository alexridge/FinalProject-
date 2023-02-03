import axios from 'axios'

      let today = new Date();
      let month = today.getMonth() + 1;
      let day = today.getDate();

      const apiKey = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6ImEyNGIzZmQ4YzY4NWU1YzQ2ZDdhMDcwNDEwMDdlYzRhNmY0ZTA2MGFlMDg5NTEyOTkzMDdkZDM1NTg5MjJjOTRlZDQ3OGM1ODc2YTVkYzU4IiwiaWF0IjoxNjc1NDIwODM0LjAwNzY5NiwibmJmIjoxNjc1NDIwODM0LjAwNzcsImV4cCI6MTY3NTQzNTIzNC4wMDMwMywic3ViIjoiIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.O9NKst_L2caOx6XxHpu2taQWiOAuo88yv6lEVm_1oN2mMei9JprLJB7aaLD816jNZkX9pX3KaWxOxYGdBlREApZNQt6ml2HBl0idT9Oiw3YYNmDkWubx6LTsqIB5rDiltBQEix32JzrxUlk-8DQp9YTZCVu1Y6aQPQqXXTvTgJ9vteOcEUd61OrFs24pkCiFPKHhJ7HOUMCJ6UcIsr5njq9jtHKKir6KAzgfrLMKDZOx6ywbvdA-e_SHUYiiG1tdQzJHR00NR1O1Lu0yPcz116ZgoE4ziYb4HK7Y_mp0QBq8WOox5IiRfSwzaKEfey1QxC12d000Qe7UCNSOqn8vlByydSQ0jP2PfreGtg54FyP3eZB_KcIZAVbJ840-9W-iqqrKtIWrYneu91co_YLhi5IVoQOjq9DkjMWMGOgUR7nYTFhCAJO5C-sgGAvILxgkS6-vhC4G56fLbr-OftEhsyWTCfynvaDkl0M8LvQdB8dsHVkxfPEG6lmZflqV8HPfAXbsrMC2wgAfJsL4OxOl3p-sNil7SHSKgX00gm5IPqqkLi-x6PkwUkYaw5lIYmG-hN3SuVNmIGONyof3_Y8UNt2ENq1NP8RPwfYeGE8acCvjWhUJ6QJdG98aqfW1ZKrhrI0o_3mZfnBBSAips3bcNb6TnXdKKyvjvSnUfTz8-F8'
      // process.env.apiKey

  const apiUserAgent = 'This Day in History (alexridge2309@gmail.com)'

export default axios.create({
  baseURL: `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`,
  headers: {
    'Api-User-Agent': apiUserAgent
}})
  // Add Your Key Here!!!
  axios.defaults.headers.common = {
    'Authorization': process.env.apiKeyEnv,
  };
