import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: colors.grey[50],
      paper: colors.common.white,
    },
  },
  typography: {
    button: {
      textTransform: "none",
      height: "2rem",
    },
  },
});

export default theme;
