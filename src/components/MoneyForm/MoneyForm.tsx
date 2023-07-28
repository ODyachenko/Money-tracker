import './style.scss';

type MoneyType = {
  amount: number;
  category: string;
  description: string;
  date: string;
  time: string;
};

export default function MoneyForm({
  data,
  setData,
}: {
  data: MoneyType;
  setData: any;
}) {
  function onChangeHandler(event: any) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function onClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <form action="/" className="money__form">
      <h3 className="money__subtitle">How much?</h3>
      <label className="money__count">
        $
        <input
          type="number"
          name="amount"
          value={data.amount}
          onChange={onChangeHandler}
        />
      </label>
      <div className="money__settings">
        <select
          className="money__field money--category"
          name="category"
          value={data.category}
          onChange={onChangeHandler}
        >
          <option>Category</option>
          <option value="Shopping">Shopping</option>
          <option value="Subscription">Subscription</option>
          <option value="Food">Food</option>
        </select>
        <input
          className="money__field money--description"
          name="description"
          value={data.description}
          onChange={onChangeHandler}
          type="text"
          placeholder="Description"
          required
        />
        <input
          className="money__field money--date"
          type="date"
          name="date"
          value={data.date}
          onChange={onChangeHandler}
          required
        />
        <input
          className="money__field money--time"
          type="time"
          name="time"
          value={data.time}
          onChange={onChangeHandler}
          required
        />
        <button
          onClick={onClickHandler}
          className="money__btn primary-btn"
          type="submit"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
