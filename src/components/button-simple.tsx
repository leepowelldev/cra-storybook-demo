import React from 'react';
import { oneOf, node, bool } from 'prop-types';
import classNames from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Simple
 *
 * Positives:
 *
 * Negatives:
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

type Props = {
  /** Children */
  children: ReactNode;
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
} & ButtonHTMLAttributes<HTMLButtonElement>;

const propTypes = {
  children: node.isRequired,
  icon: oneOf(Object.values(icons)),
  isForm: bool,
  isFullWidth: bool,
  isTransparent: bool,
  tag: oneOf(Object.values(tags)),
  type: oneOf(Object.values(types)),
  variant: oneOf(Object.values(variants)),
};

const Button: React.FC<Props> = ({
  children,
  className: classNameProp,
  disabled,
  icon,
  isForm = false,
  isFullWidth = false,
  isTransparent = false,
  tag = 'button',
  type = 'button',
  variant = 'primary',
}: Props) => {
  const className = classNames(classNameProp, icon && `icon--${icon}`);
  return <button className={className}>{children}</button>;
};

Button.propTypes = propTypes;

export { Button, variants, icons, tags, types };
export type { Props, Variants, Tags, Types, Icons };
