import { useSelector, useDispatch } from "react-redux";
import { incrementQty, decrementQty } from "../store/Reducers/productsReducer";

const QtySelector = ({ productId }) => {

    const dispatch = useDispatch();
    const product = useSelector((state) =>
        state.productReducer.selectedProduct.find(
            (p) => p.productId === productId
        )
    );
    const qty = product?.qty || 1;

    const handleIncrement = () => dispatch(incrementQty(productId));
    const handleDecrement = () => dispatch(decrementQty(productId));

    return (
        <div className="w-full max-w-[7rem] max-sm:mt-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 max-sm:text-xs">
                Qty
            </label>
            <div className="flex items-center border border-zinc-200 rounded overflow-hidden">
                <button
                    onClick={handleDecrement}
                    className="w-8 py-1 text-base font-semibold text-gray-600 hover:bg-zinc-100 active:scale-95 transition-all duration-100 max-sm:w-7 max-sm:text-sm"
                >
                    -
                </button>
                <div className="flex-1 text-center px-2 text-sm max-sm:text-xs">
                    {qty}
                </div>
                <button
                    onClick={handleIncrement}
                    className="w-8 py-1 text-base font-semibold text-gray-600 hover:bg-zinc-100 active:scale-95 transition-all duration-100 max-sm:w-7 max-sm:text-sm"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default QtySelector;
