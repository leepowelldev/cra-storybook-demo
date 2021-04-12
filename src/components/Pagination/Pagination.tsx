import { ReactNode, useMemo, useState } from 'react';
import { Link } from './Link';
import { Links } from './Links';
import { NextLink, PreviousLink } from './NavigationLinks';
import { PaginationContext } from './PaginationContext';
import { Summary } from './Summary';

interface PaginationProps {
  children: ReactNode;
  summary?: ReactNode;
  previousLink: ReactNode;
  nextLink: ReactNode;
}

const Pagination = ({
  children,
  summary,
  previousLink,
  nextLink,
}: PaginationProps) => {
  const [current, setCurrent] = useState(-1);
  const [total, setTotal] = useState(0);

  const value = useMemo(
    () => ({
      current,
      setCurrent,
      total,
      setTotal,
    }),
    [current, setCurrent, total, setTotal]
  );

  return (
    <div>
      <PaginationContext.Provider value={value}>
        {summary}
        <Links>{children}</Links>
        {previousLink}
        {nextLink}
      </PaginationContext.Provider>
    </div>
  );
};

Pagination.displayName = 'Pagination';

Pagination.Summary = Summary;
Pagination.Link = Link;
Pagination.PreviousLink = PreviousLink;
Pagination.NextLink = NextLink;

export { Pagination };
