import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const CommentsPage = () => {
  return (
    <>
      <Metadata title="Comments" description="Comments page" />

      <h1>CommentsPage</h1>
      <p>
        Find me in <code>./web/src/pages/CommentsPage/CommentsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>comments</code>, link to me with `
        <Link to={routes.comments()}>Comments</Link>`
      </p>
    </>
  )
}

export default CommentsPage
