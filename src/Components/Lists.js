import List from "./List";
import "../index.css"

const Lists = ({ links, onDelete, scoreUp,scoreDown }) => {
  return (
    <>
      {
        links.map((link) => (
          <List key={link.id} link={link} onDelete={onDelete} scoreUp={scoreUp} scoreDown={scoreDown} />
        ))
      }
    </>
    )
}
export default Lists;