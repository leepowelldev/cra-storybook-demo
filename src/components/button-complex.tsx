import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { oneOf, node, bool, string } from 'prop-types';
import { and, disallowedIf } from 'airbnb-prop-types';
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

type Variants = 'primary' | 'secondary' | 'tertiary';
type Icons = 'tick' | 'cross';
type Tags = 'button' | 'input' | 'a';
type Types = 'button' | 'submit' | 'reset';

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

type Props = {
  /** Children */
  children: ReactNode;
  /**
   * @ignore
   */
  className?: string;
  /**
   * @ignore
   */
  disabled?: boolean;
  /** Icon to display. Not allowed if isFullWidth or isTransparent is true */
  icon?: Icons;
  /** Extends button for usage in forms */
  isForm?: boolean;
  /** Makes button full width */
  isFullWidth?: boolean;
  /** Makes button transparent */
  isTransparent?: boolean;
  /** HTML tag to use */
  tag?: Tags;
  /** Button type for use with input or button tag */
  type?: Types;
  /** Styling variant */
  variant?: Variants;
} & PropsIconAndIsFullWidth &
  PropsIconAndIsTransparent &
  PropsTertiaryVariantAndIsForm &
  PropsTertiaryVariantAndIsFullWidth &
  PropsTertiaryVariantAndIsTransparent &
  PropsTagAndTypes &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  children,
  className: classNameProp,
  disabled = false,
  icon,
  isForm = false,
  isFullWidth = false,
  isTransparent = false,
  tag = 'button',
  type = 'button',
  variant = 'primary',
  ...passThroughProps
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

export { Button, variants, icons, tags, types };
export type { Props, Variants, Icons, Tags, Types };
