	 var neighborhoods = [
        {lat: 24.026382, lng: -104.657797},
        {lat: 24.001142, lng: -104.641624},
        {lat: 23.993592, lng: -104.662860}
      ];

      var markers = [];
      var map;
       var image = 'img/iconMap.png';

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 24.0123207, lng: -104.6500426}
        });
        for (var i = 0; i < neighborhoods.length; i++) {
          addMarkerWithTimeout(neighborhoods[i], i * 200);
        }
      }

   

      function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
          markers.push(new google.maps.Marker({
            position: position,
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP
          }));
        }, timeout);
      }


   /* $(function () {
   new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', enero: 20,febrero: 40 },
    { year: '2009', enero: 10,febrero: 19 },
    { year: '2010', enero: 5 ,febrero: 20 },
    { year: '2011', enero: 5 ,febrero: 21 },
    { year: '2012', enero: 20,febrero: 5 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['enero','febrero'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['enero','febrero'],
  resize:true,
  lineColors: ['#27ae60','#e74c3c']
});*/

    /*new Morris.Donut({
  element: 'dona',
  data: [
    {value: 70, label: 'foo'},
    {value: 15, label: 'bar'},
    {value: 10, label: 'baz'},
    {value: 5, label: 'A really really long label'}
  ],resize:true,
  formatter: function (x) { return x + "%"}
}).on('click', function(i, row){
  console.log(i, row);
});




    });*/