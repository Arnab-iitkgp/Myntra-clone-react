import { useSelector } from "react-redux";
import BagItem from "../components/BagItems";
import BagSummary from "../components/BagSummary";
import WelcomeCart from "../components/WelcomeCart";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((itm) => {
    return bagItems.includes(itm.id);
  });
  return (
    <>
      <main>
        {bagItems.length === 0 ? (
          <WelcomeCart />
        ) : (
          <div className="bag-page">
            <div className="bag-items-container">
              {finalItems.map((itm) => (
                <BagItem item={itm} />
              ))}
            </div>
            <BagSummary />
          </div>
        )}
      </main>
    </>
  );
};
export default Bag;
