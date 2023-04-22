import { styled } from "@mui/material";

interface ItemWrapperProps {
  selected?: boolean;
}

export const ItemWrapper = styled("div")<ItemWrapperProps>(
  ({ theme, selected }) => ({
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    height: "80px",
    padding: "0.5rem",
    marginBottom: "0.5rem",
    "&:last-child": { marginBottom: 0 },
    borderRadius: "6px",
    color: selected ? theme.palette.background.paper : "black",

    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: selected
      ? theme.palette.primary.light
      : theme.palette.grey[100],
    "&:hover": {
      border: `1px solid ${theme.palette.grey[700]}`,
      backgroundColor: selected
        ? theme.palette.primary.dark
        : theme.palette.grey[200],
    },

    "& > svg": {
      color: selected
        ? theme.palette.background.paper
        : theme.palette.primary.main,
    },

    cursor: "pointer",
  })
);

export const Info = styled("div")({
  marginLeft: "4px",
  marginRight: "2px",
  alignSelf: "flex-start",
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const Title = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& svg": {
    color: theme.palette.warning.light,
    fontSize: "22px",
  },
}));
