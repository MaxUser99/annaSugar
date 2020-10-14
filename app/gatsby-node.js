exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/admin/)) {
    page.matchPath = "/admin/*"
    createPage(page)
  }

  if (page.path.match(/^\/blog/)) {
    page.matchPath = "/blog/*"
    createPage(page)
  }
}