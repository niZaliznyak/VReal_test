import { observer } from "mobx-react-lite";

import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";

import { ItemWrapper, Info, Title } from "./styled";

import { TPath } from "../../../../types";

type TProps = {
  path: TPath;
  selected?: boolean;
  onSelect: (path: TPath | null) => void;
};

function PathsListItem({ path, selected, onSelect }: TProps) {
  const { name, shortDescription, length, favorite } = path;
  const handleSelect = () => {
    if (selected) {
      onSelect(null);
    } else {
      onSelect(path);
    }
  };

  return (
    <ItemWrapper onClick={handleSelect} selected={selected}>
      <ZoomOutMapIcon fontSize="large" />
      <Info>
        <Title>
          {favorite && <StarIcon />}
          <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            {name}
          </Typography>
        </Title>
        <Typography sx={{ fontSize: "0.8rem", maxHeight: "36px" }}>
          {shortDescription}
        </Typography>
      </Info>
      <Typography sx={{ fontWeight: "600", whiteSpace: "nowrap" }}>
        {length}
      </Typography>
      <ChevronRightIcon />
    </ItemWrapper>
  );
}

export default observer(PathsListItem);