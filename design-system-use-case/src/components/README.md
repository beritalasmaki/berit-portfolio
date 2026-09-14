# Components

This folder holds the React components used across the design system.

## System components

`buttons`, `cards`, `navigation` and `table` are the design system
components themselves. They read their values from the tokens in
`src/data`, so appearance is controlled centrally rather than component
by component. If you want to change how something looks, start from the
tokens rather than editing a component directly.

## Documentation components

`documentation` and `examples` are not part of the design system. They
are the components used to build the site that presents it.

- `ComponentPage` and `TokenPage` are page templates that keep every
  documentation page consistent
- `CodeTabs` displays
