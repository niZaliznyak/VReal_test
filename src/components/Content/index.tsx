import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import PathsList from "../PathsList";
import PathView from "../PathView";

export default function Content() {
  return (
    <Container sx={{ height: "calc(100vh - 84px)" }}>
      <Paper
        sx={{
          height: "100%",
          padding: 1,
          marginTop: 2,
          display: "flex"
        }}
      >
        <PathsList />
        <PathView />
      </Paper>
    </Container>
  );
}
