package com.smhrd.model;

public class RouteDTO {
	private String route_seq;
	private String inp_seq;
	private String place_seq;
	private String phrase;
	private String event_date;
	private String order_num;
	private String place_name;
	private String place_lat;
	private String place_lon;
	
	public String getPhrase() {
		return phrase;
	}
	public void setPhrase(String phrase) {
		this.phrase = phrase;
	}
	public String getPlace_name() {
		return place_name;
	}
	public void setPlace_name(String place_name) {
		this.place_name = place_name;
	}
	public String getPlace_lat() {
		return place_lat;
	}
	public void setPlace_lat(String place_lat) {
		this.place_lat = place_lat;
	}
	public String getPlace_lon() {
		return place_lon;
	}
	public void setPlace_lon(String place_lon) {
		this.place_lon = place_lon;
	}
	public String getRoute_seq() {
		return route_seq;
	}
	public void setRoute_seq(String route_seq) {
		this.route_seq = route_seq;
	}
	public String getInp_seq() {
		return inp_seq;
	}
	public void setInp_seq(String inp_seq) {
		this.inp_seq = inp_seq;
	}
	public String getPlace_seq() {
		return place_seq;
	}
	public void setPlace_seq(String place_seq) {
		this.place_seq = place_seq;
	}
	
	public String getEvent_date() {
		return event_date;
	}
	public void setEvent_date(String event_date) {
		this.event_date = event_date;
	}
	public String getOrder_num() {
		return order_num;
	}
	public void setOrder_num(String order_num) {
		this.order_num = order_num;
	}
}






