import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Checkbox, {
  InputCheckbox,
  LabelCheckbox,
} from "../../components/checkbox/Checkbox";
import axios from './../../services/httpService'
import { signinAdmin } from "../../redux/features/user/signinSlice";
import { rest } from "../../services/api";

const Signin = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [form, setForm] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(signinAdmin(form, rememberMe));
    try {
      axios.post(rest.signin, form).then((res) => {
        console.log(res);
        if (rememberMe) {
          localStorage.setItem("user", res.data.token);
        }
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <div className="flex font-bold justify-center">
            <img className="h-20 w-20" src="images/avatar.svg" alt="aa" />
          </div>
          <p
            tabIndex={0}
            aria-label="Login to your account"
            className="  text-3xl text-center text-gray-700 mb-4"
          >
            Sign In
          </p>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="relative mt-8">
              <input
                type="text"
                id="username"
                name="username"
                className=" outline-none border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3"
                placeholder="Username"
                onChange={handleChangeForm}
                required
              />
            </div>
            <div className="relative mt-8">
              <div className="relative flex items-center justify-center">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className=" border rounded outline-none text-xs font-medium leading-none text-gray-800 py-3  w-full pl-3 "
                  placeholder="Password"
                  onChange={handleChangeForm}
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                  <AiFillEye />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex justify-center items-center">
                <Checkbox checked={rememberMe} setChecked={setRememberMe}>
                  <InputCheckbox style={{ display: "inline-block" }} />
                  <LabelCheckbox>
                    <span className="mx-2">Remember Me</span>
                  </LabelCheckbox>
                </Checkbox>
              </div>
              <div>
                <span>Froget Password?</span>
              </div>
            </div>
            <div className="mt-8">
              <button
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
