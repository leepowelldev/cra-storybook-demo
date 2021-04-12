import { AnchorHTMLAttributes, ReactNode, useContext } from 'react';
import { PaginationContext } from './PaginationContext';

interface NavigationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  href?: string;
}

const NavigationLink = ({
  children,
  className,
  href,
  ...rest
}: NavigationLinkProps) => (
  <p className={className}>
    <a {...rest} href={href}>
      {children}
    </a>
  </p>
);

NavigationLink.displayName = 'Pagination.NavigationLink';

type PreviousNextLinkProps = Omit<NavigationLinkProps, 'children'>;

const PreviousLink = ({ href, ...rest }: PreviousNextLinkProps) => {
  const { current } = useContext(PaginationContext);

  return (
    <NavigationLink
      {...rest}
      href={current !== -1 && current > 0 ? href : undefined}
      className="a-pagination__previous"
    >
      Previous
    </NavigationLink>
  );
};

PreviousLink.displayName = 'Pagination.PreviousLink';

const NextLink = ({ href, ...rest }: PreviousNextLinkProps) => {
  const { current, total } = useContext(PaginationContext);

  return (
    <NavigationLink
      {...rest}
      href={current !== -1 && current < total - 1 ? href : undefined}
      className="a-pagination__next"
    >
      Next
    </NavigationLink>
  );
};

NextLink.displayName = 'Pagination.NextLink';

export { PreviousLink, NextLink };
