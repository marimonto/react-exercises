const StyleSelector = ({ options, handleOnClickStyle, activeOption }) => {
  return (
    <section className="row">
      <div className="col">
        <h2>STYLE</h2>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOnClickStyle(option.value)}
            className={activeOption === option.value && "active"}
          >
            {option.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default StyleSelector;
