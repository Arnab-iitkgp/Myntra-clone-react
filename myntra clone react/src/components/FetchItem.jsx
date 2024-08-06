import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  console.log(fetchStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        dispatch(fetchStatusAction.markFetchDone());
        // console.log(fetchStatus);
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(itemsAction.addInitialItems(data.items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return;
};
export default FetchItem;
