import { childrenOfType } from 'airbnb-prop-types';
import { string } from 'prop-types';
import React, {
  useState,
  ReactNode,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { ListContext } from './ListContext';
import { Item } from './Item';

type Props = {
  children: ReactNode;
};

const List = ({ children }: Props) => {
  const [state, setState] = useState<Function[]>([]);

  const register = useCallback((cb: Function) => {
    setState((currentState) => [...currentState, cb]);
  }, []);

  const unregister = useCallback((cb: Function) => {
    setState((currentState) => currentState.filter((x) => x !== cb));
  }, []);

  const value = useMemo(
    () => ({
      register,
      unregister,
    }),
    [register, unregister]
  );

  useEffect(() => {
    state.forEach((cb, index) => cb(index));
  });

  return (
    <ListContext.Provider value={value}>
      <ul>{children}</ul>
    </ListContext.Provider>
  );
};

List.propTypes = {
  children: childrenOfType(Item).isRequired,
  foo: string.isRequired,
};

List.displayName = 'List';

List.Item = Item;

export { List };
