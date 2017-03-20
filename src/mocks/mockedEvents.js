/* @flow */
import type { Event } from '../types';

const mockedEvents: Event[] = [
  {
    id: 1,
    name: 'Devel 2017',
    description: 'Lorem ipsum',
    url: 'https://example.org',
    start: '2017-04-24T10:00+01:00',
    end: '2017-04-24T12:00+01:00',
    image: 'https://i.imgsafe.org/a5b1b555fc.png',
    tags: [
      {
        id: 1,
        rate: 3,
        name: 'Programování',
        code: 'programovani'
      },
      {
        id: 2,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 3,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 5,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 6,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      }
    ]
  },
  {
    id: 2,
    name: 'Machine Learning Prague 2017',
    description: `Machines can learn. Incredibly fast. Faster than you. They are getting smarter and smarter every day. They are already changing your world, your business and your life. Artificial intelligence revolution is here. Come and learn how to turn this threat into your biggest opportunity. This is not another academic conference. Our goal is to foster discussion between machine learning practitioners and all people who are interested in applications of modern trends in artificial intelligence. You can look forward to inspiring people, algorithms, data, applications, workshops and a lot of fun during three days as well as at two great parties.`,
    url: 'https://example.org',
    start: '2017-04-26T10:00+01:00',
    end: '2017-04-27T10:00+01:00',
    image: 'https://i.imgsafe.org/030bbc1041.jpg',
    tags: [
      {
        id: 1,
        rate: 3,
        name: 'Programování',
        code: 'programovani'
      },
      {
        id: 2,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 3,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 5,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 6,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      }
    ]
  },
  {
    id: 3,
    name: 'Wisephora',
    description: 'Lorem ipsum',
    url: 'https://www.facebook.com/events/258779314553712/',
    start: '2017-05-30T10:00+01:00',
    image: 'https://i.imgsafe.org/e89935b30c.png',
    tags: [
      {
        id: 1,
        rate: 3,
        name: 'Programování',
        code: 'programovani'
      },
      {
        id: 2,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 3,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 5,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      },
      {
        id: 6,
        rate: 5,
        name: 'Konference',
        code: 'konference'
      }
    ]
  }
];

export { mockedEvents };
