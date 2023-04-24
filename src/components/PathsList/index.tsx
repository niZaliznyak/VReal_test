import { useMemo, useState } from "react";
import { observer } from "mobx-react-lite";

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

function PathsList({ paths, onSelect, selectedId }: TProps) {
  const [search, setSearch] = useState("");
  const filteredPaths = useMemo(() => {
    const searchLowerCase = search.toLowerCase();
    return paths.filter(
      ({ title, fullDescription }) =>
        title.toLowerCase().includes(searchLowerCase) ||
        fullDescription.toLowerCase().includes(searchLowerCase)
    );
  }, [paths, paths.length, search]);

  return (
    <Wrap>
      <SearchInput value={search} onChange={setSearch} />
      <List sx={{ overflow: "auto", marginTop: "6px" }}>
        {filteredPaths.map((path) => (
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

export default observer(PathsList);
