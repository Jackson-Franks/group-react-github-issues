function Widget (props) {
    let issue = props.issues.filter(issue => issue.id == props.match.params.id)

    return (
        <div>
            <div>
                <h1>{issue[0].title}</h1>
                {/* <p>{issue[0].body}</p> */}
            </div>
        </div>
    )
}

export default Widget