var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        type: 'column'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
        
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]        
    }]
});

// button handler
var y = 30;
$('#button').click(function() {
   chart.series[0].data[0].update(y += 10); 
});