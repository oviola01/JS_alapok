$(
    function() {
        elemekElerese1();
        elemekElerese2_3("#ide","<p>Jó reggelt!</p>");
        let listam = elemekElerese4();
        elemekFormazasa1();
        esemenyKezeles1("click",".kattintasutan",listam);
        esemenyKezeles2();
        esemenyKezeles3();
        esemenyKezeles4();

        function elemekElerese1(){
            console.log($("h2"));
        };

        function elemekElerese2_3(hova,mit){
            let elem = $(hova);
            elem.html(mit);
        };


        function elemekElerese4(){
            let elem = $(".lista");
            let TXT = "";
            for(i=0;i<5;i++) {
                let ujSzam = Math.floor((Math.random()+10)*20);
                TXT += `<p>${ujSzam}</p>`
            };
            return TXT;
        };

        function elemekFormazasa1() {

        };

        function esemenyKezeles1(esemeny,hova,mit) {
            $(".lista").on(esemeny,function() {
                let hely = $(hova);
                let adattart = mit;
                hely.html(adattart);
                }
            );
        }

        function esemenyKezeles2() {
            elemekElerese2_3(".feladat","<button>Jó reggelt!</button>");
            //lecseréli a gombot, de nem kéne!
            esemenyKezeles1("click",".feladat",'<div><img src="awesome-great-success.jpg" alt="hiányzik a kép"></div>');
        }
          
        function esemenyKezeles3() {
            //ez még nem működik
            $("img").hover(function() {
                $(".feladat img").css("width", "50%;");
                $(".feladat img").css("height", "50%");
                }
            );
        }
          
        function esemenyKezeles4() {
            ;
        }
    }
)