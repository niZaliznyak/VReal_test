import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

type TProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({ value, onChange }: TProps) {
  return (
    <TextField
      value={value}
      onChange={e => onChange(e.target.value)}
      label="Search path"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        )
      }}
      variant="outlined"
      size="small"
      fullWidth
      sx={{ marginTop: "10px" }}
    />
  );
}
