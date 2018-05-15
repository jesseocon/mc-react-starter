import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AppView from './app/AppView'
// import DashboardView from './courses/DashboardViewConnected'
import CoursesView from './courses/CoursesViewConnected'
import SelectedCoursesView from './courses/SelectedCoursesViewConnected'

export default class Routes extends PureComponent {
  render() {
    return (
      <Router>
        <AppView>
          <Switch>
            <Route exact path='/' component={CoursesView} />
            <Route exact path='/courses' component={CoursesView} />
            <Route exact path='/courses/selected' component={SelectedCoursesView} />
          </Switch>
        </AppView>
      </Router>
    )
  }
}
