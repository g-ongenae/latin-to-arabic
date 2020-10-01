# Arabic to Latin

Playing a bit around this article: <https://sandimetz.com/blog/2016/6/9/make-everything-the-same>

Which I stumble upon from [gabrielbarker/unconditional](https://github.com/gabrielbarker/unconditional).

It is interesting to notice how I created one of the worst solution possible, maybe because I didn't want to use conditional but was only thinking with it anyway.

I forgot to _think out of the box._ 😅

For S. Metz's solution, see: <https://github.com/skmetz/play/blob/master/roman_numerals/roman_numerals_medium.rb>

So my opinion on the different approaches would be something like:

| Solution                 | S. Metz | A. Baumann (3c3a31c) | 1 (1f2189f) | 2 (8b61664) | 3 (5aa1e0f) |
| :----------------------- | :------ | :------------------- | :---------- | :---------- | :---------- |
| Complexity / Readability | High    | Low                  | Medium      | Medium      | Medium      |
| Speed (supposed)         | Medium  | High                 | Low         | Low         | Low         |
| Memory (supposed)        | High    | Low                  | Low         | Low         | Low         |

Conclusion: for this one problem, the _specific_ code that S. Metz despises is the best fit, IMHO.
