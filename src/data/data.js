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
    url: '/projects',
    text: 'projects',
    icon: <MdWeb />,
  },
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
        url: 'https://www.twitter.com',
        icon: <FaLinkedin />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
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
    category: 'recreate',
    img: photoApp,
    desc: `This is react based mobile responsive web app that uses unsplash.com API. Users can check and search photos on unsplash.com.`,
    app_url:'https://unsplash-photo-app-by-sanuja.netlify.app/'
  },
  {
    id: 2,
    title: 'Github user',
    category: 'recreate',
    img: GitHubUser,
    desc: `This is react based web app that uses GitHub API. It displays GitHub user statistics. Used packages like axios, Auth0, react-router-dom, etc.`,
    app_url:'https://github-users-by-sanuja.netlify.app/'
  },
  {
    id: 3,
    title: 'Hacker News',
    category: 'recreacte',
    img: HackerNews,
    desc: `This is react based mobile responsive web app that uses hn.algolia.com API. Users can search, read and remove news articles.`,
    app_url:'https://hacker-news-app-by-sanuja.netlify.app'
  },
];