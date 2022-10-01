export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63380ffba7b24e56811960f1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-yo3dpb39",
                  apiId: "ed3d2a8a-9407-458a-967f-ef28f2727f0e",
                },
                {
                  buildHookId: "63380ffbe3f39c543495de00",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-dtd6pyen",
                  apiId: "3ea8c724-821f-4df8-8563-387785c3d5c3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DylPayne/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-dtd6pyen.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
