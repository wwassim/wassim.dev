export default {
  name: 'product',
  type: 'document',
  title: 'product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of project',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Project image',
    },
    {
      name: 'github',
      type: 'string',
      title: 'Github Link',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
  ],
}
