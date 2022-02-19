import Pet from "./Pet";
import { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const Results = ({ pets }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => setTheme("red"), 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
