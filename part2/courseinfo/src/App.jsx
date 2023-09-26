const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
}

const Part = ({ name, exercises}) =>{
  return(
  <p>{name} {exercises}</p>
  )
}

const Content = ({ parts }) =>{
  return(
    
    <div>
      {parts.map(part => (
        <div key={part.id}>
          <Part name={part.name} exercises={part.exercises}/>
        </div>
      ))}
    </div>
  )
}

const Course = ({courses}) =>{
  
  return(
    <>
    {courses.map(course => (
      <div key={course.id}>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    ))}
    </>
  )
}

const Total = ({ parts }) =>{
  const totalExercises = parts.reduce((s, p) => s + p.exercises, 0);

  return(
    <b><p>Number of exercises {totalExercises}</p></b>
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
      <Header course="Web development curriculum"/>
      <Course courses={courses}/>
    </div>
  )
}


export default App
