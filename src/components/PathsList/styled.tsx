import { styled } from "@mui/material";
import Paper from "@mui/material/Paper";

export const Wrap = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  minWidth: 370,
  maxWidth: 400,
  padding: "8px",
  border: "1px solid grey",
  overflow: "hidden"
});
