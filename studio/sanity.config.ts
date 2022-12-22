import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'deliveryio',

  projectId: 'ihpsdg5b',
  dataset: 'prod',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
