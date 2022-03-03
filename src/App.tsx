import { Box, Button, TextField } from "@mui/material";
import { debounce } from "lodash-es";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import A from "./A";
import { dispatch } from "./store";
import { getTest, setTest } from "./store/test";

export default function App() {
  const [count, setCount] = useState(0);

  const value = useSelector(getTest);

  const testChanged = useMemo(
    () =>
      debounce(({ target }) => {
        return dispatch(setTest(target.value));
      }, 250),
    [dispatch, setTest]
  );

  return (
    <React.StrictMode>
      <Box sx={{ margin: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ marginBottom: 1 }}>
            <h2>Yo {count}</h2>
            <Button onClick={() => setCount(count + 1)}>+1</Button>
          </Box>

          <Box>
            <h2>Store</h2>
            <div>Value: {value}</div>
            <TextField onChange={testChanged} defaultValue={value}></TextField>
          </Box>
        </Box>

        <A href="https://github.com/Sv443">Sv443</A>
      </Box>
    </React.StrictMode>
  );
}
