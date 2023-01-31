import { AccessorizeOptions } from "../constants/Options";

const AccessorizeSelector = ({
  handleOnClickAccessorizeOption,
  activeOption,
}) => {
  return (
    <section className="row">
      <div className="col">
        <h2>ACCESSORIZE YOUR ALPACA</h2>
        {AccessorizeOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOnClickAccessorizeOption(option)}
            className={activeOption === option && 'active'}
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AccessorizeSelector;
