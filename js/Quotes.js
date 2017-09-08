var quotes = 
["1.1^365 = 3.78, 0.99^365 = 0.03.",


"Nothing makes sense.",

"A day without sunshine is, you know, light",


"You can't wait for inspiration. You have to go after it with a club.",


"Opportunity does not knock, it presents itself when you beat down the door.",

"You've survived 100% in your life so far, there's a good chance you'll survive the next.",


"The best grade you can get in programming is a C++.",


"No storm can last forever.",


"Whatever you're thinking, think bigger.",


"Stars can't shine without darkness."
]

var quoteAuthors = 
[" - Unknown",

" - Andrew Kramer",


" - Steve Martin",


" - Jack London",

" - Kyle Chandler",

" - Timber Hawkeye",


" - Andrew Quan",


" - Iyanla Vanzant",


" - Tony Hesieh",


" - D.H. Sidebottom"
]

var displaybox = document.getElementById("quotes");
var num = Math.floor(Math.random()*9);
var quotedisplayed = quotes[num];
var authordisplayed = quoteAuthors[num];
displaybox.innerHTML = quotedisplayed + authordisplayed;

