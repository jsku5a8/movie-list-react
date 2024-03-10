import "./Cards.css";

export const Cards = ({ data }) => {
console.log(data, 'dataMassiv');
  return (
    <div className="containerCards">
      {data.map((el) => {
        return (
          <div className="photos">
            <img src={el.img} alt={el.name} />
            <h3>{el.name}</h3>
            <p>{el.nameG}</p>
          </div>
        );
      })}
    </div>
  );
};
