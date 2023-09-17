import { useState } from "react";

export const useForm = ({ initialForm, onSubmit }) => {
  const [form, setForm] = useState(initialForm ?? {});

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = () => {
    onSubmit(form);
  };

  let isEmptyField = Object.values(form).some((field) =>
    typeof field === "string" ? !field?.trim() : !field
  );

  console.log("isEmptyField", isEmptyField);

  return { form, handleFormChange, handleFormSubmit, isEmptyField };
};
