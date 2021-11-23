const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const eventComponent = path.resolve('./src/templates/event-template.js')
  const programComponent = path.resolve('./src/templates/program-template.js')
  const announcementComponent = path.resolve('./src/templates/announcement-template.js')

  const result = await graphql(
    `
      {
        allContentfulEvent {
          nodes {
            slug
          }
        }
        allContentfulProgram {
          nodes {
            slug
          }
        }
        allContentfulAnnouncement {
          nodes {
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const events = result.data.allContentfulEvent.nodes
  const programs = result.data.allContentfulProgram.nodes
  const announcements = result.data.allContentfulAnnouncement.nodes


  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL
  events.forEach(ev => {
    createPage({
      path: `/events/${ev.slug}/`,
      component: eventComponent,
      context: {
        slug: ev.slug,
      },
    })
  })
  programs.forEach(prog => {
    createPage({
      path: `/programs/${prog.slug}/`,
      component: programComponent,
      context: {
        slug: prog.slug,
      },
    })
  })
  announcements.forEach(ann => {
    createPage({
      path: `/announcement/${ann.slug}/`,
      component: announcementComponent,
      context: {
        slug: ann.slug,
      },
    })
  })

  // if (posts.length > 0) {
  //   posts.forEach((post, index) => {
  //     const previousPostSlug = index === 0 ? null : posts[index - 1].slug
  //     const nextPostSlug =
  //       index === posts.length - 1 ? null : posts[index + 1].slug

  //     createPage({
  //       path: `/blog/${post.slug}/`,
  //       component: blogPost,
  //       context: {
  //         slug: post.slug,
  //         previousPostSlug,
  //         nextPostSlug,
  //       },
  //     })
  //   })
  // }
}