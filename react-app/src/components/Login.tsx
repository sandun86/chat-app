import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/user";

import { LoginFormState, LoginFormProps } from "../types/user";

const LoginForm: React.FC<LoginFormProps> = ({ setToken }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please fill out both username and password fields.");
      return;
    }

    console.log(formData);
    const result = await login(formData);
    console.log("result.token", result.token);
    if (result.token) {
      const authToken = result.token;
      
      console.log(authToken);
      // Store the token in a state
      setToken(authToken);
      setError(null);
      localStorage.setItem("token", authToken);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password. Please try again.");
      console.error("Authentication Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">User Login</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>

                {error && <p className="text-danger mt-2">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
