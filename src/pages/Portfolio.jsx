// use project component multiple times
import Project from '../components/Project';


export default function Portfolio(){


    return(
        <>
        <h3>Portfolio</h3>
        <section>portfolio will contain project components:
            <Project thing="something"/>
            <Project thing="something else"/>
            <Project thing="a third thing"/>
        </section>
        </>
    )
}