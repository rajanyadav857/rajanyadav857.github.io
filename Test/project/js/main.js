
//piechart
google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Work',     11],
  ['Eat',      2],
  ['Commute',  2],
  ['Watch TV', 2],
  ['Sleep',    7]
]);

var options = {
  title: 'My Daily Activities',
  is3D: true,
};
var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
chart.draw(data, options);
var chart = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
chart.draw(data, options);
}




// line chart
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
  var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));
  chart.draw(data, options);
}



