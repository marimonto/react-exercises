export const DisplayNested = ({ nestedObjected }) => {
  return (
    <>
      {Object.entries(nestedObjected).map(([key, value]) => {
        if (typeof value === "object") {
          return (
            <>
              <p>{`${key}: `}</p>
              <div style={{ paddingLeft: 50 }}>
                <DisplayNested nestedObjected={value} />
              </div>
            </>
          );
        } else {
          return <p>{`${key}: ${value}`}</p>;
        }
      })}
    </>
  );
};
