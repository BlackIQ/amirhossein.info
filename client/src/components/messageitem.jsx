const MessageItem = (props) => {
    const message = props.message;

    return (
        <div>
            <h1>{message.title}</h1>
            <p>{message.message}</p>
        </div>
    );
}

export default MessageItem;