import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput() {
  return (
    <TextField
      label="Search path"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      size="small"
      fullWidth
      sx={{ marginTop: "10px" }}
    />
  );
}
