import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import LocaleToggle from '@site/src/components/LocaleToggle';

// Register a custom navbar item type usable as {type: 'custom-localeToggle'}.
export default {
  ...ComponentTypes,
  'custom-localeToggle': LocaleToggle,
};
