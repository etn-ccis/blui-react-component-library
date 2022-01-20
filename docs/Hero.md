# Hero

The Brightlayer UI `<Hero>` components are used to call attention to particular values that are of the most importance to the user. These are typically displayed in a banner.

<div style="width: 100%; text-align:center">
<img width="100%" style="max-width: 600px" alt="Hero Banner" src="./images/heroes.png">
</div>

The `<Hero>` component displays a particular icon, value/units, and a label. The icon property will accept any valid component - this will typically be a Material icon, [Brightlayer UI icon](https://github.com/brightlayer-ui/icons), or [Progress Icon](https://github.com/brightlayer-ui/icons/tree/master/progress). It will also accept Text/Emoji values.

The value section of the Hero utilizes a [`<ChannelValue>`](./ChannelValue.md) component. To display a single simple value, the information can be passed as props (`value`, `units`, `valueIcon`). For more complex values (such as a duration that displays hours and minutes), you can pass in `<ChannelValue>` components as children and they will be displayed inline.

## Hero Usage

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 500px" alt="Hero Anatomy" src="./images/heroAnatomy.png">
</div>

```tsx
import { Hero } from '@brightlayer-ui/react-components';

// Simple usage passing props
<Hero
    icon={<Icon/>}
    label={'Label'}
    value={99}
    units={'%'}
/>
// Complex example with multiple values as children
<Hero
    icon={<Icon/>}
    label={'Label'}
>
    <ChannelValue value={1} units={'h'} />
    <ChannelValue value={26} units={'m'} />
</Hero>
```

## Hero API

<div style="overflow: auto;">

| Prop Name           | Description                             | Type                    | Required | Default       |
| ------------------- | --------------------------------------- | ----------------------- | -------- | ------------- |
| classes             | Style overrides                         | `HeroClasses`           | no       |               |
| fontSize            | The text size for the value line        | `'normal'` \| `'small'` | no       | 'normal'      |
| icon                | The primary icon                        | `ReactNode`             | yes      |               |
| iconBackgroundColor | The color used behind the primary icon  | `string`                | no       | 'transparent' |
| iconSize            | The size of the primary icon (min 10px) | `number` \| `string`    | no       | 36            |
| label               | The text shown below the `ChannelValue` | `string`                | yes      |               |
| units               | Text to show after the value            | `string`                | no       |               |
| value               | The value for the channel               | `string` \| `number`    | no       |               |
| valueIcon           | The inline icon with the value          | `JSX.Element`           | no       |               |

</div>

Any other props supplied will be provided to the root element (`div`).

### Classes

You can override the classes used by Brightlayer UI by passing a `classes` prop. It supports the following keys:

| Name   | Description                         |
| ------ | ----------------------------------- |
| root   | Styles applied to the root element  |
| icon   | Styles applied to the icon element  |
| label  | Styles applied to the label element |
| values | Styles applied to the value element |

# Hero Banner

The `<HeroBanner>` component is a simple wrapper component that is used to contain `<Hero>`s. It creates the flex container and sets up the spacing rules to display them. It accepts up to four `<Hero>` components as its children.

## Hero Banner Usage

```tsx
import HeroBanner from '@brightlayer-ui/react-components/core/HeroBanner';
import Hero from '@brightlayer-ui/react-components/core/Hero';
...
<HeroBanner divider>
    <Hero/>
    <Hero/>
    <Hero/>
    <Hero/>
</HeroBanner>
```

## Hero Banner API

<div style="overflow: auto;">

| Prop Name | Description                        | Type                | Required | Default |
| --------- | ---------------------------------- | ------------------- | -------- | ------- |
| classes   | Style overrides                    | `HeroBannerClasses` | no       |         |
| divider   | Whether to show the line separator | `boolean`           | no       | false   |
| limit     | Max number of children to display  | `number`            | no       | 4       |

</div>

Any other props supplied will be provided to the root element (`div`).

### Classes

You can override the classes used by Brightlayer UI by passing a `classes` prop. It supports the following keys:

| Name | Description                        |
| ---- | ---------------------------------- |
| root | Styles applied to the root element |
