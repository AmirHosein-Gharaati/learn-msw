import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { LoginRequest, LoginResponse } from "./types/user.type";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  function sendLoginRequest() {
    const loginRequest: LoginRequest = {
      username: username,
      password: password,
    };

    axios
      .post<LoginRequest, AxiosResponse<LoginResponse>>("/login", loginRequest)
      .then((res) => {
        setErrorResponse("");

        const { data } = res;

        setAccessToken(data.access);
        setRefreshToken(data.refresh);
      })
      .catch((err: AxiosError) => {
        const errorMessage = err.response?.statusText as string;

        setErrorResponse(errorMessage);

        setAccessToken("");
        setRefreshToken("");
      });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={() => sendLoginRequest()}>
        Send Request
      </button>
      <p style={{ color: "red" }}>{errorResponse}</p>
      <p>Access token: {accessToken}</p>
      <p>Refresh token: {refreshToken}</p>
    </div>
  );
}

export default App;
