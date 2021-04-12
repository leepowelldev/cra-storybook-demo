import {
  Button,
  variants,
  icons,
  tags,
  types,
} from './components/button-complex';
import { List } from './components/List/List';
// import { Button, variants, icons, tags, types } from "./button-infer";
// import { Button, variants, icons, tags, types } from "./button-simple";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button
        // disabled
        icon={icons.tick}
        // isFullWidth
        // isTransparent
        variant={variants.tertiary}
        // tag={tags.a}
        // type={types.submit}
      >
        Hello
      </Button>
    </div>
  );
}
