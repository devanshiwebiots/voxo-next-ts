import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Btn } from "@/Components/AbstractElements";
import { Addtocart } from "@/Constant";
import { ADDTOCART } from "@/ReduxToolkit/Reducers/AddtoCartReducer";

const AddtoCartBtn = ({ customeclass, data, btn }) => {
  const dispatch = useDispatch();
  const AddtoCart = () => {
    axios
      .post(`/api/addtocart`, { id: data?.id })
      .then((res) => {
        dispatch(ADDTOCART(res.data));
      })
      .catch((error) => {
        return "There was an error!", error;
      });
    toast.success("Successfully Added to Cart!!");
  };
  useEffect(() => {}, [dispatch]);
  return (
    <>
      {btn ? (
        <Btn attrBtn={{ className: customeclass, onClick: AddtoCart }}>{Addtocart}</Btn>
      ) : (
        <a className={customeclass} onClick={AddtoCart}>
          {Addtocart}
        </a>
      )}
    </>
  );
};

export default AddtoCartBtn;
