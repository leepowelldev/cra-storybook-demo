import { Pagination as Component } from '../../src/components/Pagination';
import { Meta } from '@storybook/react';
import { EventHandler, SyntheticEvent, useCallback, useState } from 'react';

const _default: Meta = {
  title: Component.displayName,
  component: Component,
  argTypes: {
    children: {
      control: null,
    },
  },
};

const Pagination = (props) => {
  const [show, setShow] = useState(true);
  const [active, setActive] = useState();

  const handleButtonClick = useCallback(() => {
    setShow((current) => !current);
  }, []);

  const handleClick = useCallback((event, id) => {
    event.preventDefault();
    console.log(id);
  }, []);

  return (
    <>
      <Component
        summary={<Component.Summary />}
        previousLink={<Component.PreviousLink href="/prev" />}
        nextLink={<Component.NextLink href="/next" />}
      >
        <Component.Link>
          <a href="/1">1</a>
        </Component.Link>
        <Component.Link>
          <a href="/2">2</a>
        </Component.Link>
        <Component.Link isCurrent>
          <a href="/3">3</a>
        </Component.Link>
        <Component.Link>
          <a href="/4">4</a>
        </Component.Link>
        <Component.Link>
          <a href="/5">5</a>
        </Component.Link>
      </Component>
    </>
  );
};

export default _default;
export { Pagination };
