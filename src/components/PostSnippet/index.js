import Link from 'next/link'

import * as S from './styles'

export default function PostSnippet ({ slug, frontMatter }) {
  return (
    <>
      <Link href={slug}  prefetch={false}>
        <a style={{
          fontSize: '25px',
          textDecoration: 'none',
          color: 'black'
        }}>
          {frontMatter.title}
        </a>
      </Link>
      <S.Date>
        {frontMatter.date}
        &nbsp;&nbsp;
        {typeof frontMatter.tags !== 'undefined' && (
          <>
            Tagged {frontMatter.tags.join(", ")}
          </>
        )}
      </S.Date>
    </>
  )
}