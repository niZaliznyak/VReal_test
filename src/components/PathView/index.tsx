import { useState } from "react";
import { observer } from "mobx-react-lite";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

import AlertDialog from "./components/AlertDialog";
import { Actions, Empty, Title } from "./styled";
import { TPath } from "../../types";

import pathsStore from "../../store";

type TProps = {
  path: TPath | null;
  onRemove: () => void;
};

function PathView({ path, onRemove }: TProps) {
  const { removePath, toggleFavorite } = pathsStore;
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  if (!path) {
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

  const handleRemove = () => {
    setOpenDeleteDialog(false);
    removePath(path.id);
    onRemove();
  };

  return (
    <Box sx={{ width: "100%", marginLeft: 0.5, padding: "0 1rem" }}>
      <Title>
        <Typography variant="h4">{path.title}</Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {path.length}
        </Typography>
      </Title>
      <Typography gutterBottom>{path.fullDescription}</Typography>
      <Actions>
        <Button onClick={() => toggleFavorite(path.id)} variant="text">
          {path.favorite ? "Remove from favorites" : "Add to favorites"}
        </Button>
        <Button onClick={() => setOpenDeleteDialog(true)} variant="text" color="error">
          Remove
        </Button>
      </Actions>
      <AlertDialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onAgree={handleRemove}
      />
    </Box>
  );
}

export default observer(PathView);
