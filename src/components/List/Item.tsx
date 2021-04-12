import {
  HTMLAttributes,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { ListContext } from './ListContext';

const backgrounds = {
  red: 'red',
  green: 'green',
  blue: 'blue',
} as const;

type Backgrounds = typeof backgrounds[keyof typeof backgrounds];

interface Props extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  background?: Backgrounds;
}

const Item = ({ children, background, ...rest }: Props) => {
  const [state, setState] = useState(0);

  const { register, unregister } = useContext(ListContext);

  useEffect(() => {
    const callback = (index: number) => setState(index);

    register(callback);

    return () => {
      unregister(callback);
    };
  }, [register, unregister]);

  return (
    <li {...rest}>
      <div>{state}</div>
      {children}
    </li>
  );
};

Item.displayName = 'List.Item';

export { Item, backgrounds };
