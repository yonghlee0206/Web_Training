function LinkssetColor(color) {
    var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color=color;
            i = i + 1;
        }
}

function BodySetColor(color) {
    document.querySelector('body').style.color = color
}

function BodySetBackgroundColor(color) {
    document.querySelector('body').style.backgroundColor = color
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){    
        BodySetBackgroundColor('black');
        BodySetColor('white');
        self.value='day';        

        LinkssetColor('powderblue');
    }else{
        BodySetBackgroundColor('white');
        BodySetColor('black');
        self.value='night';   

        LinkssetColor('blue');
    }
}