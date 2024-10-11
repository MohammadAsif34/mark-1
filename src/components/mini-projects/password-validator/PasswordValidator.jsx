import React, { useState } from "react";
import validator from "validator";
import "./style.css";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleValidate = (e) => {
    e.preventDefault();
    alert("Perfect :)" + "Password : " + password);
    setPassword("");
  };
  const validate = (val) => {
    if (
      validator.isStrongPassword(val, {
        minLength: 8,
        minLowcase: 1,
        minUppercase: 1,
        minNumber: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("true");
    } else {
      setErrorMessage("false");
    }
  };
  return (
    <div className=" w-full h-full flex justify-center items-center p-2">
      <form className="loginBox mt-16 rounded-lg border border-black p-10">
        <h1 className="pb-12 text-center text-5xl font-bold">
          Password Validator
        </h1>
        <label className="w-full p-1 pl-3 block border border-black rounded-lg text-sm">
          <span className="password block">Password:</span>
          <input
            type="text"
            id="PASSWORD"
            value={password}
            className="w-full h-8  p-0 outline-none text-xl"
            onChange={(e) => {
              setPassword(e.target.value);
              validate(e.target.value);
            }}
          />
        </label>
        <span className="p-2 block">
          {password !== "" ? (
            errorMessage == "true" ? (
              <span>
                Strong Password{" "}
                <i className="bi bi-check-circle-fill text-green-500"></i>
              </span>
            ) : (
              <span>
                Week Password{" "}
                <i className="bi bi-x-circle-fill text-red-500"></i>
              </span>
            )
          ) : (
            <span> </span>
          )}
        </span>
        <button
          className="w-full py-2  my-8 text-white bg-gray-800 rounded-lg "
          onClick={handleValidate}
        >
          Enter
        </button>
        <br />
        <hr />
        <br />
      </form>
    </div>
  );
};

export default PasswordValidator;
