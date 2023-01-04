package com.smhrd.model;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.smhrd.database.SqlSessionManager;

public class RouteDAO {
	private SqlSessionFactory sqlSessionFactory = SqlSessionManager.getSqlSessionFactory();
	
	public ArrayList<RouteDTO> select_koo() {
		ArrayList<RouteDTO> list = null;
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		list = (ArrayList)sqlSession.selectList("com.smhrd.model.RouteDAO.select_koo");
		sqlSession.close();
		return list;
	}
	
	public ArrayList<RouteDTO> select_ja() {
		ArrayList<RouteDTO> list = null;
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		list = (ArrayList) sqlSession.selectList("com.smhrd.model.RouteDAO.select_ja");
		sqlSession.close();
		return list;
	}
	
	
	
	public ArrayList<RouteDTO> select_bong() {
		ArrayList<RouteDTO> list = null;
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		list = (ArrayList) sqlSession.selectList("com.smhrd.model.RouteDAO.select_bong");
		sqlSession.close();
		return list;
	}
	
	
	
	public ArrayList<RouteDTO> select_kwan() {
		ArrayList<RouteDTO> list = null;
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		list = (ArrayList) sqlSession.selectList("com.smhrd.model.RouteDAO.select_kwan");
		sqlSession.close();
		return list;
	}
	
	
	
	public ArrayList<RouteDTO> select_chang() {
		ArrayList<RouteDTO> list = null;
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		list = (ArrayList) sqlSession.selectList("com.smhrd.model.RouteDAO.select_chang");
		sqlSession.close();
		return list;
	}
	
	
	
	public ArrayList<RouteDTO> select_joong() {
		ArrayList<RouteDTO> list = null;
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		list = (ArrayList) sqlSession.selectList("com.smhrd.model.RouteDAO.select_joong");
		sqlSession.close();
		return list;
	}
	
	
	
	public ArrayList<RouteDTO> select_chae() {
		ArrayList<RouteDTO> list = null;
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		list = (ArrayList) sqlSession.selectList("com.smhrd.model.RouteDAO.select_chae");
		sqlSession.close();
		return list;
	}
	
	
	
	public ArrayList<RouteDTO> select_dong() {
		ArrayList<RouteDTO> list = null;
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		list = (ArrayList) sqlSession.selectList("com.smhrd.model.RouteDAO.select_dong");
		sqlSession.close();
		return list;
	}
	
	
	

	
	
	
}
