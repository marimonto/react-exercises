export const RobotList = ({ robotList }) => {
  return (
    <div className="robotList-container">
      <div>
        <h1>Robot List</h1>
      </div>
      <div className="robot-list" data-testid='list-id'>
        {robotList.map((robo, index) => (
          <div className="robot-item">
            <img
              key={index}
              width={200}
              height={200}
              src={`https://robohash.org/${robo}?set=set4`}
              alt=""
            ></img>
            <span>{robo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
