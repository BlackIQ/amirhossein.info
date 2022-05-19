const MessageItem = (props) => {
    const message = props.message;

    return (
        <tr class="">
            <th scope="row">{message.name}</th>
            <td>{message.title}</td>
            <td>{message.createdAt}</td>
            <td className="text-center">
                <button onClick={() => window.location.href = `/messages/${message._id}`} className="btn btn-sm btn-primary">Open</button>
            </td>
        </tr>
    );
}

export default MessageItem;