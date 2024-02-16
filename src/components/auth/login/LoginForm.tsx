import { useState } from "react";

const LoginForm = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "test.deep@gmail.com",
    password: "Test@1234",
  });
  const onLogin = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const dbUrl: string = `${process.env.REACT_APP_DATABASE_URL}/login` || "";
    const { email, password } = userDetails;
    setIsLoading(true);
    fetch(dbUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((userDetails) => {
      return {
        ...userDetails,
        email: event.target.value,
      };
    });
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((userDetails) => {
      return {
        ...userDetails,
        password: event.target.value,
      };
    });
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        width: "50%",
      }}
    >
      <input
        type="text"
        name="email"
        placeholder="Email Address"
        value={userDetails.email}
        onChange={onEmailChange}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={userDetails.password}
        onChange={onPasswordChange}
      />
      <button onClick={onLogin}>{isLoading ? "Loading..." : "Login"}</button>
    </form>
  );
};

export { LoginForm };
