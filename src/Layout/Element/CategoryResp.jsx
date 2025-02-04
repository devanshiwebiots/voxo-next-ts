import { CategoryList } from "@/Constant";
import useWindowDimensions from "@/Utils/useWindowDimensions";
import { useDispatch } from "react-redux";

const CategoryResp = () => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const toggleModal = () => {
    if (width > 1200) {
      dispatch({ type: "CATEGORYRESPONSIVE" });
      dispatch({ type: "OVERLAY" });
    }
  };
  return (
    <div className="close-btn d-xl-none" onClick={() => toggleModal()}>
      {CategoryList}
      <span className="back-category">
        <i className="fa fa-angle-left"></i>
      </span>
    </div>
  );
};

export default CategoryResp;
