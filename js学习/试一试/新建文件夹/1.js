function rgb(r,g,b)
{
    var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex;
}

var body=this.document.body;
for (var i=0;i<body.childNodes.length;i++)
{
    var div = body.childNodes[i]
    if(div.nodeType!=1)
        continue;
    var computedStyle=this.getComputedStyle(div);
    div.innerHTML=computedStyle.backgroundColor;
}
