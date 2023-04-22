import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";

import { ItemWrapper, Info, Title } from "./styled";

import { TPath } from "../../../../types";

type TProps = TPath & {
  selected?: boolean;
};

export default function PathsListItem({
  name,
  description,
  length,
  favorite,
  selected
}: TProps) {
  return (
    <ItemWrapper selected={selected}>
      <ZoomOutMapIcon fontSize="large" />
      <Info>
        <Title>
          {favorite && <StarIcon />}
          <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            {name}
          </Typography>
        </Title>
        <Typography sx={{ fontSize: "0.8rem", maxHeight: "36px" }}>
          {description}
        </Typography>
      </Info>
      <Typography sx={{ fontWeight: "600" }}>{length}</Typography>
      <ChevronRightIcon />
    </ItemWrapper>
  );
}
