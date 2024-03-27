import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    username: "Ali Abdullah",
    email: "aliabdullahshah@gmail.com",
    occupation: "student",
    gender: "male",
    languages: ["css"],
  });

  const onChangeHandler = (e) => {
    if (e.target.name === "languages") {
      let copy = { ...formData };
      if (e.target.checked) {
        copy.languages = [...copy.languages, e.target.value];
      } else {
        copy.languages = copy.languages.filter((e) => e !== e.target.value);
      }
      setFormData(copy);
    } else {
      setFormData((prevFormData) => ({
        ...formData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <div className="mx-5 my-6 py-3 px-3 bg-gray-300 rounded-lg ">
      <form action="">
        <div className="form_group">
          <label htmlFor="username">username</label>
          <input
            className="mx-9 rounded-lg bg-gray-100"
            type="text"
            name="username"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input
            className="mx-[67px] my-3 rounded-lg bg-gray-100"
            type="email"
            name="email"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form_group">
          <label htmlFor="form_select">Occupation</label>
          <select
            name="Occupation"
            id=""
            className="rounded-lg mx-3"
            onChange={onChangeHandler}
          >
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label mx-9 my-6">
            Gender
          </label>
          <div>
            <div>
              <input
                className=" mx-3"
                onChange={onChangeHandler}
                type="radio"
                name="gender"
                value="male"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                className=" mx-3"
                onChange={onChangeHandler}
                type="radio"
                name="gender"
                value="female"
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                className=" mx-3"
                onChange={onChangeHandler}
                type="radio"
                name="gender"
                value="other"
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label mx-9 my-6">
            Languages
          </label>
          <div>
            <div>
              <input
                className=" mx-3"
                type="checkbox"
                name="languages"
                onChange={onChangeHandler}
                value="html"
                checked=""
              />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input
                className=" mx-3"
                type="checkbox"
                name="languages"
                onChange={onChangeHandler}
                value="css"
              />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input
                className=" mx-3"
                type="checkbox"
                name="languages"
                onChange={onChangeHandler}
                value="javascript"
              />
              <label htmlFor="javascript">Javascript</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button
            
            className="btn bg-blue-600 mx-9"
            type="submit"
            onClick={(e) => {
              e.preventDefault(e);
              setIsSubmit(true);
              setTimeout(() => {
                setIsSubmit(false);
              }, 3000);
            }}
          >
            Submit
          </button>
        </div>
      </form>
      {isSubmit ? (
        <>
          <h1> {formData.username} </h1>
          <h1> {formData.email} </h1>
          <h1>{formData.occupation} </h1>
          <h1> {formData.gender} </h1>
          <h1> {formData.languages} </h1>
        </>
      ) : null}
    </div>
  );
};

export default Form;
