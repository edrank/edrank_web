import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	BarElement,
	LinearScale,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

function SaGraph({ saData, chartType }) {
	ChartJS.register(
		ArcElement,
		Tooltip,
		Legend,
		CategoryScale,
		LinearScale,
		BarElement,
	);
	return chartType === 'Doughnut' ? (
		<Doughnut
			datasetIdKey='id'
			data={{
				labels: Object.keys(saData),
				datasets: [
					{
						id: 1,
						label: '',
						data: Object.values(saData),
						backgroundColor: [
							'rgba(255, 0, 21, 0.719)',
							'rgba(238, 255, 0, 0.747)',
							'rgba(60, 255, 0, 0.7)',
							'rgba(40, 169, 255, 0.747)',
							'rgba(176, 40, 255, 0.747)',
						],
					},
				],
			}}
		/>
	) : (
		<Bar
			datasetIdKey='id1'
			options={{
				indexAxis: 'y',
				responsive: true,
				plugins: {
					legend: {
						display: false,
					},
				},
			}}
			data={{
				labels: Object.keys(saData),
				datasets: [
					{
						id: 1,
						label: 'Questions',
						data: Object.values(saData),
						backgroundColor: [
							'rgba(255, 0, 21, 0.719)',
							'rgba(238, 255, 0, 0.747)',
							'rgba(60, 255, 0, 0.7)',
							'rgba(40, 169, 255, 0.747)',
							'rgba(176, 40, 255, 0.747)',
						],
					},
				],
			}}
		/>
	);
}

export default SaGraph;
