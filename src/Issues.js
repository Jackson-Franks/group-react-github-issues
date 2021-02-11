import { Link } from 'react-router-dom'
import './App.css'

function Issues(props) {
    return (
            <div>
                <h1>100 Open Issues</h1>
                <ul>

                    {props.issues.map((issue, i) => {
                        return <li className="list"><Link to ={`/issues/${i}`}>{issue.title}</Link></li>

                    })}
                </ul>
            </div>
    )
}

export default Issues