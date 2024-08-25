import { cva, type VariantProps } from "class-variance-authority";
import css from "./action-button.module.scss";

const button = cva(css.base, {
  variants: {
    variant: {
      primary: css.primary,
      secondary: css.secondary,
    },

    size: {
      small: css.small,
      medium: css.medium,
      large: css.large,
    },
  },
});

type ButtonPrimitiveProps = React.ComponentPropsWithoutRef<"button"> & {};

export const ButtonPrimitive = ({
  children,
  ...props
}: ButtonPrimitiveProps) => {
  return <button {...props}>{children}</button>;
};

type Props = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof button> & {};

export const Button = ({
  children,
  variant,
  size,
  className,
  ...props
}: Props) => {
  return (
    <ButtonPrimitive
      {...props}
      className={button({ variant, size, className })}
    >
      {children}
    </ButtonPrimitive>
  );
};
