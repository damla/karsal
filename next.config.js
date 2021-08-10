module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["tr", "en"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "tr",
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  extends: [
    'plugin:@next/next/recommended',
  ],
};
