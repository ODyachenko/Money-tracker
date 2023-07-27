import TransactionItem from './TransactionItem';
import shoppingBag from '../../assets/img/shopping_bag.svg';
import subscription from '../../assets/img/recurring_bill.svg';
import food from '../../assets/img/restaurant.svg';
import './style.scss';

export default function RecentTransaction() {
  return (
    <section className="recent">
      <div className="container">
        <h2 className="recent__title section-title">Recent Transaction</h2>
        <ul className="recent__transaction">
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
    </section>
  );
}
