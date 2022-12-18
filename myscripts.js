
function Add()
{
var act=0,b=0;
act= f.txt.value;
b=act.charAt(act.length-1)
if(b=='+'|| b=='-'||b=='*'||b=='/')
{
f.txt.value=act.substring(0,act.length-1);
f.txt.value+= '+'
}
else{
    f.txt.value+= '+';
}
}
function sub()
{
var act=0,b=0;
act= f.txt.value;
b=act.charAt(act.length-1)
if(b=='+'|| b=='-'||b=='*'||b=='/')
{
f.txt.value=act.substring(0,act.length-1);
f.txt.value+= '-'
}
else{
    f.txt.value+= '-';
}
}
function Div()
{
var act=0,b=0;
act= f.txt.value;
b=act.charAt(act.length-1)
if(b=='+'|| b=='-'||b=='*'||b=='/')
{
f.txt.value=act.substring(0,act.length-1);
f.txt.value+= '/'
}
else{
    f.txt.value+= '/';
}
}
function Mul()
{
var act=0,b=0;
act= f.txt.value;
b=act.charAt(act.length-1)
if(b=='+'|| b=='-'||b=='*'||b=='/')
{
f.txt.value=act.substring(0,act.length-1);
f.txt.value+= '*'
}
else{
    f.txt.value+= '*';
}
}
