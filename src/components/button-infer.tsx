import React, { ButtonHTMLAttributes } from "react";
import { oneOf, node, bool, InferProps } from "prop-types";
import { and, disallowedIf } from "airbnb-prop-types";
import classNames from "clsx";

/**
 * Infer TS props - infer TS props from propTypes using prop-types
 * `InferProps` type. Run time warns if we're using incorrect
 * combination, compilation time only checks types are correct.
 *
 * Positives:
 * - complex runtime prop-type checks
 * - simple to implement
 *
 * Negatives:
 * - only simple TS types
 * - poor TS DX as warnings will only appear at runtime
 * - docgen not accurate for complex/custom prop types
 */

const variants = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary"
} as const;

const icons = {
  tick: "tick",
  cross: "cross"
} as const;

const tags = {
  button: "button",
  input: "input",
  a: "a"
} as const;

const types = {
  button: "button",
  submit: "submit",
  reset: "reset"
} as const;

type Variants = "primary" | "secondary" | "tertiary";
type Icons = "tick" | "cross";
type Tags = "button" | "input" | "a";
type Types = "button" | "submit" | "reset";

const propTypes = {
  /** Children */
  children: node.isRequired,
  /** Icon to display. Not allowed if isFullWidth or isTransparent is true */
  icon: and([
    disallowedIf(oneOf(Object.values(icons)), "isFullWidth", (props) =>
      props.isFullWidth ? null : new Error()
    ),
    disallowedIf(oneOf(Object.values(icons)), "isTransparent", (props) =>
      props.isTransparent ? null : new Error()
    )
  ]),
  /** Extends button for usage in forms */
  isForm: disallowedIf(bool, "variant", (props) =>
    props.isForm && props.variant === variants.tertiary ? new Error() : null
  ),
  /** Makes button full width */
  isFullWidth: disallowedIf(bool, "variant", (props) =>
    props.isFullWidth && props.variant === variants.tertiary
      ? null
      : new Error()
  ),
  /** Makes button transparent */
  isTransparent: disallowedIf(bool, "variant", (props) =>
    props.isTransparent && props.variant === variants.tertiary
      ? null
      : new Error()
  ),
  /** HTML tag to use */
  tag: oneOf(Object.values(tags)),
  /** Button type for use with input or button tag */
  type: disallowedIf(oneOf(Object.values(types)), "tag", (props) =>
    props.type && props.tag === tags.a ? null : new Error()
  ),
  /** Styling variant */
  variant: oneOf(Object.values(variants))
};

type Props = InferProps<typeof propTypes> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  children,
  className: classNameProp,
  disabled,
  icon,
  isForm = false,
  isFullWidth = false,
  isTransparent = false,
  tag = "button",
  type = "button",
  variant = "primary"
}: Props) => {
  const className = classNames(classNameProp, icon && `icon--${icon}`);
  return <button className={className}>{children}</button>;
};

Button.propTypes = propTypes;

export { Button, variants, icons, tags, types };
export type { Props, Variants, Icons, Tags, Types };
