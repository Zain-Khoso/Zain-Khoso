// Types.
type Props = { variant?: "primary" | "secondary" } & ChildrenProp;

// Data.
const variants = {
  primary: "text-primary",
  secondary: "text-secondary",
};

// Component to highlight specific texts.
export default function Highlighter({ variant = "primary", children }: Props) {
  return <span className={"font-bold " + variants[variant]}>{children}</span>;
}
