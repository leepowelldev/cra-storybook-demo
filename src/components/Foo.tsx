import React from 'react';

// interface IFoo {
//   <C extends React.ElementType = 'div'>(
//     props: {
//       component: C;
//     } & Omit<React.ComponentProps<C>, ''>
//   ): null;
//   (props: {} & Omit<React.ComponentProps<'div'>, ''>): null
// }

interface IFoo<T extends React.ElementType, P = {}> {
  <C extends React.ElementType = T>(
    props: {
      component?: C;
    } & P &
      Omit<React.ComponentProps<C>, ''>
  ): JSX.Element;
}

type Props = {
  isDisabled?: boolean;
};

const Foo: IFoo<'div', Props> = ({
  component = 'div',
  isDisabled,
  ...rest
}) => {
  const Component = component;

  return isDisabled ? (
    <span>Fooo</span>
  ) : (
    <Component {...rest}>Hello</Component>
  );
};

<Foo component="li" href="#" />;
<Foo component="a" href="#" />;
<Foo href="#" />;
<Foo title="#" />;

const u = Foo({
  component: 'li',
  href: '#',
});

export { Foo };
