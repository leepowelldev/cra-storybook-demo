import React, {
  useState,
  ReactNode,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { ListContext } from './ListContext';

type Props = {
  children?: ReactNode;
};

const List: React.FC<Props> = ({ children }) => {
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

  console.log(React.Children.toArray(children));

  return (
    <ListContext.Provider value={value}>
      <div>Total: {state.length}</div>
      <ul>{children}</ul>
    </ListContext.Provider>
  );
};

export { List };
