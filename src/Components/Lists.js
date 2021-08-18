import List from "./List";
import "../index.css"

const Lists = ({ links, onDelete, onEdit }) => {
  return (
    <>
      {
        links.map((link) => (
          <List key={link.id} link={link} onDelete={onDelete} />
        ))
      }
    </>
    )
}
export default Lists;