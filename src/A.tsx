import { Link } from "@mui/material";
import { ReactNode } from "react";

interface AProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
  onClick?: () => void;
  noDecoration?: boolean;
  children: ReactNode;
}

/* eslint-disable react/prop-types */
export default function A({
  href,
  target = "_blank",
  onClick = () => {},
  noDecoration = false,
  children,
  ...rest
}: AProps) {
  const decoProps = noDecoration
    ? { color: "inherit", sx: { textDecoration: "none" } }
    : {};

  return urlValid(href) ? (
    <Link
      {...{ href, target, onClick, ...decoProps }}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  ) : (
    <span data-error={`Invalid href '${href}'`}>{children}</span>
  );
}

function urlValid(url: string) {
  try {
    const u = new URL(url);

    return ["https:", "http:"].includes(u.protocol);
  } catch (e) {
    return url.startsWith("#");
  }
}
