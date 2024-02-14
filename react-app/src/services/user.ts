import axios from "axios";

import { GetLoginProps, GetApiToken } from "../types/user";

export async function login({ username, password }: GetLoginProps): Promise<GetApiToken> {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "/login",
      { email: username, password: password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return { token: response.data.token };
  } catch (error) {

    return { token: "" };
  }
}