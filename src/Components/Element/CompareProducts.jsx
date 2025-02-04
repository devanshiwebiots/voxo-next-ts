import { PostCartData } from "@/Utils";
import { useRouter } from "next/navigation";
import { RefreshCw } from "react-feather";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CompareProducts = ({ elem, staticActions }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const ProductCompare = () => {
    if (staticActions) {
      router.push("/page/compare");
    } else {
      PostCartData(`/api/addtocompare`, { id: elem?.id })
        .then((res) => {
          dispatch({ type: "CHANGECOMPARE", payload: res?.data });
        })
        .catch((error) => {
          return "There was an error!", error;
        });
      toast.success("Item Added");
    }
  };
  return (
    <li onClick={ProductCompare}>
      <a href="#javascript">
        <RefreshCw />
      </a>
    </li>
  );
};

export default CompareProducts;
