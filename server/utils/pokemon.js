/** ポケモンの取得 */
import { ofetch } from "ofetch";
import { ProxyAgent } from "proxy-agent";

const agent = new ProxyAgent();

/** ポケモンの取得 */
export async function findPokemon(name) {
  const pokemon = await ofetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    agent,
  });
  return pokemon;
}
