import {ways} from "../data.js";
import WayToTeach from "./WayToTeach.jsx";

export default function TeachingSection() {
return (
    <section>
        <h3>Наш подход к обученибю</h3>
        <ul>
            {ways.map(way => (<WayToTeach {...way} key={way.title} />))}

        </ul>
    </section>
)
}