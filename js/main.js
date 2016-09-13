
/////////////*LINE CHART*///////////
var jsonData1 = '{ "labels" :  [ "48", "49", "50", "51", "52"], "series" : [{ "name" : "Net Comp", "data": ["510", "600", "800", "900", "300"]}, {"name" : "Analyzer HR", "data":[ "400", "370", "570", "650", "200"]}, {"name" : "Question Right", "data":[ "250", "100", "300", "280", "50"]}]}';
var data1 = JSON.parse(jsonData1);


 var options1 = {
	
  showArea: true,
  lineSmooth: false,
  plugins: [
       Chartist.plugins.legend({
          position: 'bottom'
       })
   ],
  
  axisX: {	  	
  	labelInterpolationFnc: function(value) {
    return 'Week ' + value;},
    labelOffset: {
        x: 4,
        y: 0
      }
   },

  axisY: {
  	type: Chartist.FixedScaleAxis,   
  	low: 0,
	  high: 1000,
	  ticks: [ 0, 500, 1000],
	  labelOffset: {
        x: 0,
        y: 15
      }
   }

 };


var chart1 = new Chartist.Line('#myLineChart', data1, options1);


chart1.on('draw', function(data) {
  if(data.type === 'point') 
  {
    var circle = new Chartist.Svg('circle');
    circle.addClass('ct-circle'); 
    circle.attr({
            cx: [data.x], 
            cy:[data.y], 
            r:[5]
    });
    data.element.replace(circle);
  }
});

chart1.on('draw', function(data){
  if (data.type ==='label' && data.index ===0 && data.axis.units.pos === 'y')
  {  
    var dollar = new Chartist.Svg('text');
    dollar.addClass('ct-dollar ct-label ct-vertical ct-start');
    dollar.text('$');
    dollar.attr({
            x: [data.x + 30],
            y: [data.y + 40]
    });
    data.element.replace(dollar);
  }
});

chart1.on('draw', function(data){
	if (data.type ==='grid' && data.index !==0 && data.axis.units.pos === 'x')
	{
		data.element.remove();
	}

});

/////////*TICKS*//////////

var drawVerticalTicks = function(data){
    if (data.type ==='grid' && data.axis.units.pos === 'x')
    {
      var startPos = data.x1;
      data.group.elem('line', {
        x1: startPos,
        x2: startPos,
        y1: data.y2,
        y2: data.y2 + 20
      }, 
      'ct-tick ct-grid')
      }
};

var drawVerticalTicksOffset = function(data){
    if (data.type ==='grid' && data.axis.units.pos === 'x')
    {
      var startPos = data.x1;
      var offset = data.axis.stepLength;
      data.group.elem('line', {
        x1: startPos + offset/2,
        x2: startPos + offset/2,
        y1: data.y2,
        y2: data.y2 + 20
      }, 
      'ct-tick ct-grid')
      }
};

var drawHorizontalTicks = function(data){
    if (data.type ==='grid' && data.axis.units.pos === 'y' && data.index > 0)
    {   
      var startPos = data.y1;
      data.group.elem('line', {
        x1: data.x1,
        x2: data.x1 - 30,
        y1: startPos,
        y2: startPos
      }, 
      'ct-tick ct-grid')
    }
};

chart1.on('draw', drawVerticalTicks);
chart1.on('draw', drawHorizontalTicks);

/////////*MASK*//////
chart1.on('created', function(data) {
  var mask = data.svg.elem('defs').elem('mask', {
    id: 'myMask'
  });
  mask.elem('rect', {
    width: '100%',
    height: '100%',
    fill: 'white'
  });
  mask.append(data.svg.querySelector('.ct-series.ct-series-c .ct-area')).attr({
    style: 'fill: black'
  });
  data.svg.querySelector('.ct-series.ct-series-a').attr({
    mask: 'url(#myMask)'
  });
});



/////////*BAR CHART*/////////


var jsonData2 = '{ "labels" :  [ "48", "49", "50", "51", "52"], "series" : [{ "name" : "Net Comp", "data": ["6", "7", "8", "9", "3"]}, {"name" : "Analyzer HR", "data":[ "4", "3", "5", "7", "2"]}, {"name" : "Question Right", "data":[ "3", "1", "3", "3", "1"]}]}';
var data2 = JSON.parse(jsonData2);

var options2 = {
  showArea: true,
  plugins: [
       Chartist.plugins.legend({
          position: 'bottom'
       })
   ],

  axisX: {
  	labelInterpolationFnc: function(value) {
    return 'Week ' + value;}
   },

  axisY: {
  type: Chartist.FixedScaleAxis,   
  low: 0,
	high: 10,
	ticks: [ 0, 5, 10],
	labelOffset: {
        x: 0,
        y: 15
      }
   }

};


var chart2 = new Chartist.Bar('#myBarChart', data2, options2);

chart2.on('draw', function(data){
  if (data.type ==='grid' && data.index !==0 && data.axis.units.pos === 'x')
  {
    data.element.remove();
  }

});

chart2.on('draw', function(data){
  if (data.type ==='label' && data.index ===0 && data.axis.units.pos === 'y')
  {
    data.element.remove();
  }

});

chart2.on('draw', drawVerticalTicksOffset);
chart2.on('draw', drawHorizontalTicks);











