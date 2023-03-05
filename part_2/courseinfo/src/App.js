const Header = (props) => {
  return (
    <><h1>{props.name}</h1></>
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

const Course = (props) => {
  const {name, parts} = props.course
  
  return (
    <div>
      <Header name={name}/>
      <Content parts={parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App