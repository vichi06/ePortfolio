import Button from "../button";

import "./index.css";

import { BsArrowRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function Category({ tab, onClick, isHidden, isSelected }) {
  return (
    <div className={`Category ${isHidden ? "hideC" : ""}`} onClick={onClick}>
      <div>
        <h1>{tab.title}</h1>
        <p>({tab.desc})</p>
      </div>
      <div>
        <Button>
          {isSelected ? <IoMdClose size={20} /> : <BsArrowRight size={20} />}
        </Button>
      </div>
    </div>
  );
}

export default Category;
