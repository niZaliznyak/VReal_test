import { useState } from "react";
import { observer } from "mobx-react-lite";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import PathsList from "../PathsList";
import PathView from "../PathView";
import pathsStore from "../../store";
import { TPath } from "../../types";

function Content() {
  const [selected, setSelelected] = useState<TPath | null>(null);
  const paths = pathsStore.getPaths;

  return (
    <Container sx={{ height: "100%" }}>
      <Paper
        sx={{
          height: "100%",
          minHeight: "620px",
          padding: 1,
          marginTop: 2,
          display: "flex"
        }}
      >
        <PathsList
          selectedId={selected?.id}
          paths={paths}
          onSelect={setSelelected}
        />
        <PathView path={selected} onRemove={() => setSelelected(null)} />
      </Paper>
    </Container>
  );
}

export default observer(Content);
