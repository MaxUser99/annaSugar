const userRouterPages = [
  'admin',
  'blog',
  'reviews',
  'catalog/bracelets',
  'catalog/kindles',
  'catalog/beads',
  'catalog/others',
];

// const redirects = [
//   { fromPath: '/catalog', toPath: '/catalog/bracelets'}
// ];

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, createRedirect } = actions

  userRouterPages.forEach(path => {
    if (page.path.match(`^\/${path}/`)) {
      page.matchPath = `/${path}/*`;
      createPage(page);
    }
  });

  // redirects.forEach(({ fromPath, toPath }) => {
  //   createRedirect({
  //     fromPath,
  //     toPath,
  //     redirectInBrowser: true,
  //     // isPermanent: true
  //   });
  // })
};
