import { FC } from 'react';
import { Params, useParams } from 'react-router-dom';
import { CreateCardContainer } from '../views/editDeckPage/createCardContainer';
import { EditDeckPageHeader } from '../views/editDeckPage/editDeckPageHeader/editDeckPageHeader';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { CreateCardContainer } from '../views/editDeckPage/createCardContainer';
import { EditDeckPageHeader } from '../views/editDeckPage/editDeckPageHeader/editDeckPageHeader';
import { DECKS_ENDPOINTS } from '../helpers/api';
import { CardDeck } from '../helpers/mockData';
import { DeckNotFound } from '../components/deckNotFound';
import { ListOfCards } from '../views/editDeckPage/listOfCards';
import { DeleteDeckButton } from '../views/editDeckPage/deleteDeckButton';

export const EditDeckPage: FC = () => {
  const params = useParams<Params<'id'>>;
  console.log(params.toString());

  const { isLoading, data, isSuccess, isError, refetch } = useQuery(['deck', params.id], () =>
    axios.get(DECKS_ENDPOINTS + params.id).then((res: AxiosResponse<CardDeck>) => res.data),
  );

  return (
    <>
      <>
        {isLoading && <p>Loading...</p>}
        {isSuccess && (
          <>
            <EditDeckPageHeader deck={data} refetch={refetch} />
            <CreateCardContainer deckName={data.name} />
            <ListOfCards id={data.id} />
            <DeleteDeckButton />
          </>
        )}
        {isError && <DeckNotFound id={params.id} />}
      </>
    </>
  );
};
