import { Post } from './post';

export const POSTS: Post[] = [
  {content: 'blablabla blablabla blablabla blablabla blablabla ' +
      'blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla ' +
      'blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla ' +
      'blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla ' +
      'blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla ', title: 'test1 ', loveIts: 1, created_at: new Date()},
  {title: 'test12', content: 'blablabla2', loveIts: -1, created_at: new Date()},
  {title: 'test13', content: 'blablabla3', loveIts: 0, created_at: new Date()}
];
