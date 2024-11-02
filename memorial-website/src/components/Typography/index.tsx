import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export const Typography1 = ({
  content,
  children,
}: { content?: string } & PropsWithChildren) => {
  return (
    <Typography variant="body2" fontSize={20} sx={{ pb: 2 }}>
      {content}
      {children}
    </Typography>
  );
};
