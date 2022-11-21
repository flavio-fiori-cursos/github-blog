import ReactMarkdown from 'react-markdown'
interface ContentProps {
  body: string
}

export function Content({ body }: ContentProps) {
  return(
    <article className="my-8 text-base-text text-base markdown">
      <ReactMarkdown>{body}</ReactMarkdown>
    </article>
  )
}