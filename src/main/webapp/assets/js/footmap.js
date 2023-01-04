 var per_foot = document.getElementsByClassName("per_foot");
src = "./js/jquery-3.6.1.min.js"



function handleClick(event) {
	console.log(event.target);
	// console.log(this);
	// 콘솔창을 보면 둘다 동일한 값이 나온다

	console.log(event.target.classList);

	if (event.target.classList[1] === "clicked") {
		event.target.classList.remove("clicked");
	} else {
		for (let i = 0; i < per_foot.length; i++) {
			per_foot[i].classList.remove("clicked");
		}

		event.target.classList.add("clicked");
	}
}
 



function init() {
	for (let i = 0; i < per_foot.length; i++) {
		per_foot[i].addEventListener("click", handleClick);
	}
}  

init();






let per_foot1 = document.getElementById("per_foot1");


            var map = null;
			function initMap(List) {
				let zoomcnt=0;
				let latcnt =0;
				let lngcnt =0;
				if(Number(List[0].inp_seq==423)){  // 안창호 
					zoomcnt=3;
					latcnt= Number(List[2].place_lat);
					lngcnt= Number(List[2].place_lon);
				}else if(Number(List[0].inp_seq==430)){  //유관순 
					zoomcnt=8.8;
					latcnt= Number(List[4].place_lat);
					lngcnt= Number(List[4].place_lon);
				}else{   // 나머지 
					zoomcnt= 5;
					latcnt= Number(List[4].place_lat);
					lngcnt= Number(List[4].place_lon);
				}
				
				
				//지도 스타일
				map = new google.maps.Map(document.getElementById('map'), {

					//처음 중심 좌표
					center: {
						
						lat: latcnt,
						lng: lngcnt,
					},

					//처음 줌 값. 숫자가 작을수록 낮은 배율
					zoom: zoomcnt,
				
				});   
				
				



	
  let latlonarr = [];  // 위도 경도 값 이차원 배열로 넣은 것 
  for(i=0;i<List.length;i++){
  latlonarr.push([Number(List[i].place_lat),Number(List[i].place_lon)]);
}
console.log(latlonarr);


/*const flightPlanCoordinates = new object();
for(i=0; i<List.length; i++){
flightPlanCoordinates.lat = latlonarr[i][0]
flightPlanCoordinates.lng = latlonarr[i][1]
}
console.log(flightPlanCoordinates)*/



flightPlanCoordinates = [   //객체 반복 -> 선 긋기에 사용할 것 반복문 사용해서  // 
   
    ];
    
    for(let i=0; i<List.length; i++){
		for(let j = 0;j<1;j++){
			let data = {
				lat : latlonarr[i][j],
				lng : latlonarr[i][j+1]
				
			}
		flightPlanCoordinates.push(data);
		} 
	}
	
	for(let i=0; i<List.length; i++){
		
	}
 

                             
// 좌표 선 긋기 
      const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 1.2,
    
    });
  
    flightPath.setMap(map);



                
   ///////////////////// 마커 정보 ////////////////////////////////////////////////
	let locations= [];  //마커 정보 
	for(let i=0; i<List.length; i++){
		let data =[`<div class="wrap555" ><div class="text-box1313"><h2 style="color:black;"><${List[i].event_date}></h2><h3 style="color:black;">${List[i].phrase}</h3></div>
                <a target="_blank" href="http://localhost:8087/BoardPfoject/GoPeopleDetail.do?inp_seq=${Number(List[i].inp_seq)}"><button style="background-color:yellow; border-style: solid;  border-color:black; border-width: thin;" ><b><h3 style= "color:black;">인물상세페이지</h3></b></button></a></div><a target="_blank" href="http://localhost:8087/BoardPfoject/GoPlaceDetail.do?place_seq=${Number(List[i].place_seq)}"><button style="background-color:pink; border-style: solid;  border-color:black; border-width: thin; "><b><h3 style= "color:black;">문화유산상세페이지</h3></button></b></a></div>`,  
                latlonarr[i][0], latlonarr[i][1]
			
		]
		locations.push(data);
		}
 console.log(locations[0][0]);
 
 
          
//마커 이미지
          

   var myIcon = null; 
   
     


// 인포윈도우 생성 
var infowindow = new google.maps.InfoWindow();
 
            //마커 생성
            var marker, i;
            for (i = 0; i < locations.length; i++) {
	              var myIcon = null; 
	      /*1번째마커*/   if(locations[i][1]==latlonarr[0][0]){
		        myIcon= new google.maps.MarkerImage("./assets/css/images/1.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[1][0]) {
			    myIcon= new google.maps.MarkerImage("./assets/css/images/2.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[2][0]){
			    myIcon= new google.maps.MarkerImage("./assets/css/images/3.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[3][0]){
		        myIcon= new google.maps.MarkerImage("./assets/css/images/4.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[4][0]){
			    myIcon= new google.maps.MarkerImage("./assets/css/images/5.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[5][0]){
			     myIcon= new google.maps.MarkerImage("./assets/css/images/6.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[6][0]){
			     myIcon= new google.maps.MarkerImage("./assets/css/images/7.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[7][0]){
			      myIcon= new google.maps.MarkerImage("./assets/css/images/8.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[8][0]){
			      myIcon= new google.maps.MarkerImage("./assets/css/images/9.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[9][0]){
			      myIcon= new google.maps.MarkerImage("./assets/css/images/10.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[10][0]){
			      myIcon= new google.maps.MarkerImage("./assets/css/images/11.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[11][0]){
			      myIcon= new google.maps.MarkerImage("./assets/css/images/12.png", null, null, null, new google.maps.Size(40 ,20));
		        }else if(locations[i][1]==latlonarr[12][0]){
	               myIcon= new google.maps.MarkerImage("./assets/css/images/13.png", null, null, null, new google.maps.Size(40 ,20));
	            }else if(locations[i][1]==latlonarr[13][0]){
		           myIcon= new google.maps.MarkerImage("./assets/css/images/14.png", null, null, null, new google.maps.Size(40 ,20));
	            }else{
		/*15*/     myIcon= new google.maps.MarkerImage("./assets/css/images/15.png", null, null, null, new google.maps.Size(40 ,20));
	            }
                marker = new google.maps.Marker({
                    
                    //마커의 위치
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    //지도 
                    map,
                    //마커 아이콘
                    icon: myIcon,
                    title: "number",
                    //마커를 표시할 지도
                    
                });
         
google.maps.event.addListener(marker, 'click', (function(marker, i) {  //클릭 하면 이벤트 -> 마커정보 
                    return function() {
                        
                        //html로 표시될 인포 윈도우의 내용
                        infowindow.setContent(locations[i][0]);
                        
                        //인포윈도우가 표시될 위치
                        infowindow.open(map, marker);
                    }
                })(marker, i));
                
                if (marker) {
                    marker.addListener('click', function() {
                        
                        //중심 위치를 클릭된 마커의 위치로 변경
                        map.setCenter(this.getPosition());
 
                        //마커 클릭 시의 줌 변화
                        map.setZoom(15);
                    });
                }
                
                if (marker) {
                    marker.addListener('dblclick', function() {
                        
                        //중심 위치를 클릭된 마커의 위치로 변경
                        map.setCenter(this.getPosition());
 
                        //마커 클릭 시의 줌 변화
                        map.setZoom(zoomcnt);
                        
                        infowindow.close(map, marker); //윈포윈도우 닫기 
                    });
                }
             
                
            }/// 모든 마커 생성, 기능 정보  중괄호 !! 
            
            


 // default icon 이미지 설정 
 
 
 
 
 







}   

			

let getData1 = () => {
	$.ajax({
		url: "AjaxConkoo.do",
		dataType: "json",

		//객체로 보내거나~ 문자열로 보내거나 
		//단일값으로만 보낼수 있다. 
		success: function(data) {
			let kooList = data;
			console.log(data);   
			initMap(kooList);

		},

	});

}


per_foot1.addEventListener("click", getData1);






let per_foot2 = document.getElementById("per_foot2");

let getData2 = () => {
	$.ajax({
		url: "AjaxConja.do",
		dataType: "json",

		//객체로 보내거나~ 문자열로 보내거나 
		//단일값으로만 보낼수 있다. 
		success: function(data) {
			console.log(data)
			let jaList = data;
			initMap(jaList);
		},

	});
	

}
per_foot2.addEventListener("click", getData2);








let per_foot3 = document.getElementById("per_foot3");
let getData3 = () => {
	$.ajax({
		url: "AjaxConchang.do",
		dataType: "json",

		//객체로 보내거나~ 문자열로 보내거나 
		//단일값으로만 보낼수 있다. 
		success: function(data) {
			console.log(data)
			let changList = data;
			initMap(changList);
		},

	});

}




per_foot3.addEventListener("click", getData3);

let per_foot4 = document.getElementById("per_foot4");

// 서버에 데이터를 요청하는 함수 
let getData4 = () => {
	$.ajax({
		url: "AjaxConjoong.do",
		dataType: "json",

		//객체로 보내거나~ 문자열로 보내거나 
		//단일값으로만 보낼수 있다. 
		success: function(data) {
			console.log(data)
			let joongList = data;
			initMap(joongList);
		},

	});

}
per_foot4.addEventListener("click", getData4);

let per_foot5 = document.getElementById("per_foot5");

let getData5 = () => {
	$.ajax({
		url: "AjaxCondong.do",
		dataType: "json",

		//객체로 보내거나~ 문자열로 보내거나 
		//단일값으로만 보낼수 있다. 
		success: function(data) {
			console.log(data)
			let dongList = data;
			initMap(dongList);
		},

	});

}
per_foot5.addEventListener("click", getData5);


let per_foot6 = document.getElementById("per_foot6");

let getData6 = () => {
	$.ajax({
		url: "AjaxConchae.do",
		dataType: "json",

		//객체로 보내거나~ 문자열로 보내거나 
		//단일값으로만 보낼수 있다. 
		success: function(data) {
			console.log(data)
			let chaeList = data;
			initMap(chaeList);
		},

	});

}
per_foot6.addEventListener("click", getData6);

let per_foot7 = document.getElementById("per_foot7");
let getData7 = () => {
	$.ajax({
		url: "AjaxConbong.do",
		dataType: "json",

		//객체로 보내거나~ 문자열로 보내거나 
		//단일값으로만 보낼수 있다. 
		success: function(data) {
			console.log(data)
			let bongList = data;
			initMap(bongList);
		},

	});

}
per_foot7.addEventListener("click", getData7);

let per_foot8 = document.getElementById("per_foot8");
let getData8 = () => {
	$.ajax({
		url: "AjaxConkwan.do",
		dataType: "json",

		//객체로 보내거나~ 문자열로 보내거나 
		//단일값으로만 보낼수 있다. 
		success: function(data) {
			console.log(data)
			let kwanList = data;
			initMap(kwanList);
		},

	});

}
per_foot8.addEventListener("click", getData8);