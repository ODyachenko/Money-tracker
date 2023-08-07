import TransactionGroup from '../Tranaction/TransactionGroup';

export default function RecentTransaction() {
  return (
    <section className="recent transaction">
      <div className="container">
        <TransactionGroup title="Recent Transaction" />
      </div>
    </section>
  );
}
