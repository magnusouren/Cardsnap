import { FC } from 'react';
import { Params, useParams } from 'react-router-dom';
import { PlayCardCard } from '../components/playCardCard';
import { Subtitle } from '../components/subtitle';

export const DeckView: FC = () => {
  const params = useParams<Params<'id'>>();

  return (
    <>
      <Subtitle title={'Play ' + params.id!} />
      <PlayCardCard card={{ question: 'FOO', answer: 'BAR' }} currentCount={4} totalCount={20} />
    </>
  );
};
