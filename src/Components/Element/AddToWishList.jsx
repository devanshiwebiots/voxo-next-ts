import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Heart } from "react-feather";
import { useDispatch } from "react-redux";
import { PostCartData } from "@/Utils";
import { ADDTOWISHLIST } from "@/ReduxToolkit/Reducers/AddtoCartReducer";

const AddToWishList = ({ elem, staticActions }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const AddtoWishList = () => {
    if (staticActions) {
      router.push("/page/wishlist");
    } else {
      PostCartData(`/api/addtowishlist`, { id: elem?.id })
        .then((res) => {
          dispatch(ADDTOWISHLIST(res?.data));
        })
        .catch((error) => {
          return "There was an error!", error;
        });
      router.push(`/page/wishlist`);
    }
  };
  useEffect(() => {}, [dispatch]);
  return (
    <li onClick={() => AddtoWishList()}>
      <a href="#javascript" className="wishlist">
        <Heart />
      </a>
    </li>
  );
};

export default AddToWishList;
