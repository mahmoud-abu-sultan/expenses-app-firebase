import AppController from "../controllers/app-controller";

function Row(props) {
  let controller = new AppController();

  let onDeleteExpense = () => {
    controller.delete(props.item.id);
  };
  return (
    <tr>
      <td> {props.item.title} </td>
      <td> {props.item.date}</td>
      <td> {props.item.value}$ </td>
      <td colSpan="2"> {props.item.description} </td>
      <td className="text-right">
        <a href="#" className="delete" onClick={onDeleteExpense}>
          <i className="fa fa-trash-o" aria-hidden="true" />
        </a>
      </td>
    </tr>
  );
}
export default Row;
