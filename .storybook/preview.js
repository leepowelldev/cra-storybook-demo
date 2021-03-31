import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  types,
  Stories,
} from '@storybook/addon-docs/blocks';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    grid: {
      disable: true,
    },
  },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <ArgsTable />
      </>
    ),
  },
};
