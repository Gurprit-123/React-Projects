import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bags = () => {
  const bagItems = useSelector((state) => state.bags);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem item={item} key={item.id} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bags;
