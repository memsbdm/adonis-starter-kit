import { type SchemaRules } from '@adonisjs/lucid/types/schema_generator'

export default {
  columns: {
    id: {
      tsType: 'UUID',
      decorator: '@column({ isPrimary: true })',
      imports: [{ source: '#app/core/types', typeImports: ['UUID'] }],
    },
  },

  types: {
    uuid: {
      tsType: 'UUID',
      decorator: '@column()',
      imports: [{ source: '#app/core/types', typeImports: ['UUID'] }],
    },
  },

  tables: {},
} satisfies SchemaRules
