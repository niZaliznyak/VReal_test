import List from "@mui/material/List";
import Paper from "@mui/material/Paper";

import SearchInput from "../SearchInput";
import PathsListItem from "./components/PathsListItem";

export default function PathsList() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: 'column',
        maxWidth: 400,
        padding: 1,
        border: "1px solid grey",
        overflow: "hidden"
      }}
    >
      <SearchInput />
      <List sx={{ overflow: "auto", marginTop: "6px" }}>
        <PathsListItem
          selected
          name="Title"
          description="The palette enables you to modify the color of the components to suit your brand."
          length="1600m"
          favorite
        />
        <PathsListItem
          name="Title"
          description="The palette enables you to modify the color of the components to suit your brand."
          length="1600m"
        />
        <PathsListItem
          name="Title"
          description="The palette enables 
          you to modify the color of the components to suit your brand."
          length="1600m"
          favorite
        />
      </List>
    </Paper>
  );
}
