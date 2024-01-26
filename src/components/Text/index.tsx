import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Text = ({ children, className }: Props) => {
  return <p className={className}>{children}</p>;
};

export default Text;
