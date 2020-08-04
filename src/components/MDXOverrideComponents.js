// TODO replace with theme-ui way
export const p = ({ children }) => {
  return (
    <p
      style={{
        background: "hotpink",
        fontSize: "18px",
        lineHeight: "180%",
        marginBottom: "3rem",
      }}
    >
      {children}
    </p>
  );
};
