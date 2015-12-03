ui-grid.info
============

Fork of
[ui-grid.info]
(https://github.com/angular-ui/ui-grid.info)

So I moved the branch gh-pages to master for convenience...

##### Blow away release directory except for

* ui-grid.css
* ui-grid.js
* ui-grid.ttf
* ui-grid.woff

##### Remove ads

In **docs/index.html**

* Remove GoogleAnalyticsObject
* Remove ad code:

```
<div class="row text-center">
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins class="adsbygoogle" style="display:block"
     data-ad-client="ca-pub-6177019177103290"
     data-ad-slot="3609320072"
     data-ad-format="auto"></ins>
  <script>
  (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
<small><a href="" data-popover data-content="Advertising covers the costs of running this site, and funds extra support and development.">Why does this site have ads?</a></small>
</div>
```
