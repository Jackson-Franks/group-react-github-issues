import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
        <h1>Look, we all hate github. You're not alone.</h1>
        <Link to="/issues">Here are the latest, hottest Github issues!</Link>
        </div>
    )
}

export default Home