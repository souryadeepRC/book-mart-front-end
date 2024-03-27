import { useEffect, useRef, useState } from "react";
//library
import { InputAdornment } from "@mui/material";
// icons
import SearchIcon from "@mui/icons-material/Search";
// common components
import { TextField } from "src/components/common/CommonComponents";
// hooks
import { useDebounce } from "src/hooks/useDebounce";
// styles
import "./SearchBox.scss";

type SearchBoxProps = {
  placeholder?: string;
  onSearch: (searchText: string) => void;
};
const SearchBox = ({ placeholder = "search", onSearch }: SearchBoxProps) => {
  // state
  const [searchText, setSearchText] = useState<string>("");
  //ref
  const isSearchTypedRef = useRef<boolean>(false);
  // hooks
  const debouncedSearchText = useDebounce(searchText);
  // callbacks
  const onSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchText(event.target.value);
    if (!isSearchTypedRef.current) isSearchTypedRef.current = true;
  };

  // effects
  useEffect(() => {
    if (isSearchTypedRef.current) {
      onSearch(debouncedSearchText);
    }
  }, [debouncedSearchText, onSearch]);
  return (
    <section className="book-mart-search-box">
      <TextField
        placeholder={placeholder}
        value={searchText}
        onChange={onSearchTextChange}
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

