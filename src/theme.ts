import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material";
import "@fontsource/fira-sans";

export const createTheme = ({ darkMode }: { darkMode: boolean }) =>
  responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: '"Fira Sans", Helvetica, Arial, sans-serif',
      },
      palette: {
        ...(darkMode
          ? {
              mode: "dark",
              primary: { main: "#456789" },
              secondary: { main: "#987654" },
              error: { main: "#ff4455" },
            }
          : {
              mode: "light",
              primary: { main: "#123456" },
              secondary: { main: "#654321" },
              error: { main: "#ff1100" },
            }),
      },
      components: {
        MuiButton: {
          defaultProps: {
            variant: "contained",
          },
        },
        MuiSelect: {
          defaultProps: {
            size: "small",
          },
        },
        MuiTabs: {
          defaultProps: {
            indicatorColor: "secondary",
            textColor: "secondary",
          },
        },
      },
    })
  );
