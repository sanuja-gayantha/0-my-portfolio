import React from 'react';
import {FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { MdWeb } from "react-icons/md";

// photos
import photoApp from './images/photoApp.png';
import GitHubUser from './images/git-hub-users.png';
import HackerNews from './images/hacker-news.png';
import Python from './images/python.jpg';
import MyPortfolio from './images/my-portfolio.png';
import FeelMusic from './images/feel_music.png';


export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    icon: <IoPersonOutline />,
  },
  {
    id: 3,
    url: '/projectsbar',
    text: 'projects',
    icon: <MdWeb />,
  }
  ,
  {
    id: 4,
    url: '/contact',
    text: 'contact me',
    icon: <FiMail />,
  },
];

export const social = [
    {
        id: 1,
        url: 'https://www.linkedin.com/in/sanuja-gayantha-630115201/',
        icon: <FaLinkedin />,
    },
    {
        id: 2,
        url: 'https://www.facebook.com/',
        icon: <FaFacebook />,
    },
    {
        id: 3,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    },
];





export const projectBarData = [
  {
    id: 1,
    title: 'Photo app',
    category: 'r',
    img: photoApp,
    desc: `This is react based mobile responsive web app that uses unsplash.com API. Users can check and search photos on unsplash.com.`,
    app_url:'https://unsplash-photo-app-by-sanuja.netlify.app/'
  },
  {
    id: 2,
    title: 'Github user',
    category: 'r',
    img: GitHubUser,
    desc: `This is react based web app that uses GitHub API. It displays GitHub user statistics. Used packages like axios, Auth0, react-router-dom, etc.`,
    app_url:'https://github-users-by-sanuja.netlify.app/'
  },
  {
    id: 3,
    title: 'Hacker News',
    category: 'r',
    img: HackerNews,
    desc: `This is react based mobile responsive web app that uses hn.algolia.com API. Users can search, read and remove news articles.`,
    app_url:'https://hacker-news-app-by-sanuja.netlify.app'
  },
];

export const projectsData = [
  {
    id: 1,
    title: 'Photo app',
    category: 'r',
    img: photoApp,
    desc: `This is react based mobile responsive web app that uses unsplash.com API. Users can check and search photos on unsplash.com.`,
    app_url:'https://unsplash-photo-app-by-sanuja.netlify.app/',
    external_link:'https://github.com/sanuja-gayantha/unsplash-photo-app'
  },
  {
    id: 2,
    title: 'Github user',
    category: 'r',
    img: GitHubUser,
    desc: `This is react based web app that uses GitHub API. It displays GitHub user statistics. Used packages like axios, Auth0, react-router-dom, etc.`,
    app_url:'https://github-users-by-sanuja.netlify.app/',
    external_link:''
  },
  {
    id: 3,
    title: 'Hacker News',
    category: 'r',
    img: HackerNews,
    desc: `This is react based mobile responsive web app that uses hn.algolia.com API. Users can search, read and remove news articles.`,
    app_url:'https://hacker-news-app-by-sanuja.netlify.app',
    external_link:''
  },
  {
    id: 4,
    title: 'Feel music',
    category: 'c',
    img: FeelMusic,
    desc: `under developing`,
    app_url:'https://feel-music-by-sanuja.netlify.app',
    external_link:''
  },
  {
    id: 5,
    title: 'My portfolio website',
    category: 'c',
    img: MyPortfolio,
    desc: `This is my portfolio website code. It is react based and fully mobile responsive.`,
    app_url:'https://sanuja-portfolio.netlify.app/s',
    external_link:''
  },
  {
    id: 98,
    title: 'Excel to text converter softwere',
    category: 'c',
    img: Python,
    desc: `This is a python based software tool that was developed for Chiefway
    Katunayake (Pvt) Ltd IT manager. It helps to convert company employees salary, bonus, incentive & OT excel files automatically into a text file format. so .txt files can easily send to the bank without any delay.`,
    app_url:'https://drive.google.com/drive/folders/1Rab8fBHZWs5pILDGOsoCCJ5u6RQ2IiAS?usp=sharing',
    external_link:''
  },
  {
    id: 99,
    title: 'Share market index data scraper',
    category: 'c',
    img: Python,
    desc: `This is a python based GUI software tool that was developed for a customer in Fiverr.com. When a user runs the script it goes through an excel file then scrapes data
    from capital.com websites and update the excel. used libraries like PyQt5,
    selenium, requests, pandas, openpyxl, etc.`,
    app_url:'https://drive.google.com/drive/folders/14lNpfMVB3A5OFQGVLyljwxOn8cdIS_lO?usp=sharing',
    external_link:''
  },
  {
    id: 100,
    title: 'Crypto prices collector',
    category: 'c',
    img: Python,
    desc: `This is a python based software tool that was developed for a customer in Fiverr.com. It scrapes the latest price data from binance.com according to given excel file records. used libraries like requests, pandas, openpyxl, etc`,
    app_url:'https://drive.google.com/drive/folders/1veBGgbUCp8dc0AopJ5t7h9QG4f-pXBB7',
    external_link:''
  },
];