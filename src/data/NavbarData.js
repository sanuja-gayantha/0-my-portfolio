import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/technologies',
    text: 'technologies',
  },
  {
    id: 4,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 5,
    url: '/contact',
    text: 'contact',
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
