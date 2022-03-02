import { Link } from "@mui/material";
import { ReactNode } from "react";

interface AProps {
    href: string;
    children: ReactNode;
}

/* eslint-disable react/prop-types */
export default function A({ href, children }: AProps) {
  return (
    <Link {...{ href }} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
