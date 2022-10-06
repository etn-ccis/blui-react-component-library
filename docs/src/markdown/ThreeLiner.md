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

### Style Overrides

You can override the default styles used by Brightlayer UI by:

-   using the `sx` prop
-   passing a `classes` prop with keys from the Name column below
-   using the `Global CSS Class` in your main stylesheet

For more details on styling options check out our [Styling Guide](https://github.com/brightlayer-ui/react-component-library/tree/master/docs#style-guide).

| Name     | Global CSS Class         | Description                        |
| -------- | ------------------------ | ---------------------------------- |
| root     | .BluiThreeLiner-root     | Styles applied to the root element |
| title    | .BluiThreeLiner-title    | Styles applied to the first line   |
| subtitle | .BluiThreeLiner-subtitle | Styles applied to the second line  |
| info     | .BluiThreeLiner-info     | Styles applied to the third line   |
