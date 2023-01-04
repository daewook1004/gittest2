<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
      <%@ taglib uri ="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
		<title>독립 발자취</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/footmap.css?after">
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
		<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
		<link
		
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
/> 


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>


<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
	<style> 
	  .gmnoprint, .gm-control-active.gm-fullscreen-control {
            display: none;
            text-align: center;"
        }
        
    </style>   
	
	
	</head>


	<body class="landing is-preload">
	
	<div class ="S">
			
	
	

		
		<div class="top1">
			
			<a href ="GoMain.do"><img src="./images/footlogo.png" alt="" id = "footlogo" style="
		position: relative;
		top: -17px;"></a>
			
			
			
			<c:if test="${m_id==null}">
			
			<button onclick = "location.href='GoLogin.do'" id ="btn1" >LOGIN</button> 
			<button onclick = "location.href='GoJoin.do'" id = "btn2" >JOIN</button> 
		
				<h1 id="message">로그인 해 주세요~~</h1>
				
			</c:if>
				<c:if test="${m_id!=null }">
					<button onclick = "location.href='Logout.do'" style="
		    display: inline;
    position: relative;
    width: 200px;
    font-size: 10px;
    top: -113px;
    right: -1400px; ">LOGOUT</button> 
					
				<h1 id="message"> ${m_nick} 님 환영 합니다. </h1>
		
				</c:if>
		<div id = "foot">
				
					<li><a href="GoFootmap.do" style="color: orange;">발자취</a></li>
					<li><a href="GoCulmap.do">유산 지도</a></li>
					<li><a href="GoPeople.do">인물소개</a></li>
					<li><a href="GoPlace.do">장소소개</a></li>
					<li><a href="SelectAll.do">커뮤니티</a></li>
			</div>
				</div >
				
			 <div class="div1">
      <div class="per_foot" id = "per_foot1">김구</div>
      <div class="per_foot" id = "per_foot2">김좌진</div>
      <div class="per_foot" id = "per_foot3">안창호</div>
      <div class="per_foot" id = "per_foot4">안중근</div>
      
      <div class="per_foot" id = "per_foot5">윤동주</div>
      <div class="per_foot" id = "per_foot6">신채호</div>
      <div class="per_foot" id = "per_foot7">윤봉길</div>
      <div class="per_foot" id = "per_foot8">유관순</div>

    </div>

		<div id="map" style="border: solid; width:1900px; height:700px; position: relative; top: 65px; text-align: center;"></div>

		
		<script 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLI4aEZqQAP3F4eQUFhl9tJ2Q0VwM_HeA&callback=initMap&libraries=&v=weekly"
        async>
  		 
        </script> 
		
		
		
		
		</div>
			
			
			
			


			<div class = "footmap">
			
			
			
			
			</div>





<!-- footer -->




			
<script src="assets/js/footmap.js"></script>
		



</body>
</html>