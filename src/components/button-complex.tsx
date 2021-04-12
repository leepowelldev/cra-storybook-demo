import React, { ReactNode, ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { oneOf, node, bool, string } from 'prop-types';
import {
  and,
  childrenOf,
  componentWithName,
  disallowedIf,
} from 'airbnb-prop-types';
import classNames from 'clsx';
import { XOR } from 'ts-essentials';

/**
 * Complex TS props -
 *
 * Positives:
 * - excellent TS DX
 * - run time and compilation time warnings
 * Negatives:
 * - complex to maintain
 */

const variants = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
} as const;

const icons = {
  tick: 'tick',
  cross: 'cross',
} as const;

const tags = {
  button: 'button',
  input: 'input',
  a: 'a',
} as const;

const types = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
} as const;

interface BaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  /** @ignore */
  className?: string;
  /** @ignore */
  disabled?: boolean;
  /** Icon to display. Not allowed if isFullWidth or isTransparent is true */
  icon?: 'tick' | 'cross';
  /** Extends button for usage in forms */
  isForm?: boolean;
  /** Makes button full width */
  isFullWidth?: boolean;
  /** Makes button transparent */
  isTransparent?: boolean;
  /** HTML tag to use */
  tag?: 'button' | 'input' | 'a';
  /** Button type for use with input or button tag */
  type?: 'button' | 'submit' | 'reset';
  /** Styling variant */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

type Icons = NonNullable<BaseProps['icon']>;
type Tags = NonNullable<BaseProps['tag']>;
type Types = NonNullable<BaseProps['type']>;
type Variants = NonNullable<BaseProps['variant']>;

type TertiaryVariant = 'tertiary';
type VariantsExcludingTertiary = Exclude<Variants, TertiaryVariant>;

type PropsIconAndIsFullWidth = XOR<
  {
    icon?: Icons;
    isFullWidth?: never;
  },
  {
    icon?: never;
    isFullWidth?: boolean;
  }
>;

type PropsIconAndIsTransparent = XOR<
  {
    icon?: Icons;
    isTransparent?: never;
  },
  {
    icon?: never;
    isTransparent?: boolean;
  }
>;

type PropsTertiaryVariantAndIsForm = XOR<
  {
    variant?: TertiaryVariant;
    isForm?: never;
  },
  {
    variant?: VariantsExcludingTertiary;
    isForm?: boolean;
  }
>;

type PropsTertiaryVariantAndIsFullWidth = XOR<
  {
    variant?: TertiaryVariant;
    isFullWidth?: never;
  },
  {
    variant?: VariantsExcludingTertiary;
    isFullWidth?: boolean;
  }
>;

type PropsTertiaryVariantAndIsTransparent = XOR<
  {
    variant?: TertiaryVariant;
    isTransparent?: never;
  },
  {
    variant?: VariantsExcludingTertiary;
    isTransparent?: boolean;
  }
>;

type PropsTagAndTypes = XOR<
  {
    tag?: 'a';
    type?: never;
  },
  {
    tag?: Exclude<Tags, 'a'>;
    type?: Types;
  }
>;

type Props = BaseProps &
  PropsTertiaryVariantAndIsFullWidth &
  PropsTertiaryVariantAndIsForm &
  PropsIconAndIsTransparent &
  PropsIconAndIsFullWidth &
  PropsTertiaryVariantAndIsTransparent &
  PropsTagAndTypes;

const Button = ({
  children,
  className: classNameProp,
  disabled = false,
  icon,
  isForm = false,
  isFullWidth = false,
  isTransparent = false,
  tag = tags.button,
  type = types.button,
  variant = variants.primary,
}: Props) => {
  const className = classNames(classNameProp, icon && `icon--${icon}`);
  if (tag === 'a') {
    return <a href="/google">{children}</a>;
  }
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

const propTypes = {
  children: node.isRequired,
  className: string,
  disabled: bool,
  icon: and([
    disallowedIf(oneOf(Object.values(icons)), 'isFullWidth', (props) =>
      props.isFullWidth ? null : new Error()
    ),
    disallowedIf(oneOf(Object.values(icons)), 'isTransparent', (props) =>
      props.isTransparent ? null : new Error()
    ),
  ]),
  isForm: disallowedIf(bool, 'variant', (props) =>
    props.isForm && props.variant === variants.tertiary ? null : new Error()
  ),
  isFullWidth: disallowedIf(bool, 'variant', (props) =>
    props.isFullWidth && props.variant === variants.tertiary
      ? null
      : new Error()
  ),
  isTransparent: disallowedIf(bool, 'variant', (props) =>
    props.isTransparent && props.variant === variants.tertiary
      ? null
      : new Error()
  ),
  tag: oneOf(Object.values(tags)),
  type: disallowedIf(oneOf(Object.values(types)), 'tag', (props) =>
    props.type && props.tag === tags.a ? null : new Error()
  ),
  variant: oneOf(Object.values(variants)),
};

Button.propTypes = propTypes as any;

Button.displayName = 'Button';

export { Button, variants, icons, tags, types };
export type { Props, Variants, Icons, Tags, Types };
