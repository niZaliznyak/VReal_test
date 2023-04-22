import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Actions, Empty, Title } from "./styled";
import { TPath } from "../../types";

type TProps = {
  pathData?: TPath;
};

export default function PathView({ pathData }: TProps) {
  if (true) {
    return (
      <Box sx={{ width: "100%", marginLeft: 0.5, padding: "0 1rem" }}>
        <Title>
          <Typography variant="h4">
            Title
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            1500m
          </Typography>
        </Title>
        <Typography gutterBottom>
          Icon buttons are commonly found in app bars and toolbars. Icons are
          also appropriate for toggle buttons that allow a single choice to be
          selected or deselected, such as adding or removing a star to an item.
        </Typography>
        <Actions>
          <Button variant="text">Add to favorites</Button>
          <Button variant="text" color="error">
            Remove
          </Button>
        </Actions>
      </Box>
    );
  }

  return (
    <Empty>
      <ZoomOutMapIcon
        sx={{
          fontSize: 250,
          opacity: 0.15
        }}
      />
      <Typography sx={{ fontWeight: "bold", opacity: 0.25 }}>
        Select any path
      </Typography>
    </Empty>
  );
}
