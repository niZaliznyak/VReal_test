import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

type TProps = {
  open: boolean;
  onClose: () => void;
  onAgree: () => void;
};

export default function AlertDialog({ open, onClose, onAgree }: TProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete this path?</DialogTitle>
      <DialogActions>
        <Button onClick={onAgree}>Yes</Button>
        <Button onClick={onClose} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
