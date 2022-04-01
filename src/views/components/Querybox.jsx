
const Querybox = (props) => {
    return (
        <div className="query-box">
            <p>{props.title}</p>
            <span>{props.content}</span>
        </div>
    )
}

export default Querybox;