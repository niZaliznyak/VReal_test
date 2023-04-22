import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { blue } from "@mui/material/colors";

import { Wrapper, Content } from "./styled";

type TProps = {
  onAddPathClick: () => void;
};

export default function Header({ onAddPathClick }: TProps) {
  return (
    <Wrapper>
      <Content>
        <Box sx={{ display: "flex" }}>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <ZoomOutMapIcon
              sx={{
                color: "white",
                fontSize: 32,
                transform: "scaleY(0.7) rotate(0.46turn)"
              }}
            />
          </Avatar>
          <Typography variant="h4" sx={{ marginLeft: 1 }}>
            Saunter
          </Typography>
        </Box>
        <Button variant="contained" onClick={onAddPathClick}>
          Add path
        </Button>
      </Content>
    </Wrapper>
  );
}
