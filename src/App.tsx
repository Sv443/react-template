import {
  Box,
  Button,
  ButtonGroup,
  DialogActions,
  DialogContent,
  MenuItem,
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import A from "./A";
import settings from "./settings";
import { Sidebar, Titlebar } from "./Layout";
import { dispatch } from "./store";
import { setSidebar } from "./store/sidebar";
import { debounce } from "lodash-es";
import Toast from "./Toast";
import { Dialog } from "./Dialogs";

export default function App() {
  const [count, setCount] = useState(0);

  const sidebarItems: ReactNode[] = [];

  //#DEBUG
  for (let i = 0; i < 3; i++)
    sidebarItems.push(
      <A href={`#itm-${i}`} target="_self" noDecoration>
        <MenuItem
          sx={{ fontSize: 20 }}
          onClick={debounce(() => dispatch(setSidebar(false)), 70)}
        >
          Item {i}
        </MenuItem>
      </A>
    );

  const [showExampleToast, setExampleToast] = useState(false);
  const [exampleDialogOpen, setExampleDialogOpen] = useState(false);

  return (
    <React.StrictMode>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Titlebar {...{ title: settings.info.name }}></Titlebar>
        <Sidebar>{sidebarItems}</Sidebar>
        {showExampleToast ? (
          <Toast
            {...{
              message: "Sample text",
              severity: "success",
              notified: (e, reason) =>
                reason !== "clickaway" && setExampleToast(false),
            }}
          ></Toast>
        ) : (
          <></>
        )}
        <Dialog
          {...{
            open: exampleDialogOpen,
            title: "Dialog Title",
            onClose: () => setExampleDialogOpen(false),
          }}
        >
          <DialogContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            lorem et enim finibus tristique. Etiam sit amet consequat turpis.
            Morbi ac eros sapien. Ut maximus purus enim. Praesent at volutpat
            orci, vitae vulputate lacus. Ut ut ante ullamcorper, porta mi in,
            tempus sem. Nullam tincidunt erat a finibus facilisis. Aliquam erat
            volutpat. Pellentesque quis dolor consectetur diam lobortis ornare
            at sed ligula.
          </DialogContent>
          <DialogActions sx={{ justifyContent: "flex-end" }}>
            <Button
              color="secondary"
              onClick={() => setExampleDialogOpen(false)}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Box sx={{ margin: 2 }}>
          <Box>
            TS React template using Vite & Material UI, originally based on{" "}
            <A href="https://github.com/pubcore/vite-mui">pubcore/vite-mui</A>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: 3,
            }}
          >
            <Box sx={{ margin: 1, marginBottom: 1 }}>
              <Box sx={{ marginBottom: 1 }}>Count: {count}</Box>
              <ButtonGroup
                disableElevation
                variant="contained"
                color="secondary"
              >
                <Button onClick={() => setCount(count + 1)}>Increase</Button>
                <Button onClick={() => setExampleToast(true)}>Toast</Button>
                <Button onClick={() => setExampleDialogOpen(true)}>
                  Dialog
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.StrictMode>
  );
}
