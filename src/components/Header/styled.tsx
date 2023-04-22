import { styled } from "@mui/material";
import { Container } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderBottom: "1px solid gray"
}));

export const Content = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem 1rem"
}));
