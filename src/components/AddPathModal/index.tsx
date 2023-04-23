import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { IconWrap, ModalContent, Section, TitleBar } from "./styled";

import pathsStore from "../../store";

type TAddPathForm = {
  title: string;
  shortDescription: string;
  fullDescription: string;
};

type TAddPathErrors = Partial<TAddPathForm>;

type TProps = {
  open: boolean;
  onClose: () => void;
};

export default function AddPathModal({ onClose, open }: TProps) {
  const { addPath } = pathsStore;
  const [formValues, setFormValues] = useState<TAddPathForm>({
    title: "",
    shortDescription: "",
    fullDescription: ""
  });
  const [formErrors, setFormErrors] = useState<TAddPathErrors>({});

  const handleInputChange = (
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      addPath();
    }
    addPath();

  };

  return (
    <Dialog fullWidth maxWidth="md" onClose={onClose} open={open}>
      <TitleBar>
        Add new path
        <IconWrap onClick={onClose}>
          <CloseIcon />
        </IconWrap>
      </TitleBar>
      <Divider />
      <ModalContent>
        <Section>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1
            }}
          >
            <TextField
              name="title"
              label="Title"
              value={formValues.title}
              onChange={handleInputChange}
              fullWidth
              error={!!formErrors.title}
              helperText={formErrors.title || " "} //space string to avoid jumping
            />
            <TextField
              name="shortDescription"
              label="Short description"
              value={formValues.shortDescription}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={2}
              error={!!formErrors.shortDescription}
              helperText={
                formErrors.shortDescription
                  ? formErrors.shortDescription
                  : `Limit ${formValues.shortDescription.length} of 160`
              }
            />
            <TextField
              name="fullDescription"
              label="Full description"
              value={formValues.fullDescription}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={4}
              error={!!formErrors.fullDescription}
              helperText={formErrors.fullDescription || " "}
            />
            <Box sx={{ height: "120px" }}>Length 1.300 km</Box>
            <Button onClick={validateForm} type="submit" variant="contained">
              Add path
            </Button>
          </Box>
        </Section>
        <Divider orientation="vertical" flexItem />
        <Section>x </Section>
      </ModalContent>
    </Dialog>
  );
}