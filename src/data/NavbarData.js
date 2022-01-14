import React from 'react';
import {FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { MdWeb } from "react-icons/md";


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
    url: '/skills',
    text: 'skills',
    icon: <CgFileDocument />,
  },
  {
    id: 4,
    url: '/projects',
    text: 'projects',
    icon: <MdWeb />,
  },
  {
    id: 5,
    url: '/contact',
    text: 'contact',
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
