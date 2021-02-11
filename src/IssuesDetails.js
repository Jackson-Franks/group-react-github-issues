function IssuesDetails (props) {
    return (
        <div>
            <div>
                <h1>{props.issues[props.match.params.id]}</h1>
            </div>
        </div>
    )
}

export default IssuesDetails