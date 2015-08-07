# AmrheinSite2015
Renovation of an old club website with help of d3.js, bootstrap, Angular.js, etc.

2.06.15
Currently using finance.google.com data, requiring legal information. Until then, this paragraph explains the important property names:
	t: ticker
	c: change in price (day)
	cp: change in price - percentage
	e: trading platform
	l: market price per share
	ec: change in price (after hours) - only avail for int'l stocks
	ecp: .. percentage
	el: market price per share (after hours)
	elt: market closing time (after hours): Either west coast delay or asian market starts the day

Link example: http://finance.google.com/finance/info?client=ig&q=MSFT,SAM,GOOG