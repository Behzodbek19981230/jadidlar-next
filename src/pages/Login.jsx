import React, { useState } from "react";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { FaEye, FaEyeSlash, FaKeycdn } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { InputMask } from "primereact/inputmask";

export default function Login() {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [state, setState] = useState({ phone: "", password: "" });
  const [value1, setValue1] = useState(null);
  const [error, setError] = useState("");
  const onSave = async (e) => {
    e.preventDefault();
    try {
      const response = await DataService.post(endpoints.login, {
        phone: "+998" + state.phone,
        password: state.password,
      });
      localStorage.setItem("JADIDLAR_TOKEN", response?.access);
      toast.success("Muaffaqiyatli bajarildi!");
      navigate("/");
      setError("");
    } catch (e) {
      setError(e.detail);
    }
  };
  return (
    <div className="login-container">
      <div className="border-div"></div>
      <div className="border-div1"></div>
      <div className="border-div2"></div>

      <div className="login-cont-item">
        <h1 className="login-h1">KIRISH</h1>
        <form className="login" onSubmit={onSave}>
          <div className="login-div">
            <label htmlFor="phone">Telfon raqam</label>

            <div className="input_password">
              <span>+998</span>

              {/* <input
                type="phone"
                name="phone"
                required
                onChange={(e) => setState({ ...state, phone: e.target.value })}
                maxLength={9}
              /> */}
              <InputMask
                style={{ color: "#000" }}
                value={value1}
                onChange={(e) => {
                  setValue1(e.value);
                  setState({ ...state, phone: e.target.value });
                }}
                mask="(99)-999-99-99"
              />
            </div>
          </div>

          <div className="login-div">
            <label htmlFor="password">Parol</label>

            <div className="input_password">
              {" "}
              <input
                type={eye ? "text" : "password"}
                name="password"
                maxLength={8}
                required
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              />
              <button type="button" onClick={() => setEye(!eye)}>
                {!eye ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <p className="error">{error}</p>

          <button className="lg-btn" type="submit">
            Kirish
          </button>
          <Link href="/register" className="hyper">
            Sizda hisob yo'q mi ? 👇
          </Link>
        </form>
        <br />
        <br />
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#0e2b65",
            position: "absolute",
            left: "30px",
            bottom: "26px",
          }}
        >
          Asosiy sahifaga qaytish 🏠
        </Link>
      </div>
    </div>
  );
}
