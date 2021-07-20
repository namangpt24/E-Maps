// fetch("/coviddata.json")
// .then(response => response.json)
// .then(rsp=>{
//     //  rsp.data.forEach(element => {
//          const dt=rsp.data;
//          console.log(dt);
//       //  const date=data.date;
//       //  const dailycases=data.dailyconfirmed;
//       //  console.log(date,dailycases);
//         //  new mapboxgl.Marker({
//         //     draggable: true
//         //     })
//         //     .setLngLat([0,0])
//         //     .addTo(map);

// // });
//  })
mapboxgl.accessToken = 'pk.eyJ1IjoibmFtYW5ncHQiLCJhIjoiY2txYzBwczlyMHJxejJub3YwcjdleHdxbyJ9.r6ygHLn4Tq9NKQNU_FD5QQ';

navigator.geolocation.getCurrentPosition(successlocation,errorlocation,{
  enableHighAccuracy: true
})
function successlocation(position)
{
  console.log(position);
  exactlocation([position.coords.longitude,position.coords.latitude]);
}

function errorlocation(){
exactlocation([-2.24,53.48])
}


function exactlocation(center)
{
 
 const map=new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: center,
  zoom: 14
  })  
  var nav = new mapboxgl.NavigationControl();
  map.addControl(nav);
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
    
  });
  map.addControl(directions, 'top-left');
}





