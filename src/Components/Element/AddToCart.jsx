import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ShoppingBag } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddToCartProduct = ({ elem, staticActions }) => {
  const { addToCartModal } = useSelector((state) => state.ModalReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const AddtoCart = () => {
    if (staticActions) {
      router.push("/page/cart");
    } else {
      dispatch({ type: "ISCARTADD", payload: !addToCartModal, elem });
      axios
        .post("/api/addtocart", { id: elem?.id })
        .then((res) => {
          dispatch({ type: "ADDTOCART", payload: res.data });
        })
        .catch((error) => {
          return "There was an error!", error;
        });
      toast.success("Successfully Added to Cart!!");
    }
  };
  useEffect(() => {}, [dispatch]);
  return (
    <>
      <li onClick={AddtoCart}>
        <a href="#javascript" className="addtocart-btn">
          <ShoppingBag />
        </a>
      </li>
    </>
  );
};

export default AddToCartProduct;
