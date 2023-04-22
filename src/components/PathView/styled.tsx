import { styled } from "@mui/material";

export const Empty = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%"
});

export const Title = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Actions = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  "& .MuiButtonBase-root": {
    textDecoration: "underline"
  }
});
