import { createContext } from 'react';

type Value = {
  register: (cb: Function) => void;
  unregister: (cb: Function) => void;
};

const ListContext = createContext<Value>({
  register: (cb) => undefined,
  unregister: (cb) => undefined,
});

export { ListContext };
