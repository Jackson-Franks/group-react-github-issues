function Widget (props) {
    let issue = props.issues.filter(issue => issue.id == props.match.params.id)

    return (
        <div>
            <div className="issueInfo">
                <h2>{issue[0].title}</h2>
                <p className="issueNum">#{issue[0].id}</p>
                <p>{issue[0].state}</p>
            </div>
            <div className="issueCont">
                <p>{issue[0].body}</p>
            </div>
        </div>
    )
}

export default Widget