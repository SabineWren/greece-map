I started with a topographical map, and paired it with a map of ancient Greece for use as a stencil, from which I copied 20 sites (settlements and sanctuaries) onto an overlay. The roads are not historically accurate. Instead, I scale their straight-line distance by an arbitrary quality multiplier, where a multiplier of 1.0 indicates a straight and level rut-road. Higher values indicate directional or altitudinal change.

When a user selects any two sites on the map, a script runs an A* graph search implementation [1][2] to compute the optimal route. The map highlights the road segments in the route. To select a pair of sites, just click on them in any order.

[1] The first seven minutes of this video explain how the algorithm works https://www.youtube.com/watch?v=DhtSZhakyOo
[2] Brief overview on wikipedia https://en.wikipedia.org/wiki/A*_search_algorithm

