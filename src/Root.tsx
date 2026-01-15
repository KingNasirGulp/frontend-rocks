const cardStyle =
  "bg-green-500 w-40 h-48 text-center flex flex-col items-center justify-center rounded-lg";

type PokemonCardProps = {
  name: string;
  image: string;
};

const PokemonCard = ({ name, image }: PokemonCardProps) => {
  return (
    <div className={cardStyle}>
      <img src={image} alt={name} className="w-24 h-24 mb-2" />
      <strong className="text-white">{name}</strong>
    </div>
  );
};

export const Root = () => {
  const pokemons = [
    {
      name: "Pikachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    {
      name: "Bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      name: "Charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.image}
        />
      ))}
    </div>
  );
};
