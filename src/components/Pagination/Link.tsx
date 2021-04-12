import {
  Children,
  cloneElement,
  HTMLAttributes,
  isValidElement,
  ReactNode,
} from 'react';
import styles from './styles.module.css';

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  isCurrent?: boolean;
}

const Link = ({ children, isCurrent = false, ...rest }: LinkProps) => {
  const child = Children.only(children);

  if (isValidElement(child)) {
    return (
      <li>
        {cloneElement(child, {
          className: isCurrent ? styles.current : '',
        })}
      </li>
    );
  }

  return null;
};

Link.displayName = 'Pagination.Link';

export { Link };
