export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f98aa161e4eb34b33146288',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-2-studio-twq6w83a',
                  apiId: 'e30913bc-98c9-494b-a3d2-0f707019a2d2'
                },
                {
                  buildHookId: '5f98aa17bb06f2321fcea60d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-2-web-pd69k77g',
                  apiId: '2e85220d-f356-4985-843b-4f585c61c486'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kris-Ringler/sanity-gatsby-blog-2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-2-web-pd69k77g.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
