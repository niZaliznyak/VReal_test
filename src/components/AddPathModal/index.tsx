import { useJsApiLoader } from "@react-google-maps/api";

import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MapIcon from "@mui/icons-material/Map";
import DoneIcon from "@mui/icons-material/Done";

import Map from "../Map";
import { IconWrap, ModalContent, Section, TitleBar } from "./styled";
import useCreatePathForm from "./hooks/useCreatePathForm";

type TProps = {
  open: boolean;
  onClose: () => void;
};

export default function AddPathModal({ onClose, open }: TProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google_maps_script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY as string
  });
  const {
    onFormInputChange,
    onCourseChange,
    onSubmitForm,
    validateForm,
    formErrors,
    formValues,
    course
  } = useCreatePathForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubmitForm(e, onClose)
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
              onChange={onFormInputChange}
              fullWidth
              error={!!formErrors.title}
              helperText={formErrors.title || " "} //space string to avoid jumping
            />
            <TextField
              name="shortDescription"
              label="Short description"
              value={formValues.shortDescription}
              onChange={onFormInputChange}
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
              onChange={onFormInputChange}
              fullWidth
              multiline
              rows={4}
              error={!!formErrors.fullDescription}
              helperText={formErrors.fullDescription || " "}
            />
            <Box
              sx={{ height: "120px", display: "flex", alignItems: "center" }}
            >
              <MapIcon sx={{ fontSize: 42, opacity: 0.25 }} />
              Length {course?.length}
            </Box>
            <Button onClick={validateForm} type="submit" variant="contained">
              <DoneIcon />
              Add path
            </Button>
          </Box>
        </Section>
        <Divider orientation="vertical" flexItem />
        <Section>
          {isLoaded ? <Map onCourseChage={onCourseChange} /> : "Loading..."}
        </Section>
      </ModalContent>
    </Dialog>
  );
}
