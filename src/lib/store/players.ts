import type { Player } from '$lib/types/Player';
import { writable } from 'svelte/store';

function createPlayers() {
  const { set, subscribe, update } = writable<Player[]>([]);

  return {
    subscribe,

    addPlayer: (player: Partial<Player> & Pick<Player, 'name'>) => {
      update((players) => {
        if (
          player.name === undefined ||
          player.name === null ||
          player.name === ''
        ) {
          throw new Error(`The player name is empty`);
        }
        if (players.findIndex((p: Player) => p.name === player.name) !== -1) {
          throw new Error(`The name ${player.name} already exists`);
        }

        const newPlayer: Player = { scores: [], ...player };
        return [...players, newPlayer];
      });
    },

    removePlayer: (playerName: string) => {
      update((players) => {
        const newPlayers = players.filter((p: Player) => p.name !== playerName);
        return newPlayers;
      });
    },

    // FIXME
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renamePlayer: (_oldPlayerName: string, _newPlayerName: string) => {
      //TODO
      console.error('not implemented yet');
    },

    // TODO: also some functions for score?

    reset: () => set([])
  };
}

export const players = createPlayers();
