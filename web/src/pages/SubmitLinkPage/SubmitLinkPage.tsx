import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SubmitLinkPage = () => {
  return (
    <>
      <Metadata title="SubmitLink" description="SubmitLink page" />

      <h1>SubmitLinkPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/SubmitLinkPage/SubmitLinkPage.tsx</code>
      </p>
      <p>
        My default route is named <code>submitLink</code>, link to me with `
        <Link to={routes.submitLink()}>SubmitLink</Link>`
      </p>
    </>
  )
}

export default SubmitLinkPage
