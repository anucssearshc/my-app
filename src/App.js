import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import { Link } from 'react-router-dom'
const App = ({ history }) => {
  return (
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
    <div>
    <Link to="/hello" >Help</Link><br />
    <Link to="/counter">Parts</Link><br />
      { routes }
      </div>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
