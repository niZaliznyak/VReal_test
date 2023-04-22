import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";

import { IconWrap, ModalContent, Section, TitleBar } from "./styled";
import AddPathForm from "./components/AddPathForm";

type TProps = {
  open: boolean;
  onClose: () => void;
};

export default function AddPathModal({ onClose, open }: TProps) {
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
          <AddPathForm />
        </Section>
        <Divider orientation="vertical" flexItem />
        <Section>x </Section>
      </ModalContent>
    </Dialog>
  );
}
