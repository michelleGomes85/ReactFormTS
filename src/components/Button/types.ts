export type ButtonProps = {
    title: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  };
  