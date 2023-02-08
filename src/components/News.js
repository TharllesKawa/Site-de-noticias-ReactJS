import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll } from "framer-motion"


const NewsCardOrganization = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const NewsCardContainer = styled.div`
    min-width: 550px;
    min-height: 550px;
    width: 30%;
    background-color: #f2f2f2;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        min-width: 350px;
        min-height: 350px;
    }
`;

const NewsTitleH1 = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 1rem;
    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

const NewsTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const NewsDescription = styled.p`
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1rem;
`;

const Image = styled.img`
    width: 450px;
    height: 350px;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        width: 250px;
        height: 150px;
    }
`;


const News = () => {

    const fetchNews = async () => {
        try {
          const response = await axios.get(
            'https://newsapi.org/v2/top-headlines?country=br&apiKey=a691af7926774465a4f20e78c666ffa1&pageSize=100&fields=title,description,urlToImage'
          );
          const { articles } = response.data;
          return articles;
        } catch (error) {
          console.error(error);
        }
      };      
    
      const [news, setNews] = useState([]);
    
      useEffect(() => {
        fetchNews().then(articles => setNews(articles));
      }, []);

        return (
        <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        >
                <NewsTitleH1>Novas Notícias</NewsTitleH1>
                <NewsCardOrganization >
                {news.map(article => (
                    <NewsCardContainer key={article.title} className='animation'>
                    <Image src={article.urlToImage} />
                    <NewsTitle>{article.title}</NewsTitle>
                    <NewsDescription>{article.description}</NewsDescription>
                  </NewsCardContainer>
              ))}
                </NewsCardOrganization>
        </motion.div>
        );
      }

export default News