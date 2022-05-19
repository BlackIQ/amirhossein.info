import { useHistory } from 'react-router-dom';

const MessageItem = (props) => {
    const message = props.message;

    const history = useHistory();

    return (
        <tr class="pointer" onClick={() => history.push(`/messages/${message._id}`)}>
            <th scope="row">{message.name}</th>
            <td>{message.title}</td>
            <td>{message.createdAt}</td>
            <td>{message.read.toString()}</td>
        </tr>
    );
}

export default MessageItem;