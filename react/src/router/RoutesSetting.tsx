import React from 'react';
import { Answer } from '../components/pages/Answer';
import { NotFound404 } from '../components/pages/NotFount404';
import { QAList } from '../components/pages/QAList';
import { Question } from '../components/pages/Question';
import { UserProfile } from '../components/pages/UserProfile';
import { UserProfiled } from '../components/pages/UserProfiled';
import { QA } from '../components/pages/QA';

export const RoutesSetting = [
  {
    path: '/',
    children: <QAList />,
  },
  {
    path: '/questions',
    children: <Question />,
  },
  {
    path: '/answer',
    children: <Answer />,
  },
  {
    path: '/questions/:post',
    children: <QA />,
  },
  {
    path: '/user',
    children: <UserProfiled />,
  },
  {
    path: '/user2',
    children: <UserProfile />,
  },
  {
    path: '/*',
    children: <NotFound404 />,
  },
];
