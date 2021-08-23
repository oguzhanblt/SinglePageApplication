import { FaTimes,FaArrowUp,FaArrowDown } from 'react-icons/fa';
import "../index.css"

const List = ({ link, onDelete,scoreUp,scoreDown }) => {
    return (
        <div>
            <div className="task">
                <pre> <FaArrowUp class="fa fa-chevron-up"  onClick={()=>scoreUp(link.id)} />
                <br/>
                <br/>
                        {link.linkScore}
                <br/>
                <br/>
               <FaArrowDown class="fa fa-chevron-down" onClick={()=>scoreDown(link.id)} /></pre>

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