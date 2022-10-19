# drop-down-npm-package

## Installation

```
npm i @n0tadm1n/drop-down-menu --save
```

## Usage

```js
import { createDropDownMenu } from "./index.js";

createDropDownMenu(
  //add all the list items in an array with each item having 2 properties - name(name to display) & link (href link)
  [
    { name: "Main", link: "#main" },
    { name: "Sub-1", link: "#sub-1" },
    { name: "Sub-3", link: "#sub-2" },
    { name: "Github", link: "https://github.com/N0tAdm1n" },
  ],

  //second arguement for width of the button (will be in rem, defaults to 10rem, if used less than 10 the drop-down-menu will be set to fit content size)
  "5"
);
```
