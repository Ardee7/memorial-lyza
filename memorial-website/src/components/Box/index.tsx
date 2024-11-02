import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export const Box1 = ({
  content,
  children,
}: { content?: string } & PropsWithChildren) => {
  return (
    <Box sx={{ padding: [2, 0, 0, 2], color: "#7d2e41", mb: 5 }}>
      {content}
      {children}
    </Box>
  );
};
