import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { swapiBaseUrl, controllers } from 'api/controllers';
import type { IStarshipsData } from 'api/starships/types';
import type ISwapiPage from 'api/types';

export const getStarships = async (page: number, signal?: AbortSignal): Promise<ISwapiPage<IStarshipsData>> => {
  try {
    const payload = await axios.get<ISwapiPage<IStarshipsData>>(`${swapiBaseUrl}${controllers.starships}`, {
      signal,
      params: {
        page
      }
    });
    return payload.data;
  } catch (error) {
    throw error;
  }
};

const useQueryStarships = (page: number) => {
  return useQuery(['starships', page], ({ signal }) => getStarships(page, signal), { staleTime: 10000 });
};

export default useQueryStarships;
