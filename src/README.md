# Application Structure

* Entry Point
  * index.js
  * App.js
  * routes.js
  * reducer.js
* Modules
  * actions.js
  * api.js
  * ***View.js
  * ***ViewConnected.js
  * utils.js
* Common
  * Component.js
  * utils.js

---

## Entry Point

###### index.js

We set up the most basic needs for the app, a state store, reducers, middleware, inject routes, and then render the application to the DOM.

###### App.js

A base container/skeleton for the app, rendering the header and footer around the main content.

###### routes.js

Where all views are attached to the application's path.  Notice that **views** are their **connected** counterparts, as bringing in non-connected views rarely produced the desired result.

###### reducer.js

Using Redux's `combineReducer`, this is a reducer generally composited by all (applicable) modules' reducers.  Each module's reducer will be a node of the state tree, keyed based on their names here.

## Modules

###### actions.js

Subscribing to the [Ducks](https://github.com/erikras/ducks-modular-redux) methodology: actions, action creators, and reducers (and sometimes [selectors](https://gist.github.com/abhiaiyer91/aaf6e325cf7fc5fd5ebc70192a1fa170)) exist within `actions.js`.  This is done to reduce the amount of import overload generally associated with separating the three into their own files, and the amount of cognitive overhead to manage these separate files for relatively basic tasks.

Since we are using the Thunk middleware, we can easily implement asynchronous actions (useful for handling API responses).  These look a little different than your average action creator.  You'll notice that a Thunk actually returns a function that is given `dispatch` so that you can dispatch more actions in whatever context you need.  In the following example, we'll immediately dispatch an action, and then another after the API Promise resolves:

```javascript
// Generic Action Creators
export const courseSelected = ({ id }) => ({
  type: COURSE_SELECTED,
  courseId: id,
})

export const courseSelectionSaved = (response) => ({
  type: COURSE_SELECTION_SAVED,
  response,
})

// Thunk
export const selectCourseAndSave = ({ id }) => (dispatch) => {
  dispatch(courseSelected({ id }))
    
  saveSelectionViaAPI({ id })
    .then((response) => dispatch(courseSelectionSaved(response)))
}
```



NOTE: If this file grows, the first things to split out are selectors and reducers (in that order).  If you have to split out reducers, you will need to export action constants.  In the newly created `reducer.js` I do not recommend importing all action constants separately, but by using a wildcard import (`import * as ACTIONS from './actions'`).  This will also help by reducing boilerplate of having to add to the imports when you add more functionality.

###### api.js

A collection of API calls, parsing, and formatting.  This is pretty straightforward.  All exported functions should return a Promise.  It is good practice (if you need transformations on incoming and outgoing requests) to create a `parser` (in) and `formatter` (out) for a singular entity.  This way you can tack on to the Promise easily by passing through the object, or mapping the results.

```javascript
const parseCourse = (course) => ({ ...course })
const formatCourse = (course) => ({ ...course })

export const getCourse = ({ id }) => (
  fetch(`/api/courses/${id}`)
    .then((response) => parseCourse(response.course))
)

export const getCourses = () => (
  fetch('/api/courses')
    .then((response) => response.courses.map(parseCourse))
)

export const saveCourse = (params) => (
  fetch('/api/courses', {
    method: 'POST',
    body: formatCourse(params),
  }).then((response) => parseCourse(response.course))
)
```

NOTE: If a module contains several different data types, and many unique API calls are starting to fill this file to capacity, split it out into it's own subdirectory with files for separate data types.

###### ***View.js

A view, even though considerably unique, should still be treated as a reusable component, and left as dumb as possible.  It should have no knowledge of where it's data is coming from.  Two types of properties should be passed to it: formatted data and callbacks.  A good example of this is a view that lists courses:

```jsx
class CoursesView extends PureComponent {
  static propTypes = {
    courses: PropTypes.array,
    onLoad: PropTypes.func,
    onCourseSelect: PropTypes.func,
  }

  static defaultProps = {
    courses: [],
    onLoad: () => ({}),
    onCourseSelect: () => ({})
  }

  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    return (
      <div>
        {courses.map((course) => (
          <a onClick={() => this.props.onCourseSelect(course)}>
            {course.instructorName}
          </a>
        ))}
      </div>
    )
  }
}
```

This view is completely unaware that the connector is going to replace `onLoad` with a callback to fetch the courses, or that `courses` are stored in our Redux state store.  In fact, this component has no idea that we are even using Redux.  Tying those things together is the job of the connector.

###### ***ViewConnected.js

The connector imports a **view component**, maps state values to props (directly, or via a selector), maps actions to props, and passes those props to the component.  If we use the above view component as an example, the connector might look like this:

```javascript
connect(
  // mapStateToProps
  (state) => ({
    courses: state.courses,
  }),
  // mapDispatchToProps
  {
	onLoad: getCourses,
    onCourseSelect: selectCourseAndSave,
  }
)(CoursesView)
```

You'll notice that the keys for the props and actions in `mapDispatchToProps` don't necessarily have to match, but you can see how this could be powerful if you use a different mechanism when a course is selected without having to change anything in the **view component**.

