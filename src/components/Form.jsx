import { useRef } from "react";
import AppController from "../controllers/app-controller";

function Form() {
  let controller = new AppController();

  let titleRef = useRef();
  let dateRef = useRef();
  let valueRef = useRef();
  let descriptionRef = useRef();

  let onAddNewExpense = (props) => {
    props.preventDefault();

    if (
      titleRef.current.value !== "" &&
      dateRef.current.value !== "" &&
      valueRef.current.value !== "" &&
      descriptionRef.current.value !== ""
    ) {
      let opj = {
        title: titleRef.current.value,
        date: dateRef.current.value,
        value: valueRef.current.value,
        description: descriptionRef.current.value,
      };
      controller.store(opj);
    } else {
      alert("Enter required data");
    }

    // let setData = () => {
    //   let opj = {
    //     title: titleRef.current.value,
    //     date: dateRef.current.value,
    //     value: valueRef.current.value,
    //     description: descriptionRef.current.value,
    //   };
    //   controller.store(opj);
    // };
  };

  return (
    <form className="row" onSubmit={onAddNewExpense}>
      <div className="mb-3 col-md-6">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control addTitle"
          aria-describedby=""
          ref={titleRef}
        />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control addDate"
          aria-describedby=""
          ref={dateRef}
        />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Value</label>
        <input
          type="number"
          className="form-control addValue"
          aria-describedby=""
          ref={valueRef}
        />
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="title" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control addDescrption"
          aria-describedby=""
          ref={descriptionRef}
        />
      </div>
      <div className="mb-3 col-md-12 text-right">
        <button type="submit" className="btn btn-primary addBtn">
          Add
        </button>
      </div>
    </form>
  );
}
export default Form;
