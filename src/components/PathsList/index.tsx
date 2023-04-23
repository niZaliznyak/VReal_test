import List from "@mui/material/List";

import SearchInput from "../SearchInput";
import PathsListItem from "./components/PathsListItem";
import { Wrap } from "./styled";

import { TPath } from "../../types";

type TProps = {
  paths: TPath[];
  selectedId?: number;
  onSelect: (path: TPath | null) => void;
};

export default function PathsList({ paths, onSelect, selectedId }: TProps) {
  return (
    <Wrap>
      <SearchInput />
      <List sx={{ overflow: "auto", marginTop: "6px" }}>
        {paths.map((path) => (
          <PathsListItem
            key={path.id}
            path={path}
            selected={path.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </List>
    </Wrap>
  );
}
