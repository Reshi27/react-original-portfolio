import React, { FormEvent, Fragment, useState } from "react";
import {
  AuthBackground,
  AuthButton,
  AuthContainer,
  AuthTitle,
  Form,
  NameGroup,
} from "./AuthForm.style";
import { Card } from "../common/Card/Card";
import { InputBase, Modal, NativeSelect, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import axios from "axios";
import { useDisclosure } from "@mantine/hooks";

const RegisterForm: React.FC = () => {
  const selectData = [
    {
      value: "What is your cat name?",
      label: "What is your cat name?",
    },
    {
      value: "Where did you confess to your crush?",
      label: "Where did you confess to your crush?",
    },
  ];
  const [opened, { open, close }] = useDisclosure(false);

  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    dateOfBirth: null,
    email: "",
    password: "",
    confirmPassword: "",
    restoreQuestion: "",
    restoreAnswer: "",
    membershipStart: null,
    membershipEnd: null,
  });

  const handleFormChange = (value: any, name: any) => {
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateFormChange = (date: Date | null, name: any) => {
    if (!date) {
      setRegisterForm((prev) => ({ ...prev, [name]: null }));
      return;
    }

    setRegisterForm((prev) => ({ ...prev, [name]: date }));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newFormData = {
      firstName: registerForm.firstName,
      lastName: registerForm.lastName,
      age: registerForm.age,
      dateOfBirth: new Date(),
      email: registerForm.email,
      password: registerForm.password,
      confirmPassword: registerForm.confirmPassword,
      restoreQuestion: registerForm.restoreQuestion,
      restoreAnswer: registerForm.restoreAnswer,
      membershipStart: registerForm.membershipStart,
      membershipEnd: registerForm.membershipEnd,
      transfetEvidence: "Hai hai",
    };

    axios
      .post("http://localhost:8080/api/user/create", newFormData)
      .then((response) => {
        <Modal opened={opened} onClose={close}>
          Successfully Register
        </Modal>;
      });

    console.log(newFormData);
  };

  return (
    <Fragment>
      <AuthBackground>
        <AuthContainer>
          <Card>
            <AuthTitle>Register</AuthTitle>

            <Form onSubmit={handleFormSubmit}>
              <NameGroup>
                <InputBase
                  mb={"md"}
                  mr={"md"}
                  label="First Name"
                  name="firstName"
                  type="text"
                  onChange={({ target }) =>
                    handleFormChange(target.value, "firstName")
                  }
                  value={registerForm.firstName}
                  required
                ></InputBase>
                <InputBase
                  mb={"md"}
                  label="Last Name"
                  name="lastName"
                  type="text"
                  onChange={({ target }) =>
                    handleFormChange(target.value, "lastName")
                  }
                  value={registerForm.lastName}
                  required
                ></InputBase>
              </NameGroup>
              <InputBase
                mb={"md"}
                label="Age"
                name="age"
                type="number"
                onChange={({ target }) => handleFormChange(target.value, "age")}
                value={registerForm.age}
                required
              ></InputBase>
              <DateInput
                mb={"md"}
                valueFormat="DD MMM YYYY"
                value={registerForm.dateOfBirth}
                onChange={(date) => handleDateFormChange(date, "dateOfBirth")}
                label="Date of Birth"
              ></DateInput>
              <InputBase
                label="Email"
                name="email"
                type="email"
                mb={"md"}
                onChange={({ target }) =>
                  handleFormChange(target.value, "email")
                }
                value={registerForm.email}
                required
              ></InputBase>
              <InputBase
                mb={"md"}
                label="Password"
                name="password"
                type="password"
                onChange={({ target }) =>
                  handleFormChange(target.value, "password")
                }
                value={registerForm.password}
                required
              ></InputBase>
              <InputBase
                mb={"md"}
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                onChange={({ target }) =>
                  handleFormChange(target.value, "confirmPassword")
                }
                value={registerForm.confirmPassword}
                required
              ></InputBase>
              <NativeSelect
                data={selectData}
                placeholder="Pick One"
                label="Restore Password Question"
                name="restoreQuestion"
                mb={"md"}
                value={registerForm.restoreQuestion}
                onChange={({ target }) =>
                  handleFormChange(target.value, "restoreQuestion")
                }
                required
              ></NativeSelect>
              <InputBase
                mb={"md"}
                label="Your Answer"
                name="restoreAnswer"
                type="text"
                onChange={({ target }) =>
                  handleFormChange(target.value, "restoreAnswer")
                }
                value={registerForm.restoreAnswer}
                required
              ></InputBase>

              <NameGroup>
                <DateInput
                  valueFormat="DD MMM YYYY"
                  mb={"md"}
                  mr={"md"}
                  value={registerForm.membershipStart}
                  onChange={(date) =>
                    handleDateFormChange(date, "membershipStart")
                  }
                  label="Membership Start"
                ></DateInput>
                <DateInput
                  valueFormat="DD MMM YYYY"
                  mb={"md"}
                  value={registerForm.membershipEnd}
                  onChange={(date) => {
                    handleDateFormChange(date, "membershipEnd");
                  }}
                  label="Membership End"
                ></DateInput>
              </NameGroup>

              <AuthButton bg="#0F0F0F" type="submit" onClick={open}>
                Register
              </AuthButton>
            </Form>
          </Card>
        </AuthContainer>
      </AuthBackground>
    </Fragment>
  );
};

export default RegisterForm;
