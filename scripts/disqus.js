
var disqus_shortname = 'kirishow'; // forum shortname

var host = window.location.host;
if (window.location.hostname == 'localhost') {
  host = 'kirishow.github.io';
}

var disqus_url = window.location.protocol + '//' + host + window.location.pathname.replace('/index.html', ''); // forum url

/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

