 //library
import { InputAdornment } from "@mui/material";
// icons
import SearchIcon from "@mui/icons-material/Search";
// common components
import { TextField } from "src/components/common/CommonComponents";
// styles
import "./SearchBox.scss";

type SearchBoxProps = {
  placeholder?: string;
};
const SearchBox = ({ placeholder = "search" }: SearchBoxProps) => {
  return (
    <section className="book-mart-search-box">
      <TextField
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </section>
  );
};
export { SearchBox };

