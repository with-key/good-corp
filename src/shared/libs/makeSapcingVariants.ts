export const makeSpacingVariants = (
  property: "gap" | "padding" | "margin" | "px" | "py",
  css: Record<string, string>
) => {
  return {
    50: css[`${property}50`],
    100: css[`${property}100`],
    150: css[`${property}150`],
    200: css[`${property}200`],
    250: css[`${property}250`],
    300: css[`${property}300`],
    350: css[`${property}350`],
    400: css[`${property}400`],
    450: css[`${property}450`],
    500: css[`${property}500`],
    550: css[`${property}550`],
    600: css[`${property}600`],
    650: css[`${property}650`],
  } as const;
};
