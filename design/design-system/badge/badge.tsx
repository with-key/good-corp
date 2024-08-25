export const Badge = ({ variant }: { variant: "blue" | "white" }) => {
  return (
    <div
      style={{
        border: "1px solid red",
        borderRadius: 10,
        fontSize: 10,
        padding: 2,
        backgroundColor: variant === "blue" ? "blue" : "white",
        color: variant === "blue" ? "white" : "blue",
      }}
    >
      유리
    </div>
  );
};
