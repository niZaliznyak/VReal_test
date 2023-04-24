import { useState } from "react";
import { TLocation, TPath } from "../../../types";
import pathsStore from "../../../store";

type TAddPathForm = Pick<
  TPath,
  "title" | "shortDescription" | "fullDescription"
>;

type TAddPathErrors = Partial<TAddPathForm>;

type TCourse = Pick<TPath, "length" | "markers">;

export default function useCreatePathForm() {
  const { addPath } = pathsStore;

  const [course, setCourse] = useState<TCourse>();
  const [formValues, setFormValues] = useState<TAddPathForm>({
    title: "",
    shortDescription: "",
    fullDescription: ""
  });
  const [formErrors, setFormErrors] = useState<TAddPathErrors>({});

  const onFormInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });

    const isShortDescription = name === "shortDescription";
    const isOverLimit = isShortDescription && value.length > 160;
    setFormErrors((prevState) => ({
      ...prevState,
      [name]: isOverLimit ? `Limit ${value.length} of 160 (reached)` : ""
    }));
  };

  const validateForm = () => {
    let errors: TAddPathErrors = {};

    if (!formValues.title) {
      errors.title = "Please enter the title";
    }

    if (!formValues.shortDescription) {
      errors.shortDescription = "Please enter the short description";
    }

    if (formValues.shortDescription.length > 160) {
      errors.shortDescription = "Please enter the shorter description";
    }

    if (!formValues.fullDescription) {
      errors.fullDescription = "Please enter the description";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const onSubmitForm = (
    e: React.FormEvent<HTMLFormElement>,
    callback: () => void
  ) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid && course?.markers) {
      addPath({
        id: new Date().valueOf(),
        ...formValues,
        ...course
      });
      setFormValues({
        title: "",
        shortDescription: "",
        fullDescription: ""
      });
      setCourse({ length: "0 m", markers: [] as TLocation[] });
      callback();
    }
  };

  const onCourseChange = (markers: TLocation[], length: string) => {
    setCourse({ length, markers });
  };

  return {
    onFormInputChange,
    onCourseChange,
    onSubmitForm,
    validateForm,
    formErrors,
    formValues,
    course
  };
}
