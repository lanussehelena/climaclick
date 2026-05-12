import Button from "@mui/material/Button";

type Props = {
  text: string;

  onClick?: () => void;

  variant?: "contained" | "outlined";

  fullWidth?: boolean;
};

export default function CustomButton({
  text,
  onClick,
  variant = "contained",
  fullWidth = false,
}: Props) {
  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        borderRadius: 3,
        paddingY: 1.2,
        textTransform: "none",
        fontWeight: "bold",
      }}
    >
      {text}
    </Button>
  );
}