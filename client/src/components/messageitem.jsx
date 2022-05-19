const MessageItem = (props) => {
    const message = props.message;

    return (
        <tr class="pointer">
            <th scope="row">{message.name}</th>
            <td>{message.title}</td>
            <td>{message.createdAt}</td>
            <td>{message.read}</td>
        </tr>
    );
}

export default MessageItem;