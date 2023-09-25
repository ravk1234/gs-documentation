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
      type: "doc",
      label: "1. Introduction",
      id: "introduction",
    },
    {
      type: "category",
      label: "2. Getting started",
      items: [
        {
          type: "doc",
          label: "2.1. Overview",
          id: "getting_started/overview"
        },
        {
          type: "doc",
          label: "2.2. Creating new project",
          id: "getting_started/create_new_proj"
        },
        {
          type: "doc",
          label: "2.3. Godspeed on Existing project",
          id: "getting_started/gs_on_existing_proj"
        }
      ]
    },
    {
      type: "category",
      label: "3. Event Sources",
      items: [
        {
          type: "category",
          label: "3.1. Events",
          items: [
            {
              type: "doc",
              label: "3.1.1. Overview",
              id: "events/overview"
            },
          ],
        },
        {
          type: "doc",
          label: "3.2. Overview",
          id: "event_sources/overview"
        },
        {
          type: "doc",
          label: "3.3. Custom Event Source",
          id: "event_sources/custom_event_source"
        },
      ],
    },
    {
      type: "category",
      label: "4. Workflows/Functions",
      items: [
        {
          type: "doc",
          label: "4.1. Overview",
          id: "workflows/overview"
        },
        {
          type: "doc",
          label: "4.2. Custom workflows",
          id: "workflows/custom_workflows"
        },
        {
          type: "doc",
          label: "4.3. Inbuilt workflows",
          id: "workflows/inbuilt_workflows"
        },
        {
          type: "doc",
          label: "4.4. Retry",
          id: "workflows/retry"
        },
      ],
    },
    {
      type: "category",
      label: "5. Data Sources",
      items: [
        {
          type: "doc",
          label: "5.1. Overview",
          id: "data_sources/overview"
        },
        {
          type: "doc",
          label: "5.2. Data source plugins",
          id: "data_sources/datasource_plugins"
        },
        {
          type: "doc",
          label: "5.3. Custome data source",
          id: "data_sources/custom_data_source"
        },
      ],
    },
    {
      type: "category",
      label: "6. Authentication",
      items: [
        {
          type: "doc",
          label: "6.1. Overview",
          id: "authentication/Overview"
        },
        {
          type: "doc",
          label: "6.2. Configuration",
          id: "authentication/configuration"
        },
      ],
    },
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
};

module.exports = sidebars;