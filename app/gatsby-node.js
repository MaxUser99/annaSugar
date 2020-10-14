const userRouterPages = ['admin', 'blog', 'reviews'];

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  userRouterPages.forEach(path => {
    if (page.path.match(`^\/${path}/`)) {
      page.matchPath = `/${path}/*`;
      createPage(page);
    }
  });
};
