import { useCallback } from "react";
import {
  Snackbar,
  Alert,
  AlertColor,
  SnackbarCloseReason,
} from "@mui/material";

export interface NotificationProps {
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
  notified?: (e?: any, reason?: SnackbarCloseReason) => void;
}

export default function Toast({
  message,
  severity = "info",
  autoHideDuration = 4000,
  notified = () => {},
}: NotificationProps) {
  const onClose = useCallback(
    (e?: any, r?: SnackbarCloseReason) => notified(e, r),
    [notified]
  );

  return (
    <Snackbar
      {...{
        anchorOrigin: { vertical: "top", horizontal: "right" },
        open: true,
        autoHideDuration,
        onClose,
      }}
    >
      <Alert {...{ onClose: () => onClose(), severity }}>{message}</Alert>
    </Snackbar>
  );
}
