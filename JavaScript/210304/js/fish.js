var cnt = 0;
        var $score = null;
        var $fish = null;
        var play = false;
        var timerID = 0;

        $(document).ready(function(){
            init();
            initEvent();
        });

        function init(){
            $score = $("#score");
            $fish = $("#fish");
        }

        function initEvent(){
            $("#start").click(function(){
                startGame();
            });

            $("#fish").click(function(){
                addScore();
            });
        }
        
        function startGame(){
            if(play == false){
                checkEndGame();
                play = true;
                timerID = setInterval(function(){
                    moveFish();
                }, 1000);
            }
        }

        function moveFish(){
            var x = parseInt(Math.random()*480);
            var y = parseInt(Math.random()*330);

            $fish.css({
                left : x,
                top : y
            });
        }

        function checkEndGame(){
            setTimeout(function(){
                play = false;
                clearInterval(timerID);
                alert("END");
            }, 10000);
        }

        function addScore(){
            if(play == true){
                cnt++;
                $score.html(cnt);
            }
        }