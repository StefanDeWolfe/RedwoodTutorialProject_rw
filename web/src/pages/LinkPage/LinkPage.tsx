import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const LinkPage = ({page_id}) => {
  return (
    <>
      <Metadata title="Link" description="Link page" />

      <h1>LinkPage {page_id}</h1>
      <p>
        Find me in <code>./web/src/pages/LinkPage/LinkPage.tsx</code>
      </p>
      <p>
        My default route is named <code>link</code>, link to me with `
        <Link to={routes.link({ page_id })}>Link</Link>`
      </p>
    </>
  )
}

export default LinkPage
