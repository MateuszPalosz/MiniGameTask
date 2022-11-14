import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import type { IPeopleData } from 'api/people/types';
import { swapiBaseUrl, controllers } from 'api/controllers';
import type ISwapiPage from 'api/types';

export const getPeople = async (page: number, signal?: AbortSignal): Promise<ISwapiPage<IPeopleData>> => {
  try {
    const payload = await axios.get<ISwapiPage<IPeopleData>>(`${swapiBaseUrl}${controllers.people}`, {
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

const useQueryPeople = (page: number) => {
  return useQuery(['people', page], ({ signal }) => getPeople(page, signal), { staleTime: Infinity });
};

export default useQueryPeople;
