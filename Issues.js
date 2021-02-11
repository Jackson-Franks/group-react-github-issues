import { Link } from 'react-router-dom'

function Issues(props) {
    return (
            <div>
                <h1>100 Open Issues</h1>
                <ul>
                    {props.issues.titles.map((issue, i) => {
                        return <li><Link to ={`/issues/${i}`}>{issue}</Link></li>
                    })}
                </ul>
            </div>
    )
}

export default Issues