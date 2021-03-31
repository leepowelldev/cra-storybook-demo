// import {
//   ReactComponentElement,
//   ReactElement,
//   ElementType,
//   JSXElementConstructor,
// } from 'react';

// type TestChildrenProps = {
//   foo: number;
// };

// const TestChildren = (props: TestChildrenProps) => <div>{props.foo}</div>;

// type TestChildrenType = typeof TestChildren;

// type Props = {
//   children:
//     | JSX.ElementClass<TestChildrenType>
//     | ReactElement<TestChildrenType>[];
// };

// const Test = (props: Props) => {
//   return null;
// };

// const Y = (
//   <Test>
//     <TestChildren foo={2} />
//     <TestChildren foo={2} />
//     <div>sdf</div>
//   </Test>
// );

// export { Test, TestChildren };
