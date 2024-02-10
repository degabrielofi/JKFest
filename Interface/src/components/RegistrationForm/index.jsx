import React, { useState, useRef, useEffect } from "react";
import { Form } from "./style";
import ItemRegistration from "components/ItemRegistration";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const RegistrationForm = () => {
  const MySwal = withReactContent(Swal);

  const [digits, setDigits] = useState(["", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const checkPassword = () => {
    const password = digits.join("");

    if (password === "0216") {
      setIsPasswordCorrect(true);
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "A senha está incorreta!",
        footer: "Preencha os campos corretamente e tente novamente.",
        confirmButtonColor: "#d33",
      });
      setDigits(["", "", "", ""]);
      // Focar no primeiro campo
      refs[0].current.focus();
    }
  };

  const handleChange = (index, value) => {
    const newDigits = [...digits];
    newDigits[index] = value;

    setDigits(newDigits);

    if (index < 3 && value !== "") {
      refs[index + 1].current.focus();
    }
  };

  useEffect(() => {
    const isAllDigitsFilled = digits.every((digit) => digit !== "");
    if (isAllDigitsFilled) {
      checkPassword();
    }
  }, [digits]);

  return (
    <>
      {!isPasswordCorrect ? (
        <Form style={{ display: isPasswordCorrect ? "none" : "flex" }}>
          <form className="form" id="passwordForm">
            <div className="content">
              <p align="center">Digite a senha:</p>
              <div className="inp">
                {digits.map((digit, index) => (
                  <input
                    key={index}
                    placeholder=""
                    type="number"
                    className="input"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    ref={refs[index]}
                  />
                ))}
              </div>
              <button onClick={checkPassword}>Verificar</button>
              <svg
                className="svg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#d8096b"
                  d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z"
                  transform="translate(100 100)"
                  className="path"
                ></path>
              </svg>
            </div>
          </form>
        </Form>
      ) : (
        <ItemRegistration />
      )}
    </>
  );
};

export default RegistrationForm;
