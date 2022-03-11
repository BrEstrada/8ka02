# React With Styled Components

-   Configure styled components
-   Extensions for styled components snippets..
-   Create a global stylesheet..
-   Styled components you use createGlobalStyle

```js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: red;
    }
`;
export { GlobalStyles };
```
