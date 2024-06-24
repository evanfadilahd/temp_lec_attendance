import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl('./i18n/i18n.ts');

export default withNextIntl({
  output: 'standalone',
});