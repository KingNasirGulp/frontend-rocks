import { useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";

const api = new PokemonClient();

const cardStyle =
  "bg-green-500 w-40 h-48 text-center flex flex-col items-center justify-center rounded-lg";

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

type PokemonCardProps = {
  name: string;
  image: string;
};

const PokemonCard = ({ name, image }: PokemonCardProps) => {
  return (
    <div className={cardStyle}>
      <img src={image} alt={name} className="w-24 h-24 mb-2" />
      <strong className="text-white capitalize">{name}</strong>
    </div>
  );
};

export const Root = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const loadPokemons = async () => {
      const response = await api.listPokemons(0, 20);

      const mapped = response.results.map((pokemon, index) => ({
        id: index + 1,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      }));

      setPokemons(mapped);
    };

    loadPokemons();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
        />
      ))}
    </div>
  );
};
