export type Pokemon = {
  number: number;
  name: string;
  image: string;
  type: string[];
};

export type PokemonInfos = {
  number: number;
  name: string;
  image: string;
  type: string[];
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
};
