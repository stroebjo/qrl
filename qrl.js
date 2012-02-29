/**
 * Human readable version of the QRl bookmarklet.
 *
 */
(function() {
	var c = document.createElement('div');
	c.setAttribute('onclick','this.style.display =\'none\';');
	c.setAttribute('style', 'position:fixed;z-index:/*over*/9000;top:0;right:0;padding:1em 1em .5em;background:rgba(0,0,0,.8);cursor:pointer;font-family:Verdana');
	
	var qr = document.createElement('img');
	qr.src='https://chart.googleapis.com/chart?cht=qr&chs=240x240&chl=' + encodeURIComponent(document.URL);
	c.appendChild(qr);
	
	var d=document.createElement('div');
	d.setAttribute('style','font-style:italic;color:rgba(255,255,255,.42);font-size:11px;text-align:left;padding-top:.23em');
	d.textContent='Click to hide';
	
	var a = document.createElement('a');
	a.href='https://github.com/stroebjo/qrl';
	a.textContent='Info';
	a.setAttribute('style','float:right;color:rgba(255,255,255,.42);');
	
	c.appendChild(d);
	d.appendChild(a);
	
	document.body.appendChild(c);
})();