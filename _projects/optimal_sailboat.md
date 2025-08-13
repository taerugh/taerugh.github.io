---
layout: page
title: Optimal Sailboat
description: optimal control and planning for a sailboat
img: assets/img/optimal_sailboat/lasf_route_static.png
category: featured
importance: 98
---

For [16-745 Optimal Control & Reinforcement Learning](https://optimalcontrol.ri.cmu.edu/) course at [Carnegie Mellon](https://www.cmu.edu), I did a project to optimally route and control an autonomous sailboat from given start and end points, accounting for sailboat dynamics and predicted weather. Check out the [GitHub repository](https://github.com/taerugh/OptimalSailboat) and [full report](/assets/pdf/optimal_sailboat_report.pdf).

{% include figure.liquid loading="eager" path="assets/img/optimal_sailboat/poster.jpg" title="optimal sailboat poster" class="img-fluid rounded z-depth-1" %}
<br>

## Route Planning

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/optimal_sailboat/lasf_route.gif" title="LA to SF route" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/optimal_sailboat/sfla_route.gif" title="SF to LA route" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Route planning from Los Angeles to San Francisco (left) and back (right).
</div>
<br>

## Trajectory Optimization

{% include figure.liquid loading="eager" path="assets/img/optimal_sailboat/timeopt_trajectory.gif" title="trajectory optimization" class="img-fluid rounded z-depth-1" width="50%" %}
<br>

## Report

<iframe
  src="/assets/pdf/optimal_sailboat_report.pdf#toolbar=0"
  style="border: none;"
  width="100%"
  height="800px"
  loading="lazy"
  title="PDF-file"
></iframe>
