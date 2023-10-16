/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "category",
      label: "1. Microservice Meta Framework",
      items:  [
        {
          type: "doc",
          label: "1. Introduction",
          id: "introduction",
        },
        {
          type: "doc",
          label: "2. Design Principles",
          id: "design_principles",
        },
        {
          type: "category",
          label: "3. Getting started",
          items: [
            {
              type: "doc",
              label: "3.1. Overview",
              id: "getting_started/overview"
            },
            {
              type: "doc",
              label: "3.2. Sample project",
              id: "getting_started/create_hello_world"
            },
            {
              type: "doc",
              label: "3.3. Blog project",
              id: "getting_started/create_blog_project"
            },
            // {
            //   type: "doc",
            //   label: "3.4. Godspeed on Existing project",
            //   id: "getting_started/gs_on_existing_proj"
            // }
          ]
        },
        {
          type: "category",
          label: "4. Event Sources",
          items: [
            {
              type: "doc",
              label: "4.1. Overview",
              id: "event_sources/overview"
            },
            {
              type: "doc",
              label: "4.2. Standardized Event Schema",
              id: "event_sources/standardized_event_schema"
            },
            {
              type: "doc",
              label: "4.3. Event Source Plugins",
              id: "event_sources/event_source_plugins"
            },
            {
              type: "doc",
              label: "4.4. Create Your Event Source",
              id: "event_sources/create_your_event_source"
            },
          ],
        },
        {
          type: "category",
          label: "5. Workflows/Functions",
          items: [
            {
              type: "doc",
              label: "5.1. Overview",
              id: "workflows/overview"
            },
            {
              type: "doc",
              label: "5.2. Custom workflows",
              id: "workflows/custom_workflows"
            },
            {
              type: "doc",
              label: "5.3. Inbuilt workflows",
              id: "workflows/inbuilt_workflows"
            },
            // {
            //   type: "doc",
            //   label: "5.4. Retry",
            //   id: "workflows/retry"
            // },
          ],
        },
        {
          type: "category",
          label: "6. Data Sources",
          items: [
            {
              type: "doc",
              label: "6.1. Overview",
              id: "data_sources/overview"
            },
            {
              type: "doc",
              label: "6.2. Data source plugins",
              id: "data_sources/datasource_plugins"
            },
            {
              type: "doc",
              label: "6.3. Create Your data source",
              id: "data_sources/create_your_data_source"
            },
          ],
        },
        // {
        //   type: "category",
        //   label: "7. Authentication",
        //   items: [
        //     {
        //       type: "doc",
        //       label: "7.1. Overview",
        //       id: "authentication/Overview"
        //     },
        //     {
        //       type: "doc",
        //       label: "7.2. Configuration",
        //       id: "authentication/configuration"
        //     },
        //   ],
        // },
        {
          type: "category",
          label: "7. Authorization",
          items: [
            {
              type: "doc",
              label: "7.1. Overview",
              id: "authorization/overview"
            },
          ],
        },
        {
          type: "category",
          label: "8. Config",
          items: [
            {
              type: "doc",
              label: "8.1. Overview",
              id: "config/overview"
            },
          ],
        },
        {
          type: "category",
          label: "9. Caching",
          items: [
            {
              type: "doc",
              label: "9.1. Overview",
              id: "caching/overview"
            },
          ],
        },
        {
          type: "doc",
          label: "10. CLI",
          id: "CLI"
        },
        {
          type: "doc",
          label: "11. Language Tools",
          id: "language_tools"
        },
        {
          type: "category",
          label: "12. Telemetry",
          items: [
            {
              type: "doc",
              label: "12.1. Overview",
              id: "telemetry/overview"
            },
          ],
        },
      ]
      
      
      // {
          //   type: "doc",
          //   label: "1. Introduction",
          //   id: "introduction",
          // },
          // {
          //   type: "doc",
          //   label: "2. Design Principles",
          //   id: "design_principles",
          // },
          // {
          //   type: "category",
          //   label: "3. Getting started",
          //   items: [
          //     {
          //       type: "doc",
          //       label: "3.1. Overview",
          //       id: "getting_started/overview"
          //     },
          //     {
          //       type: "doc",
          //       label: "3.2. Sample project",
          //       id: "getting_started/create_hello_world"
          //     },
          //     {
          //       type: "doc",
          //       label: "3.3. Blog project",
          //       id: "getting_started/create_blog_project"
          //     },
          //     // {
          //     //   type: "doc",
          //     //   label: "3.4. Godspeed on Existing project",
          //     //   id: "getting_started/gs_on_existing_proj"
          //     // }
          //   ]
          // },
          // {
          //   type: "category",
          //   label: "4. Event Sources",
          //   items: [
          //     {
          //       type: "category",
          //       label: "4.1. Events",
          //       items: [
          //         {
          //           type: "doc",
          //           label: "4.1.1. Overview",
          //           id: "events/overview"
          //         },
          //       ],
          //     },
          //     {
          //       type: "doc",
          //       label: "4.2. Overview",
          //       id: "event_sources/overview"
          //     },
          //     {
          //       type: "doc",
          //       label: "4.3. Event Source Plugins",
          //       id: "event_sources/event_source_plugins"
          //     },
          //     {
          //       type: "doc",
          //       label: "4.4. Create Your Event Source",
          //       id: "event_sources/create_your_event_source"
          //     },
          //   ],
          // },
          // {
          //   type: "category",
          //   label: "5. Workflows/Functions",
          //   items: [
          //     {
          //       type: "doc",
          //       label: "5.1. Overview",
          //       id: "workflows/overview"
          //     },
          //     {
          //       type: "doc",
          //       label: "5.2. Custom workflows",
          //       id: "workflows/custom_workflows"
          //     },
          //     {
          //       type: "doc",
          //       label: "5.3. Inbuilt workflows",
          //       id: "workflows/inbuilt_workflows"
          //     },
          //     // {
          //     //   type: "doc",
          //     //   label: "5.4. Retry",
          //     //   id: "workflows/retry"
          //     // },
          //   ],
          // },
          // {
          //   type: "category",
          //   label: "6. Data Sources",
          //   items: [
          //     {
          //       type: "doc",
          //       label: "6.1. Overview",
          //       id: "data_sources/overview"
          //     },
          //     {
          //       type: "doc",
          //       label: "6.2. Data source plugins",
          //       id: "data_sources/datasource_plugins"
          //     },
          //     {
          //       type: "doc",
          //       label: "6.3. Create Your data source",
          //       id: "data_sources/create_your_data_source"
          //     },
          //   ],
          // },
          // // {
          // //   type: "category",
          // //   label: "7. Authentication",
          // //   items: [
          // //     {
          // //       type: "doc",
          // //       label: "7.1. Overview",
          // //       id: "authentication/Overview"
          // //     },
          // //     {
          // //       type: "doc",
          // //       label: "7.2. Configuration",
          // //       id: "authentication/configuration"
          // //     },
          // //   ],
          // // },
          // {
          //   type: "category",
          //   label: "7. Authorization",
          //   items: [
          //     {
          //       type: "doc",
          //       label: "7.1. Overview",
          //       id: "authorization/overview"
          //     },
          //   ],
          // },
          // {
          //   type: "category",
          //   label: "8. Config",
          //   items: [
          //     {
          //       type: "doc",
          //       label: "8.1. Overview",
          //       id: "config/overview"
          //     },
          //   ],
          // },
          // {
          //   type: "category",
          //   label: "9. Caching",
          //   items: [
          //     {
          //       type: "doc",
          //       label: "9.1. Overview",
          //       id: "caching/overview"
          //     },
          //   ],
          // },
          // {
          //   type: "doc",
          //   label: "10. CLI",
          //   id: "CLI"
          // },
          // {
          //   type: "doc",
          //   label: "11. Language Tools",
          //   id: "language_tools"
          // },
          // {
          //   type: "category",
          //   label: "12. Telemetry",
          //   items: [
          //     {
          //       type: "doc",
          //       label: "12.1. Overview",
          //       id: "telemetry/overview"
          //     },
          //   ],
          // }, 
     
   }  ,
   {
    type: "category",
      label: "2. ElasticGraph ORM",
      items:[
        {
          type: "doc",
          label: "2.1. Elasticgraph",
          id: "elasticgraph_orm/elasticgraph"
        },
        {
          type: "doc",
          label: "2.2 Feature Set Of Elasticgraph",
          id: "elasticgraph_orm/feature-set-of-elasticgraph"
        },
      ]
   }
  ]
};

module.exports = sidebars;


