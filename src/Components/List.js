import { FaTimes } from 'react-icons/fa';
import "../index.css"

const List = ({ link, onDelete, }) => {
    return (
        <div>
            <div className="task">
                <div>
                        <p>
                            {link.linkName}
                        </p>
                        <p>
                            {link.linkUrl}
                        </p>
            </div>
                <div>
                    <p><FaTimes onClick={() => onDelete(link.id)} className="delIcon" /></p>
                </div>
            </div>
        </div>
    )
}
export default List;