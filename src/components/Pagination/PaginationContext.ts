import { createContext } from 'react';

const PaginationContext = createContext<{
  current: number;
  setCurrent: (arg: number) => void;
  total: number;
  setTotal: (arg: number) => void;
}>({
  current: -1,
  setCurrent: () => undefined,
  total: 0,
  setTotal: () => undefined,
});

export { PaginationContext };
