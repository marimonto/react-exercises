const StyleSelector = ({ options, handleOnClickStyle }) => {
  console.log(options);
  return (
    <section className="row">
      <div className="col">
        <h2>STYLE</h2>
        {options.map((option, index) => (
          <button key={index} onClick={()=>handleOnClickStyle(option.value)}> {option.name}</button>
        ))}
      </div>
    </section>
  );
};

export default StyleSelector;
