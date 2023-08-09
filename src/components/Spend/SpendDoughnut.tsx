import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { TransactionType } from '../../redux/slices/transactionSlice';
import { SpendCategiries } from './Spend';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SpendDoughnut({
  categories,
}: {
  categories: SpendCategiries;
}) {
  const { transaction } = useSelector(
    (state: React.ComponentState) => state.transaction
  );

  const moneyData = categories.names.map((value: string) => {
    return transaction
      .filter((item: TransactionType) => item.category === value)
      .reduce((result: number, value: TransactionType) => {
        return result + value.amount;
      }, 0);
  });

  const data = {
    labels: categories.names,
    datasets: [
      {
        data: moneyData,
        backgroundColor: categories.colors,
        borderColor: categories.colors,
        cutout: '80%',
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart: any) {
      const { ctx } = chart;

      ctx.save();
      ctx.font = 'bolder 30px Inter';
      ctx.fillStyle = '#292b2d';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
    },
  };

  return <Doughnut data={data} options={options} plugins={[textCenter]} />;
}
