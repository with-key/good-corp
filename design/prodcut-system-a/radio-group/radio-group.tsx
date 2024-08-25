import { Root, Item, Indicator } from "@radix-ui/react-radio-group";
import css from "./radio-group.module.scss";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const radioGroup = cva(css.root, {
  variants: {
    variant: {
      default: css.default,
      secondary: css.secondary,
    },
  },
});

type RootProps = React.ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof radioGroup> & {};
const PrmitiveRoot = ({ children, variant, ...props }: RootProps) => {
  return (
    <Root {...props} className={radioGroup({ variant })}>
      <div className={css.container}>{children}</div>
    </Root>
  );
};

type ItemProps = Omit<
  React.ComponentPropsWithoutRef<typeof Item>,
  "children"
> & { children: React.ReactNode | ((props: {}) => React.ReactNode) };

const PrmitiveItem = ({ children, ...props }: ItemProps) => {
  return (
    <Item {...props} className={css.item}>
      {typeof children === "function" ? children({}) : children}
    </Item>
  );
};

type IndicatorProps = React.ComponentPropsWithoutRef<typeof Indicator> & {};
const PrmitiveIndicator = ({ children, ...props }: IndicatorProps) => {
  return <Indicator {...props}>{children}</Indicator>;
};

const Badge = () => {
  return <div className={css.badge}>유리</div>;
};

export const RarioGroup = Object.assign(PrmitiveRoot, {
  Item: PrmitiveItem,
  Indicator: PrmitiveIndicator,
  Badge,
});
