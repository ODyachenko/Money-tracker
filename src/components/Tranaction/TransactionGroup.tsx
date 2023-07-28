import TransactionItem from './TransactionItem';
import shoppingBag from '../../assets/img/shopping_bag.svg';
import subscription from '../../assets/img/recurring_bill.svg';
import food from '../../assets/img/restaurant.svg';

export default function TransactionGroup({ title }: { title: string }) {
  return (
    <div className="transaction__group">
      <h2 className="transaction__group-title section-title">{title}</h2>
      <ul className="transaction__group-list">
        <TransactionItem
          icon={shoppingBag}
          caption="Shopping"
          description="Buy some grocery"
          amount="- $120"
          time="9:00"
        />
        <TransactionItem
          icon={subscription}
          caption="Subscription"
          description="Netflix + Youtube"
          amount="- $80"
          time="12:00"
        />
        <TransactionItem
          icon={food}
          caption="Food"
          description="Buy a ramen"
          amount="- $132"
          time="15:00"
        />
      </ul>
    </div>
  );
}
