import { LineChart } from '@mui/x-charts/LineChart';

export default function SpendChart({ expenses }: { expenses: number[] }) {
  return (
    <LineChart
      xAxis={[
        {
          data: [0, 4, 7, 10, 13, 16, 19, 21, 23],
        },
      ]}
      margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
      sx={{
        '& .MuiLineElement-root': {
          strokeWidth: 6,
        },
        '& .MuiAreaElement-root': {
          fill: "url('#myGradient')",
        },
      }}
      series={[
        {
          data: expenses,
          label: '$',
          color: '#7f3dff',
          area: true,
        },
      ]}
      leftAxis={null}
      bottomAxis={null}
      width={320}
      height={150}
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="#e7d8ff" />
          <stop offset="95%" stopColor="#fff" />
        </linearGradient>
      </defs>
    </LineChart>
  );
}
