const Header = (props) => {
  return (
    <><h2>{props.name}</h2></>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part}/>)}
    </div>
  )
}

const Part = (props) => {
  const {name, exercises} = props.part
  return (
    <p>{name}: {exercises}</p>
  )
}

const Total = (props) => {
const total = props.parts.reduce((acc, part) => acc+part.exercises, 0)
  return <><p><b>total of {total} exercises</b></p></>
}

const Course = (props) => {
  const {name, parts} = props.course
  
  return (
    <div>
      <Header name={name}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}

export default App