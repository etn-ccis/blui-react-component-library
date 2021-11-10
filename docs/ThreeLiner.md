# Three Liner

The `ThreeLiner` can display up to three lines of stylized text or other custom content. It is most commonly used within the context of a [`AppBar`](./AppBar.md) component where the text can grow / shrink as the App Bar is expanded and collapsed.

## API

<div style="overflow: auto;">

| Prop Name         | Description                                       | Type                | Required | Default                               |
| ----------------- | ------------------------------------------------- | ------------------- | -------- | ------------------------------------- |
| animationDuration | Time in milliseconds to transition between states | `number`            | no       | `theme.transitions.duration.standard` |
| classes           | Style overrides                                   | `ThreeLinerClasses` | no       |                                       |
| info              | Third line content                                | `ReactNode`         | no       |                                       |
| title             | First line content                                | `ReactNode`         | no       |                                       |
| subtitle          | Second line content                               | `ReactNode`         | no       |                                       |

</div>
### Classes

You can override the classes used by Brightlayer UI by passing a `classes` prop. It supports the following keys:

| Name     | Description                        |
| -------- | ---------------------------------- |
| root     | Styles applied to the root element |
| title    | Styles applied to the first line   |
| subtitle | Styles applied to the second line  |
| info     | Styles applied to the third line   |
