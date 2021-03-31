import { HTMLAttributes, useContext, useEffect, useState } from 'react';
import { ListContext } from './ListContext';

type Props = {} & HTMLAttributes<HTMLLIElement>;

const ListItem: React.FC<Props> = (props: Props) => {
  const [state, setState] = useState(0);

  const { register, unregister } = useContext(ListContext);

  useEffect(() => {
    const callback = (index: number) => setState(index);

    register(callback);

    return () => {
      unregister(callback);
    };
  }, [register, unregister]);

  return <li {...props}>{state}</li>;
};

export { ListItem };
