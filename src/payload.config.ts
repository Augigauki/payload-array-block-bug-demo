import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import { Pages } from './collections/Pages'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Pages],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  localization: {
		locales: [
			{
				label: {
					en: 'English',
					nb: 'Engelsk',
					se: 'Engelsk',
				},
				code: 'en',
			},
			{
				label: {
					en: 'Norwegian',
					nb: 'Norsk',
					se: 'Norska',
				},
				code: 'no',
			},
			{
				label: {
					en: 'Swedish',
					nb: 'Svensk',
					se: 'Svenska',
				},
				code: 'se',
			},
		],
		defaultLocale: 'en',
		fallback: true,
	},
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})
