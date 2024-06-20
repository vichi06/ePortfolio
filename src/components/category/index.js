import Button from "../button";
import "./index.css";
import { BsArrowRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function Category({ tab, select, close, closed, selected }) {
  return (
    <div
      className="Category"
      onClick={selected ? close : select}
      style={closed ? { opacity: 0, height: 0, pointerEvents: "none" } : {}}
    >
      <div>
        <h1>{tab.title}</h1>
        <p>({tab.desc})</p>
      </div>
      <div>
        <Button>
          {selected ? <IoMdClose size={20} /> : <BsArrowRight size={20} />}
        </Button>
      </div>
    </div>
  );
}

export default Category;
