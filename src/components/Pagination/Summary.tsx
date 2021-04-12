import { useContext } from 'react';
import { PaginationContext } from './PaginationContext';

type SummaryProps = {};

const Summary = (props: SummaryProps) => {
  const { current, total } = useContext(PaginationContext);
  return (
    <div>
      Showing page {current + 1} of {total}
    </div>
  );
};

Summary.displayName = `Pagination.Summary`;

export { Summary };
