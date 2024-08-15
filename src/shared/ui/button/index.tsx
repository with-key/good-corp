import { ComponentPropsWithRef, forwardRef } from "react";

type ButtonProps = ComponentPropsWithRef<"button"> & {};
type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  return <button ref={ref} {...props} />;
});

Button.displayName = "Button";
