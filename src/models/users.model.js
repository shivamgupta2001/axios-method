import axios from "axios";

export const userModel = async () => {
  try {
    const res = await axios("here put link");
    return res.data.users;
  } catch (err) {
    console.log(err);
  }
};
