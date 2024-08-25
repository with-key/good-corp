import { cva, type VariantProps } from "class-variance-authority";
import css from "./stack.module.scss";
import { makeSpacingVariants } from "@/shared/libs/makeSapcingVariants";

type Props = VariantProps<typeof stack> & {
  children: React.ReactNode;
};

const stack = cva(undefined, {
  variants: {
    dir: { row: css.row, column: css.column },
    gap: makeSpacingVariants("gap", css),

    align: {
      start: css.alignStart,
      center: css.alignCenter,
      end: css.alignEnd,
    },
    justify: {
      start: css.justifyStart,
      center: css.justifyCenter,
      end: css.justifyEnd,
    },
  },

  defaultVariants: {},
});

export const Stack = ({ children, dir, gap, align, justify }: Props) => {
  return (
    <div
      className={`${css.stack} ${stack({
        dir,
        gap,
        align,
        justify,
      })}`}
    >
      {children}
    </div>
  );
};
