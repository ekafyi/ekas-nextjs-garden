
import fs from 'fs'
import MDX from '@mdx-js/runtime'
import ReactDOM from 'react-dom/server'
import matter from 'gray-matter'
import glob from 'fast-glob'
import { getSlug } from "../utils/get-mdx";

import * as components from 'components'

const contentGlob = "content/**/*.mdx";

export async function getStaticPaths() {
  const files = glob.sync(contentGlob)

  const paths = files
    .map(file => {
      return {
        params: {
          slug: getSlug(file),
        },
      };
    })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const files = glob.sync(contentGlob)

  const fullPath = files.filter(item => {
    return getSlug(item) === slug
  })[0]

  const mdxSource = fs.readFileSync(fullPath)
  const { content, data } = matter(mdxSource)

  if (!fullPath) {
    console.warn('No MDX file found for slug')
  }

  return {
    props: {
      mdxHtml: ReactDOM.renderToStaticMarkup(
        <MDX components={components}>
          {content}
        </MDX>
      ),
      frontMatter: data || {}
    }
  }
}

export default components.PostPage