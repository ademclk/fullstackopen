const Header = ({name}) => {
    return <h3>{name}</h3>;
};

const Content = ({parts}) => {
    return (
        <div>
            {parts.map((p) => (
                <Part key={p.id} name={p.name} exercises={p.exercises}/>
            ))}
        </div>
    );
};

const Part = ({name, exercises}) => {
    return (
        <p>
            {name} {exercises}
        </p>
    );
};

const Total = ({parts}) => {
    const numberOfExercises = parts.reduce((sum, part) => {
        return sum + part.exercises;
    }, 0);

    return <h4>Number of exercises {numberOfExercises}</h4>;
};

const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    );
};

export default Course;