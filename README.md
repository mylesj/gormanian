# Gormanian Calendar Conversion

A utility for converting to and from Gormanic dates.

## you what?

It's just a bit of fun... _(or is it?)_

*   [Dave Gorman: Original Blog Post][ext:original-post]
*   [Modern Life is Goodish: Season 3, Episode 7][ext:uktv-play]

## objective

Everybody knows the Gregorian calendar is barmy, every programmer can relate
to the notion that the definition of a month should be constant. Ultimately
the aim is to encourage widespread adoption of a saner calendar - the idea has
been around for a while but client-side tooling is still not that accessible.

> If you build it, they will come.

*   create an abstraction on which reusable components can be built
*   extend the native JavaScript [Date][ext:mdn-date] object
    -- exposing a like-for-like API
    -- maintaining interoperability

## usage

```js
const { GormanDate } = require('gormanian')
```

Generally for each `get` and `set` on the [Date prototype][ext:mdn-date] there
shall exist a `getGor` and `setGor` equivalent. In cases such as "time" the
functions may delegate to the native behaviour, but exist for consistency
and potential futureproofing in the event of updates to the specification.

[//]: # 'links'
[ext:original-post]: http://gormano.blogspot.co.uk/2008/01/problem-solving.html
[ext:uktv-play]: https://uktvplay.uktv.co.uk/shows/dave-gormans-modern-life-is-goodish/watch-online/?video=4557208837001
[ext:mdn-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
