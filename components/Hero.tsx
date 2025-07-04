import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AvatarLayout from '@/layouts/AvatarLayout'
import { coreContent } from 'pliny/utils/contentlayer'

export default function Hero() {
  // choose author to be in the Hero page
  const author = allAuthors.find((p) => p.slug === 'dhanushka-jayagoda') as Authors
  const mainContent = coreContent(author)

  return (
    <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
      <div className="max-w-2xl pt-6">
        <h1 className="pb-6 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Hi, I'm Dhanushka
        </h1>
        <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
          <strong>{`// `}</strong>
          {`Bio in progress...`}
        </h2>
      </div>
      <AvatarLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AvatarLayout>
    </div>
  )
}
