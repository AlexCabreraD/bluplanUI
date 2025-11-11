import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "hoverName",
      title: "Display Name",
      type: "string",
      description: "Name shown on cards and hover states",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "hoverAddress",
      title: "Address",
      type: "string",
      description: 'Street address shown on hover (e.g., "39th Street,San Diego, CA")',
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'City and state (e.g., "San Diego, CA")',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Residential", value: "Residential" },
          { title: "Commercial", value: "Commercial" },
        ],
      },
      initialValue: "Residential",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Built", value: "Built" },
          { title: "In Progress", value: "In Progress" },
          { title: "Planned", value: "Planned" },
        ],
      },
      initialValue: "Built",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: Rule => Rule.required().integer().positive(),
    }),
    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
      validation: Rule => Rule.required().integer().positive(),
    }),
    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: "sqft",
      title: "Square Feet",
      type: "number",
      validation: Rule => Rule.required().integer().positive(),
    }),
    defineField({
      name: "cars",
      title: "Garage Spaces",
      type: "number",
      validation: Rule => Rule.required().integer().positive(),
    }),
    defineField({
      name: "stories",
      title: "Number of Stories",
      type: "number",
      validation: Rule => Rule.integer().positive(),
    }),
    defineField({
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      description: "Main image shown on project cards",
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Large hero image at the top of project detail page",
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of key features for this project",
    }),
    defineField({
      name: "services",
      title: "Services Provided",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Custom Design", value: "Custom Design" },
          { title: "Construction Documents", value: "Construction Documents" },
          { title: "3D Modeling", value: "3D Modeling" },
          { title: "Permit Management", value: "Permit Management" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured on Home Page",
      type: "boolean",
      description: "Display this project in the home page carousel",
      initialValue: false,
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image for Home Page",
      type: "image",
      description: "Image shown in home page carousel (if different from thumbnail)",
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => !document?.featured,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "thumbnailImage",
    },
  },
});
