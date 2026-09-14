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
- `CodeTabs` displays code samples
- `DeviceMockup` frames example interfaces in a desktop view

## Why both live here

These two groups serve different purposes, and in a larger system they
would sit in separate folders. With eight components in total, one
folder is still easier to navigate than two. As the system grows, these
will be split into `ui/` and `docs/`.

## Note on naming

`examples` appears twice in this project. This folder holds the mockup
component. The pages that use it live in `src/app/examples`.
