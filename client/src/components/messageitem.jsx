const MessageItem = (props) => {
    const message = props.message;

    return (
        <tr class="pointer" onClick={() => window.location.href = `/messages/${message._id}`}>
            <th scope="row">{message.name}</th>
            <td>{message.title}</td>
            <td>{message.createdAt}</td>
            <td>{message.read.toString()}</td>
        </tr>
    );
}

export default MessageItem;