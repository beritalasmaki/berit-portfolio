This folder holds the design tokens for the system: the colour, typography and spacing values everything else is built from.

Tokens live here in one file rather than inside individual components, so a value is defined once and referenced everywhere. Changing a token updates the whole system consistently, instead of hunting down hardcoded values across files.

Components in src/components read from these tokens. If you're looking to change how something looks, start here rather than in the component itself.
