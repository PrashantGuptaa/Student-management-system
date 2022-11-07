import { Typography, TextField, Checkbox, Button } from "@mui/material";
import { leftNavBarOptions } from "./../../config/constants";
import "./adminform.css";
import { useState, useEffect } from "react";
import HttpRequestHelper from "./../../config/HttpRequestHelper";
import { fetchCompleteStudentDataEndpoint, saveStudentData } from "./../../config/ApiEndpoints";
import { useSearchParams } from "react-router-dom";
import { mockCompleteStudentData } from "../../config/mockData";

const AdminForm = () => {
  const textFieldWidth = "30%";
  // personal-details state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [contact, setContact] = useState("");
  const [education, setEducation] = useState("");
  const [age, setAge] = useState("");

  const [course, setCourse] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [completed, setCompleted] = useState(false);
  const [admission, setAdmission] = useState("");
  const [duration, setDuration] = useState("");

  const [error, setError] = useState({});
  const [searchParams, ] = useSearchParams();
  const isUpdateOperation = searchParams.get('email') ? true : false;

  const {
    nameError,
    emailError,
    sexError,
    contactError,
    educationError,
    ageError,
    courseError,
    specializationError,
    currentYearError,
    admissionError,
    durationError,
  } = error;

  useEffect(() => {
    if (isUpdateOperation) {
        fetchCompleteStudentData()
    }
  }, []);

  const handleSubmit = async () => {
    const dataObj = {
      name,
      email,
      sex,
      contact,
      education,
      age,
      course,
      specialization,
      currentYear,
      completed,
      admission,
      duration,
    };
    try {
        if (isUpdateOperation) {
            const response = await HttpRequestHelper.patchRequest(
                saveStudentData,
                dataObj
              );
        } else {
            const response = await HttpRequestHelper.postRequest(
                saveStudentData,
                dataObj
              );
              console.log("f-3", response);
        }

    } catch (e) {
      console.error(e);
    }
  };

  const fetchCompleteStudentData = async () => {
    try {
        console.log("Fetched Student Data F-3")
        // const studentDataResult = await HttpRequestHelper.getRequest(fetchCompleteStudentDataEndpoint(searchParams.get('email')));
       const studentDataResult = mockCompleteStudentData;
        setName(studentDataResult.name);
        setEmail(studentDataResult.email);
        setContact(studentDataResult.contact);
        setSex(studentDataResult.sex);
        setEducation(studentDataResult.education);
        setAge(studentDataResult.age);
        setCourse(studentDataResult.course);
        setAdmission(studentDataResult.admission);
        setSpecialization(studentDataResult.specialization);
        setDuration(studentDataResult.duration);
        setCurrentYear(studentDataResult.age);
        setCompleted(studentDataResult.completed);
        // setAge(studentDataResult.age);


    } catch (e) {
        console.log("Error", e);
    }
  }

  return (
    <div>
      <section id="personal-details" className="arrange">
        <Typography className="divider" variant="h6">
          {leftNavBarOptions[0].label}
        </Typography>
        <div className="section-row">
          <TextField
            style={{ width: textFieldWidth }}
            error={nameError}
            id="name"
            label="Name"
            defaultValue={name}
            value={name}
            helperText={nameError}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            style={{ width: textFieldWidth }}
            error={emailError}
            id="email"
            label="Email"
            defaultValue={email}
            value={email}
            
            helperText={emailError}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ width: textFieldWidth }}
            error={contactError}
            id="contact"
            label="Contact"
            defaultValue={contact}
            value={contact}
            helperText={contactError}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div class="section-row">
          <TextField
            style={{ width: textFieldWidth }}
            error={ageError}
            type="number"
            id="age"
            label="Age"
            value={age}
            defaultValue={age}
            helperText={ageError}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            style={{ width: textFieldWidth }}
            error={sexError}
            id="sex"
            label="Sex"
            value={sex}
            defaultValue={sex}
            helperText={sexError}
            onChange={(e) => setSex(e.target.value)}
          />
          <TextField
            style={{ width: textFieldWidth }}
            error={educationError}
            id="education"
            label="Education"
            value={education}
            defaultValue={education}
            helperText={educationError}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>
      </section>
      <section id="professional-details" className="arrange">
        <Typography className="divider" variant="h6">
          {leftNavBarOptions[1].label}
        </Typography>
        <div className="section-row">
          <TextField
            style={{ width: textFieldWidth }}
            error={courseError}
            id="course"
            label="Course"
            value={course}
            defaultValue={course}
            helperText={courseError}
            onChange={(e) => setCourse(e.target.value)}
          />
          <TextField
            style={{ width: textFieldWidth }}
            error={specializationError}
            id="specialization"
            label="Specialization"
            defaultValue={specialization}
            value={specialization}
            helperText={specializationError}
            onChange={(e) => setSpecialization(e.target.value)}
          />
          <TextField
            style={{ width: textFieldWidth }}
            error={admissionError}
            id="admission"
            label="Admission"
            defaultValue={admission}
            Value={admission}
            helperText={admissionError}
            onChange={(e) => setAdmission(e.target.value)}
          />
        </div>
        <div className="section-row start">
          <TextField
            style={{ width: textFieldWidth }}
            error={durationError}
            // type="duration"
            id="duration"
            label="Duration"
            defaultValue={duration}
            value={duration}
            helperText={durationError}
            onChange={(e) => setDuration(e.target.value)}
          />
          <TextField
            style={{ width: textFieldWidth }}
            error={currentYear}
            type="number"
            id="currentYear"
            label="Current Year"
            defaultValue={currentYear}
            value={currentYear}
            helperText={currentYearError}
            onChange={(e) => setCurrentYear(e.target.value)}
          />
        </div>
        <div>
          <Checkbox
            id="completed"
            defaultChecked={completed}
            checked={completed}
            onClick={(e) => setCompleted(e.target.checked)}
          />
          <label htmlFor="completed">Completed</label>
        </div>
      </section>

      <section id="fee-details"></section>
      <section id="attendance-details"></section>

      <footer className="btns arrange">
        <Button variant="outlined">Back</Button>
        <Button variant="contained" onClick={handleSubmit}>{isUpdateOperation ? "Update" : "Save"}</Button>
      </footer>
    </div>
  );
};

export default AdminForm;
