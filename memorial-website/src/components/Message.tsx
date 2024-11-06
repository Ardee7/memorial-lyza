import { Box, Typography } from "@mui/material";

export const Message = ({
  message,
  senderName,
}: {
  message: string;
  senderName: string;
}) => {
  return (
    <Box sx={{ pt: 20, pb: 20, justifyItems: "center" }}>
      <Box
        sx={{
          width: "80%",
          height: 400,
          overflow: "scroll",
          ml: "auto",
          mr: "auto",
        }}
      >
        <Typography variant="body2" sx={{ fontStyle: "italic", fontSize: 18 }}>
          {message}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontStyle: "italic",
            textAlign: "end",
            fontSize: 18,
            mt: 4,
          }}
        >
          - {senderName}
        </Typography>
      </Box>
    </Box>
  );
};
