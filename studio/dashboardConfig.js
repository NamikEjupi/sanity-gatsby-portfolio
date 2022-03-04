export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '622172d6f93034145efeb8d3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-p8h2hhi8',
                  apiId: 'a831ecd3-1d6a-4ffb-830f-5ef340ed834b'
                },
                {
                  buildHookId: '622172d63a3c2011665a91a9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-g6pod5mo',
                  apiId: '33370d9c-255c-4cea-81c5-b848615c175a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NamikEjupi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-g6pod5mo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
