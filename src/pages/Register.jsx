import React, { useState } from "react";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { FaEye, FaEyeSlash, FaKeycdn } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { InputMask } from "primereact/inputmask";

export default function Register() {
  const [value1, setValue1] = useState(null);

  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [state, setState] = useState({
    phone: "",
    password: "",
    full_name: "",
    email: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const onSave = async (e) => {
    e.preventDefault();
    try {
      const response = await DataService.post(endpoints.register, {
        phone: "+998" + state.phone,
        full_name: state.full_name,
        email: state.email,
        password: state.password,
        password2: state.password2,
      });
      localStorage.setItem("JADIDLAR_TOKEN", response?.access);
      console.log(response);

      toast.success("Muaffaqiyatli bajarildi!");
      navigate("/");
      setError("");
    } catch (e) {
      setError(e.detail);
      toast.error("malumotingizni to'liq kritmadingiz !");
    }
  };
  return (
    <div className="login-container">
      <div className="border-div"></div>
      <div className="border-div1"></div>
      <div className="border-div2"></div>

      {/* <div className="login-cont-item">
        <h1 className="login-h1">Ro'yxatdan o'tish</h1>
        <form className="register" onSubmit={onSave}>
          <div className="login-div">
            <label htmlFor="phone">Telfon raqam</label>
            <div className="input_password">
              <span>+998</span>
              <input
                type="text"
                name="phone"
                required
                onChange={(e) => setState({ ...state, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="login-div">
            <label htmlFor="phone">FIO</label>
            <div className="input_password">
              <span></span>
              <input
                type="text"
                name="full_name"
                required
                onChange={(e) =>
                  setState({ ...state, full_name: e.target.value })
                }
              />
            </div>
          </div>
          <div className="login-div">
            <label htmlFor="phone">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <div className="login-div">
            <label htmlFor="password">Parol</label>

            <div className="input_password">
              {" "}
              <input
                type={eye ? "text" : "password"}
                name="password"
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
          <div className="login-div">
            <label htmlFor="password">Parolni tasdiqlash</label>

            <div className="input_password">
              <input
                type={eye ? "text" : "password"}
                name="password2"
                required
                onChange={(e) =>
                  setState({ ...state, password2: e.target.value })
                }
              />
              <button type="button" onClick={() => setEye(!eye)}>
                {!eye ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <p className="error">{error}</p>

          <button className="lg-btn" type="submit">
            Ro'yxatdan o'tish
          </button>
          <Link href="/login" className="hyper">
            Do you have an accaount?{" "}
          </Link>
        </form>
      </div> */}

      <section className="register_container">
        <header>Ro'yxatdan o'tish</header>
        <form className="form" action="#" onSubmit={onSave}>
          <div className="input-box">
            <label>F.I.O</label>
            <input
              className="form_input"
              type="text"
              name="full_name"
              required
              onChange={(e) =>
                setState({ ...state, full_name: e.target.value })
              }
            />
          </div>
          <div className="column">
            <div className="input-box phone_number">
              <label>Telefon nomer</label>
              <div className="num_div">
                <span>+998</span>
                {/* <input
                  className="form_input"
                  name="phone"
                  required
                  onChange={(e) =>
                    setState({ ...state, phone: e.target.value })
                  }
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
            <div className="input-box">
              <label>Email</label>
              <input
                className="form_input"
                type="email"
                name="email"
                required
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            </div>
          </div>
          <div className="column">
            <div className="input-box">
              <label>Parol</label>
              <div className="pass_div">
                <input
                  style={{ color: "#000" }}
                  type={eye ? "text" : "password"}
                  name="password"
                  maxLength={8}
                  required
                  onChange={(e) =>
                    setState({ ...state, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setEye(!eye)}
                  className="eye_button"
                >
                  {!eye ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="input-box">
              <label>Parolni tasdiqlash</label>
              <div className="pass_div">
                <input
                  type={eye ? "text" : "password"}
                  name="password2"
                  style={{ color: "#000" }}
                  required
                  maxLength={8}
                  onChange={(e) =>
                    setState({ ...state, password2: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setEye(!eye)}
                  className="eye_button"
                >
                  {!eye ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
          </div>
          <p className="error">{error}</p>

          <button className="rg_btn" type="submit">
            Ro'yxatdan o'tish
          </button>
          <Link href="/login" className="hyp">
            Hisobingiz bormi ? 👇{" "}
          </Link>
        </form>
        <br />
        <br />
        <Link href="/" style={{ textDecoration: "none", color: "#0e2b65" }}>
          Asosiy sahifaga qaytish 🏠
        </Link>
      </section>
    </div>
  );
}
