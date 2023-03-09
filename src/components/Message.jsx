function Message({ type, children }) {
    return (
        <div className={`message message__${type}`}>
            <p>{children}</p>
        </div>
    )
}

export default Message
