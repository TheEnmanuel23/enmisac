var options = {
		responsive: true,
		title: {
			text: 'Skills',
			display: true,
			fontSize: 20,
			fontColor: '#fff',
			position: 'top',
			display: false
		},
		legend: {
			display: false
		},
	scale: {
		gridLines: {
			color: '#fff',
			offsetGridLines: true
		},
		ticks: {
			display: false,
			beginAtZero: true,
			stepSize: 30,
			fontColor: "red"
		},
		angleLines: {
			color: '#fff'
		},
		pointLabels: {
			fontColor: 'white',
			fontSize: 12
		}
	}
}
var data = {
    labels: ["Python", "Django", "Javascript", "NodeJs", "HTML", "CSS", "C#"],
    datasets: [
        {
            label: "Skill",
            backgroundColor: "rgba(59,179,241,0.9)",
            borderColor: "#10587d",
            pointBackgroundColor: "#298dbf",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#298dbf",
            data: [60, 65, 60, 55, 65, 50, 70]
        }
    ]
};

var ctx = document.getElementById('skillsChart');

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});