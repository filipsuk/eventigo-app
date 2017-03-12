/* @flow */

export type Event = {
  id: number,
  name: string,
  description: ?string,
  url: string,
  start: string,
  end?: string,
  image: string,
  tags?: EventTag[],
}

export type EventTag = {
  id: number,
  rate: 1 | 2 | 3 | 4 | 5, // 1: weak, 5: strong relation
  name: string,
  code: string,
}
