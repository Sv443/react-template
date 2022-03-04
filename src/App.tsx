import { Box, Button, TextField } from "@mui/material";
import { debounce } from "lodash-es";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import A from "./A";
import { dispatch } from "./store";
import { getTest, setTest } from "./store/test";
import { TitleBar } from "./TitleBar";

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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TitleBar {...{ title: "Title yo" }}></TitleBar>
        <Box sx={{ margin: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box sx={{ margin: 1, marginBottom: 1 }}>
              <h2>Yo {count}</h2>
              <Button onClick={() => setCount(count + 1)} color="secondary">
                +1
              </Button>
            </Box>

            <Box sx={{ margin: 1 }}>
              <h2>Store</h2>
              <div>Value: {value}</div>
              <TextField
                onChange={testChanged}
                defaultValue={value}
                color="secondary"
              ></TextField>
            </Box>
          </Box>

          <A href="https://github.com/Sv443">Sv443</A>
        </Box>
      </Box>
    </React.StrictMode>
  );
}
