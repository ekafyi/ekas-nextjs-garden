import Link from 'next/link'

import * as S from './styles'

export default function PostSnippet ({ slug, frontMatter }) {
  return (
    <>
      <Link href={slug}>
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
      </S.Date>
    </>
  )
}