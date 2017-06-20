/* @flow */
import type { Event } from '../../types/model';

const mockedEvents: Event[] = [
  {
    id: '7f0386b06616c2db3ca022b34875ad7d',
    name: 'Devel 2017',
    description: 'Lorem ipsum',
    url: 'https://example.org',
    start: '2017-04-24T10:00+01:00',
    end: '2017-04-24T12:00+01:00',
    image: 'https://i.imgsafe.org/a5b1b555fc.png',
    tags: [
      {
        code: 'programovani',
        name: 'Programování',
        rate: 3
      },
      {
        code: 'konference',
        name: 'Konference',
        rate: 5
      },
      {
        code: 'javascript',
        name: 'JavaScript',
        rate: 3
      },
      {
        code: 'php',
        name: 'PHP',
        rate: 2
      }
    ]
  },
  {
    id: 'e32f3aa0ea2ed4935bc747659d2104bd',
    name: 'Machine Learning Prague 2017',
    description: `Machines can learn. Incredibly fast. Faster than you. They are getting smarter and smarter every day. They are already changing your world, your business and your life. Artificial intelligence revolution is here. Come and learn how to turn this threat into your biggest opportunity. This is not another academic conference. Our goal is to foster discussion between machine learning practitioners and all people who are interested in applications of modern trends in artificial intelligence. You can look forward to inspiring people, algorithms, data, applications, workshops and a lot of fun during three days as well as at two great parties.`,
    url: 'https://example.org',
    start: '2017-04-26T00:00+01:00',
    end: '2017-04-27T00:00+01:00',
    image: 'https://i.imgsafe.org/030bbc1041.jpg',
    tags: [
      {
        code: 'programovani',
        name: 'Programování',
        rate: 3
      },
      {
        code: 'konference',
        name: 'Konference',
        rate: 4
      },
      {
        code: 'machinelearning',
        name: 'Machine Learning',
        rate: 5
      },
      {
        code: 'ai',
        name: 'Umělá inteligence',
        rate: 1
      },
      {
        code: 'networking',
        name: 'Networking',
        rate: 2
      }
    ]
  },
  {
    id: 'd9b566c6dd9fe95e3559582f9f1882a7',
    name: 'Wisephora',
    description: 'Lorem ipsum',
    url: 'https://www.facebook.com/events/258779314553712/',
    start: '2017-05-30T00:00+02:00',
    image: 'https://i.imgsafe.org/e89935b30c.png',
    tags: []
  },
  {
    id: 'd3382a28fba675b49655f1500196c1e3',
    name: 'Barcamp Brno 2017',
    description: 'Lorem ipsum',
    url: 'https://www.facebook.com/events/177998046038693/',
    start: '2017-05-30T09:00+02:00',
    image:
      'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/17309161_1468886766478209_1697312904965273491_n.jpg?oh=639ef12fccff2e58e3fadd0ca46fdb48&oe=5970B9B1',
    tags: []
  }
];

export { mockedEvents };
