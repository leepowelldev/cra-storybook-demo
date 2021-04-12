import React, { ReactElement, useContext, useEffect } from 'react';
import { ReactNode } from 'react';
import { Test } from '../Test';
import { PaginationContext } from './PaginationContext';

type LinksProps = {
  children: ReactNode;
};

// type T<U extends React.ElementType> = React.ComponentPropsWithRef<U>;
// type K = T<'div'>;
// type L = Omit<K, 'title'>;
// type P = L['children'];

const Links = ({ children }: LinksProps) => {
  const { setCurrent, setTotal } = useContext(PaginationContext);

  const filteredChildren = React.Children.toArray(children).filter((child) => {
    if (
      child instanceof Object &&
      'type' in child &&
      child.type instanceof Object &&
      'displayName' in child.type
    ) {
      const { displayName }: { displayName: string } = child.type;
      if (displayName === 'Pagination.Link') {
        return true;
      }
    }

    return false;
  });

  const current = filteredChildren.findIndex((child) => {
    if (
      child instanceof Object &&
      'props' in child &&
      child.props.isCurrent === true
    ) {
      return true;
    }
    return false;
  });

  if (current === -1) {
    throw new Error(
      'No `Pagination.Link` component found with `isCurrent` prop set'
    );
  }

  const total = filteredChildren.length;

  useEffect(() => {
    setCurrent(current);
    setTotal(total);
  }, [current, total, setCurrent, setTotal]);

  return <ul>{filteredChildren}</ul>;
};

Links.displayName = 'Pagination.Links';

export { Links };
