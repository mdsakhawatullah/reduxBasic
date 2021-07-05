import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { AuthProvider, PrivateRoute } from './LoginDetails/auth'
import Discover from './Pages/Discover'
import FinishedBooks from './Pages/FinishedBooks'
import ReadingList from './Pages/ReadingList'



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Discover} />
          <PrivateRoute path="/reading" component={ReadingList} />
          <PrivateRoute path="/finish" component={FinishedBooks} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App