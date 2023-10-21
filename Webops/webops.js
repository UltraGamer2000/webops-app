async function iss(url){
res = await fetch(url);
data = await res.json();
document.getElementById("cont1").textContent=data.setup;
document.getElementById("cont2").textContent=data.punchline;}
async function isr(url){
    res = await fetch(url);
    data = await res.json();
    document.getElementById("cont2").textContent=data.content;
    document.getElementById("cont1").textContent=data.author;}
url1="https://official-joke-api.appspot.com/random_joke"
url2="https://api.quotable.io/random"
iss(url1);
//isr(url2);
function fadein(){
    var image = document.getElementById("hol")
  if(image.style.opacity==0){
  image.style.opacity=1;
  }else if(image.style.opacity==1){
    image.style.opacity=0;
  }
}
function spin(){
    const box = document.getElementById("test");
    const box1 = document.getElementById("cont1");
    const box2 = document.getElementById("cont2");
    const box3 = document.getElementById("hol");
    const box4 = document.getElementById("lol");
    const currentRotation = box.style.transform || "rotate(0deg)";
    const currentRotation1 = box1.style.transform || "rotate(0deg)";
    const currentRotation2 = box2.style.transform || "rotate(0deg)";
    const currentRotation3 = box3.style.transform || "rotate(0deg)";
    const currentRotation4 = box4.style.transform || "rotate(0deg)";
    const rotationValue = currentRotation.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
    const rotationValue5 = currentRotation.includes("180deg") ? iss(url1) : isr(url2);
    const rotationValue6 = currentRotation.includes("180deg") ? box3.style.opacity=0 : box3.style.opacity=0;
    const rotationValue1 = currentRotation1.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
    const rotationValue2 = currentRotation2.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
    const rotationValue3 = currentRotation3.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
    const rotationValue4 = currentRotation4.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
    box.style.transform = rotationValue;
    box1.style.transform = rotationValue1;
    box2.style.transform = rotationValue2;
    box3.style.transform = rotationValue3;
    box4.style.transform = rotationValue4;
    new Audio("Webops.mpeg").play();

}
const parent = document.getElementById("test");
const child = document.getElementById("hol");

child.addEventListener("click", (event) => {
  event.stopPropagation(); 
  fadein();
});
parent.addEventListener("click", () => {
  spin();
});
const button = document.getElementById("changeStyleButton");
const stylesheet = document.getElementById("stylesheet");
let isAlternateStyle = false;
button.addEventListener("click", function() {
  if (isAlternateStyle) {
    stylesheet.href = "webops.css";

  } else {
    stylesheet.href = "darkops.css";
  }
  isAlternateStyle = !isAlternateStyle; // Toggle between styles
});
//------------------------------------//
async function iss1(url){
  res1 = await fetch(url);
  data1 = await res1.json();
  document.getElementById("cont11").textContent=data1.setup;
  document.getElementById("cont21").textContent=data1.punchline;}
async function isr1(url){
      res1 = await fetch(url);
      data1 = await res1.json();
      document.getElementById("cont21").textContent=data1.content;
      document.getElementById("cont11").textContent=data1.author;}
  url1="https://official-joke-api.appspot.com/random_joke"
  url2="https://api.quotable.io/random"
  iss1(url1);
  //isr(url2);
  function fadein1(){
      var image1 = document.getElementById("hol1")
    if(image1.style.opacity==0){
    image1.style.opacity=1;
    }else if(image1.style.opacity==1){
      image1.style.opacity=0;
    }
  }
  function spin1(){
      const box_1 = document.getElementById("test1");
      const box11 = document.getElementById("cont11");
      const box21 = document.getElementById("cont21");
      const box31 = document.getElementById("hol1");
      const box41 = document.getElementById("lol1");
      const currentRotation_1 = box_1.style.transform || "rotate(0deg)";
      const currentRotation11 = box11.style.transform || "rotate(0deg)";
      const currentRotation21 = box21.style.transform || "rotate(0deg)";
      const currentRotation31 = box31.style.transform || "rotate(0deg)";
      const currentRotation41 = box41.style.transform || "rotate(0deg)";
      const rotationValue_1 = currentRotation_1.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
      const rotationValue51 = currentRotation_1.includes("180deg") ? iss1(url1) : isr1(url2);
      const rotationValue61 = currentRotation_1.includes("180deg") ? box31.style.opacity=0 : box31.style.opacity=0;
      const rotationValue11 = currentRotation11.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
      const rotationValue21 = currentRotation21.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
      const rotationValue31 = currentRotation31.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
      const rotationValue41 = currentRotation41.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
      box_1.style.transform = rotationValue_1;
      box11.style.transform = rotationValue11;
      box21.style.transform = rotationValue21;
      box31.style.transform = rotationValue31;
      box41.style.transform = rotationValue41;
      new Audio("Webops.mpeg").play();
  
  }
  const parent1 = document.getElementById("test1");
  const child1 = document.getElementById("hol1");
  
  child1.addEventListener("click", (event) => {
    event.stopPropagation(); 
    fadein1();
  });
  parent1.addEventListener("click", () => {
    spin1();
  });
  //--------------------------------------------//
  async function iss2(url){
    res2 = await fetch(url);
    data2 = await res2.json();
    document.getElementById("cont12").textContent=data2.setup;
    document.getElementById("cont22").textContent=data2.punchline;}
  async function isr2(url){
        res2 = await fetch(url);
        data2 = await res2.json();
        document.getElementById("cont22").textContent=data2.content;
        document.getElementById("cont12").textContent=data2.author;}
    url1="https://official-joke-api.appspot.com/random_joke"
    url2="https://api.quotable.io/random"
    iss2(url1);
    //isr(url2);
    function fadein2(){
        var image2 = document.getElementById("hol2")
      if(image2.style.opacity==0){
      image2.style.opacity=1;
      }else if(image2.style.opacity==1){
        image2.style.opacity=0;
      }
    }
    function spin2(){
        const box_2 = document.getElementById("test2");
        const box12 = document.getElementById("cont12");
        const box22 = document.getElementById("cont22");
        const box32 = document.getElementById("hol2");
        const box42 = document.getElementById("lol2");
        const currentRotation_2 = box_2.style.transform || "rotate(0deg)";
        const currentRotation12 = box12.style.transform || "rotate(0deg)";
        const currentRotation22 = box22.style.transform || "rotate(0deg)";
        const currentRotation32 = box32.style.transform || "rotate(0deg)";
        const currentRotation42 = box42.style.transform || "rotate(0deg)";
        const rotationValue_2 = currentRotation_2.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
        const rotationValue52 = currentRotation_2.includes("180deg") ? iss2(url1) : isr2(url2);
        const rotationValue62 = currentRotation_2.includes("180deg") ? box32.style.opacity=0 : box32.style.opacity=0;
        const rotationValue12 = currentRotation12.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
        const rotationValue22 = currentRotation22.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
        const rotationValue32 = currentRotation32.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
        const rotationValue42 = currentRotation42.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
        box_2.style.transform = rotationValue_2;
        box12.style.transform = rotationValue12;
        box22.style.transform = rotationValue22;
        box32.style.transform = rotationValue32;
        box42.style.transform = rotationValue42;
        new Audio("Webops.mpeg").play();
    
    }
    const parent2 = document.getElementById("test2");
    const child2 = document.getElementById("hol2");
    
    child2.addEventListener("click", (event) => {
      event.stopPropagation(); 
      fadein2();
    });
    parent2.addEventListener("click", () => {
      spin2();
    });
    //--------------------------------------------//
    async function iss3(url){
      res3 = await fetch(url);
      data3 = await res3.json();
      document.getElementById("cont13").textContent=data3.setup;
      document.getElementById("cont23").textContent=data3.punchline;}
    async function isr3(url){
          res3 = await fetch(url);
          data3 = await res3.json();
          document.getElementById("cont23").textContent=data3.content;
          document.getElementById("cont13").textContent=data3.author;}
      url1="https://official-joke-api.appspot.com/random_joke"
      url2="https://api.quotable.io/random"
      iss3(url1);
      //isr(url2);
      function fadein3(){
          var image3 = document.getElementById("hol3")
        if(image3.style.opacity==0){
        image3.style.opacity=1;
        }else if(image3.style.opacity==1){
          image3.style.opacity=0;
        }
      }
      function spin3(){
          const box_3 = document.getElementById("test3");
          const box13 = document.getElementById("cont13");
          const box23 = document.getElementById("cont23");
          const box33 = document.getElementById("hol3");
          const box43 = document.getElementById("lol3");
          const currentRotation_3 = box_3.style.transform || "rotate(0deg)";
          const currentRotation13 = box13.style.transform || "rotate(0deg)";
          const currentRotation23 = box23.style.transform || "rotate(0deg)";
          const currentRotation33 = box33.style.transform || "rotate(0deg)";
          const currentRotation43 = box43.style.transform || "rotate(0deg)";
          const rotationValue_3 = currentRotation_3.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
          const rotationValue53 = currentRotation_3.includes("180deg") ? iss3(url1) : isr3(url2);
          const rotationValue63 = currentRotation_3.includes("180deg") ? box33.style.opacity=0 : box33.style.opacity=0;
          const rotationValue13 = currentRotation13.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
          const rotationValue23 = currentRotation23.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
          const rotationValue33 = currentRotation33.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
          const rotationValue43 = currentRotation43.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
          box_3.style.transform = rotationValue_3;
          box13.style.transform = rotationValue13;
          box23.style.transform = rotationValue23;
          box33.style.transform = rotationValue33;
          box43.style.transform = rotationValue43;
          new Audio("Webops.mpeg").play();
      
      }
      const parent3 = document.getElementById("test3");
      const child3 = document.getElementById("hol3");
      
      child3.addEventListener("click", (event) => {
        event.stopPropagation(); 
        fadein3();
      });
      parent3.addEventListener("click", () => {
        spin3();
      });
      //--------------------------------------------//
      async function iss4(url){
        res4 = await fetch(url);
        data4 = await res4.json();
        document.getElementById("cont14").textContent=data4.setup;
        document.getElementById("cont24").textContent=data4.punchline;}
      async function isr4(url){
            res4 = await fetch(url);
            data4 = await res4.json();
            document.getElementById("cont24").textContent=data4.content;
            document.getElementById("cont14").textContent=data4.author;}
        url1="https://official-joke-api.appspot.com/random_joke"
        url2="https://api.quotable.io/random"
        iss4(url1);
        //isr(url2);
        function fadein4(){
            var image4 = document.getElementById("hol4")
          if(image4.style.opacity==0){
          image4.style.opacity=1;
          }else if(image4.style.opacity==1){
            image4.style.opacity=0;
          }
        }
        function spin4(){
            const box_4 = document.getElementById("test4");
            const box14 = document.getElementById("cont14");
            const box24 = document.getElementById("cont24");
            const box34 = document.getElementById("hol4");
            const box44 = document.getElementById("lol4");
            const currentRotation_4 = box_4.style.transform || "rotate(0deg)";
            const currentRotation14 = box14.style.transform || "rotate(0deg)";
            const currentRotation24 = box24.style.transform || "rotate(0deg)";
            const currentRotation34 = box34.style.transform || "rotate(0deg)";
            const currentRotation44 = box44.style.transform || "rotate(0deg)";
            const rotationValue_4 = currentRotation_4.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
            const rotationValue54 = currentRotation_4.includes("180deg") ? iss4(url1) : isr4(url2);
            const rotationValue64 = currentRotation_4.includes("180deg") ? box34.style.opacity=0 : box34.style.opacity=0;
            const rotationValue14 = currentRotation14.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
            const rotationValue24 = currentRotation24.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
            const rotationValue34 = currentRotation34.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
            const rotationValue44 = currentRotation44.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
            box_4.style.transform = rotationValue_4;
            box14.style.transform = rotationValue14;
            box24.style.transform = rotationValue24;
            box34.style.transform = rotationValue34;
            box44.style.transform = rotationValue44;
            new Audio("Webops.mpeg").play();
        
        }
        const parent4 = document.getElementById("test4");
        const child4 = document.getElementById("hol4");
        
        child4.addEventListener("click", (event) => {
          event.stopPropagation(); 
          fadein4();
        });
        parent4.addEventListener("click", () => {
          spin4();
        });
        //--------------------------------------------//
        async function iss5(url){
          res5 = await fetch(url);
          data5 = await res5.json();
          document.getElementById("cont15").textContent=data5.setup;
          document.getElementById("cont25").textContent=data5.punchline;}
        async function isr5(url){
              res5 = await fetch(url);
              data5 = await res5.json();
              document.getElementById("cont25").textContent=data5.content;
              document.getElementById("cont15").textContent=data5.author;}
          url1="https://official-joke-api.appspot.com/random_joke"
          url2="https://api.quotable.io/random"
          iss5(url1);
          //isr(url2);
          function fadein5(){
              var image5 = document.getElementById("hol5")
            if(image5.style.opacity==0){
            image5.style.opacity=1;
            }else if(image5.style.opacity==1){
              image5.style.opacity=0;
            }
          }
          function spin5(){
              const box_5 = document.getElementById("test5");
              const box15 = document.getElementById("cont15");
              const box25 = document.getElementById("cont25");
              const box35 = document.getElementById("hol5");
              const box45 = document.getElementById("lol5");
              const currentRotation_5 = box_5.style.transform || "rotate(0deg)";
              const currentRotation15 = box15.style.transform || "rotate(0deg)";
              const currentRotation25 = box25.style.transform || "rotate(0deg)";
              const currentRotation35 = box35.style.transform || "rotate(0deg)";
              const currentRotation45 = box45.style.transform || "rotate(0deg)";
              const rotationValue_5 = currentRotation_5.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
              const rotationValue55 = currentRotation_5.includes("180deg") ? iss5(url1) : isr5(url2);
              const rotationValue65 = currentRotation_5.includes("180deg") ? box35.style.opacity=0 : box35.style.opacity=0;
              const rotationValue15 = currentRotation15.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
              const rotationValue25 = currentRotation25.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
              const rotationValue35 = currentRotation35.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
              const rotationValue45 = currentRotation45.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
              box_5.style.transform = rotationValue_5;
              box15.style.transform = rotationValue15;
              box25.style.transform = rotationValue25;
              box35.style.transform = rotationValue35;
              box45.style.transform = rotationValue45;
              new Audio("Webops.mpeg").play();
          
          }
          const parent5 = document.getElementById("test5");
          const child5 = document.getElementById("hol5");
          
          child5.addEventListener("click", (event) => {
            event.stopPropagation(); 
            fadein5();
          });
          parent5.addEventListener("click", () => {
            spin5();
          });
          //--------------------------------------------//
          async function iss6(url){
            res6 = await fetch(url);
            data6 = await res6.json();
            document.getElementById("cont16").textContent=data6.setup;
            document.getElementById("cont26").textContent=data6.punchline;}
          async function isr6(url){
                res6 = await fetch(url);
                data6 = await res6.json();
                document.getElementById("cont26").textContent=data6.content;
                document.getElementById("cont16").textContent=data6.author;}
            url1="https://official-joke-api.appspot.com/random_joke"
            url2="https://api.quotable.io/random"
            iss6(url1);
            //isr(url2);
            function fadein6(){
                var image6 = document.getElementById("hol6")
              if(image6.style.opacity==0){
              image6.style.opacity=1;
              }else if(image6.style.opacity==1){
                image6.style.opacity=0;
              }
            }
            function spin6(){
                const box_6 = document.getElementById("test6");
                const box16 = document.getElementById("cont16");
                const box26 = document.getElementById("cont26");
                const box36 = document.getElementById("hol6");
                const box46 = document.getElementById("lol6");
                const currentRotation_6 = box_6.style.transform || "rotate(0deg)";
                const currentRotation16 = box16.style.transform || "rotate(0deg)";
                const currentRotation26 = box26.style.transform || "rotate(0deg)";
                const currentRotation36 = box36.style.transform || "rotate(0deg)";
                const currentRotation46 = box46.style.transform || "rotate(0deg)";
                const rotationValue_6 = currentRotation_6.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                const rotationValue56 = currentRotation_6.includes("180deg") ? iss6(url1) : isr6(url2);
                const rotationValue66 = currentRotation_6.includes("180deg") ? box36.style.opacity=0 : box36.style.opacity=0;
                const rotationValue16 = currentRotation16.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                const rotationValue26 = currentRotation26.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                const rotationValue36 = currentRotation36.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                const rotationValue46 = currentRotation46.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                box_6.style.transform = rotationValue_6;
                box16.style.transform = rotationValue16;
                box26.style.transform = rotationValue26;
                box36.style.transform = rotationValue36;
                box46.style.transform = rotationValue46;
                new Audio("Webops.mpeg").play();
            
            }
            const parent6 = document.getElementById("test6");
            const child6 = document.getElementById("hol6");
            
            child6.addEventListener("click", (event) => {
              event.stopPropagation(); 
              fadein6();
            });
            parent6.addEventListener("click", () => {
              spin6();
            });
            //--------------------------------------------//
            async function iss7(url){
              res7 = await fetch(url);
              data7 = await res7.json();
              document.getElementById("cont17").textContent=data7.setup;
              document.getElementById("cont27").textContent=data7.punchline;}
            async function isr7(url){
                  res7 = await fetch(url);
                  data7 = await res7.json();
                  document.getElementById("cont27").textContent=data7.content;
                  document.getElementById("cont17").textContent=data7.author;}
              url1="https://official-joke-api.appspot.com/random_joke"
              url2="https://api.quotable.io/random"
              iss7(url1);
              //isr(url2);
              function fadein7(){
                  var image7 = document.getElementById("hol7")
                if(image7.style.opacity==0){
                image7.style.opacity=1;
                }else if(image7.style.opacity==1){
                  image7.style.opacity=0;
                }
              }
              function spin7(){
                  const box_7 = document.getElementById("test7");
                  const box17 = document.getElementById("cont17");
                  const box27 = document.getElementById("cont27");
                  const box37 = document.getElementById("hol7");
                  const box47 = document.getElementById("lol7");
                  const currentRotation_7 = box_7.style.transform || "rotate(0deg)";
                  const currentRotation17 = box17.style.transform || "rotate(0deg)";
                  const currentRotation27 = box27.style.transform || "rotate(0deg)";
                  const currentRotation37 = box37.style.transform || "rotate(0deg)";
                  const currentRotation47 = box47.style.transform || "rotate(0deg)";
                  const rotationValue_7 = currentRotation_7.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                  const rotationValue57 = currentRotation_7.includes("180deg") ? iss7(url1) : isr7(url2);
                  const rotationValue67 = currentRotation_7.includes("180deg") ? box37.style.opacity=0 : box37.style.opacity=0;
                  const rotationValue17 = currentRotation17.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                  const rotationValue27 = currentRotation27.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                  const rotationValue37 = currentRotation37.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                  const rotationValue47 = currentRotation47.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                  box_7.style.transform = rotationValue_7;
                  box17.style.transform = rotationValue17;
                  box27.style.transform = rotationValue27;
                  box37.style.transform = rotationValue37;
                  box47.style.transform = rotationValue47;
                  new Audio("Webops.mpeg").play();
              
              }
              const parent7 = document.getElementById("test7");
              const child7 = document.getElementById("hol7");
              
              child7.addEventListener("click", (event) => {
                event.stopPropagation(); 
                fadein7();
              });
              parent7.addEventListener("click", () => {
                spin7();
              });
              //--------------------------------------------//
              async function iss8(url){
                res8 = await fetch(url);
                data8 = await res8.json();
                document.getElementById("cont18").textContent=data8.setup;
                document.getElementById("cont28").textContent=data8.punchline;}
              async function isr8(url){
                    res8 = await fetch(url);
                    data8 = await res8.json();
                    document.getElementById("cont28").textContent=data8.content;
                    document.getElementById("cont18").textContent=data8.author;}
                url1="https://official-joke-api.appspot.com/random_joke"
                url2="https://api.quotable.io/random"
                iss8(url1);
                //isr(url2);
                function fadein8(){
                    var image8 = document.getElementById("hol8")
                  if(image8.style.opacity==0){
                  image8.style.opacity=1;
                  }else if(image8.style.opacity==1){
                    image8.style.opacity=0;
                  }
                }
                function spin8(){
                    const box_8 = document.getElementById("test8");
                    const box18 = document.getElementById("cont18");
                    const box28 = document.getElementById("cont28");
                    const box38 = document.getElementById("hol8");
                    const box48 = document.getElementById("lol8");
                    const currentRotation_8 = box_8.style.transform || "rotate(0deg)";
                    const currentRotation18 = box18.style.transform || "rotate(0deg)";
                    const currentRotation28 = box28.style.transform || "rotate(0deg)";
                    const currentRotation38 = box38.style.transform || "rotate(0deg)";
                    const currentRotation48 = box48.style.transform || "rotate(0deg)";
                    const rotationValue_8 = currentRotation_8.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                    const rotationValue58 = currentRotation_8.includes("180deg") ? iss8(url1) : isr8(url2);
                    const rotationValue68 = currentRotation_8.includes("180deg") ? box38.style.opacity=0 : box38.style.opacity=0;
                    const rotationValue18 = currentRotation18.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                    const rotationValue28 = currentRotation28.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                    const rotationValue38 = currentRotation38.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                    const rotationValue48 = currentRotation48.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                    box_8.style.transform = rotationValue_8;
                    box18.style.transform = rotationValue18;
                    box28.style.transform = rotationValue28;
                    box38.style.transform = rotationValue38;
                    box48.style.transform = rotationValue48;
                    new Audio("Webops.mpeg").play();
                
                }
                const parent8 = document.getElementById("test8");
                const child8 = document.getElementById("hol8");
                
                child8.addEventListener("click", (event) => {
                  event.stopPropagation(); 
                  fadein8();
                });
                parent8.addEventListener("click", () => {
                  spin8();
                });
                //--------------------------------------------//
                async function iss9(url){
                  res9 = await fetch(url);
                  data9 = await res9.json();
                  document.getElementById("cont19").textContent=data9.setup;
                  document.getElementById("cont29").textContent=data9.punchline;}
                async function isr9(url){
                      res9 = await fetch(url);
                      data9 = await res9.json();
                      document.getElementById("cont29").textContent=data9.content;
                      document.getElementById("cont19").textContent=data9.author;}
                  url1="https://official-joke-api.appspot.com/random_joke"
                  url2="https://api.quotable.io/random"
                  iss9(url1);
                  //isr(url2);
                  function fadein9(){
                      var image9 = document.getElementById("hol9")
                    if(image9.style.opacity==0){
                    image9.style.opacity=1;
                    }else if(image9.style.opacity==1){
                      image9.style.opacity=0;
                    }
                  }
                  function spin9(){
                      const box_9 = document.getElementById("test9");
                      const box19 = document.getElementById("cont19");
                      const box29 = document.getElementById("cont29");
                      const box39 = document.getElementById("hol9");
                      const box49 = document.getElementById("lol9");
                      const currentRotation_9 = box_9.style.transform || "rotate(0deg)";
                      const currentRotation19 = box19.style.transform || "rotate(0deg)";
                      const currentRotation29 = box29.style.transform || "rotate(0deg)";
                      const currentRotation39 = box39.style.transform || "rotate(0deg)";
                      const currentRotation49 = box49.style.transform || "rotate(0deg)";
                      const rotationValue_9 = currentRotation_9.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                      const rotationValue59 = currentRotation_9.includes("180deg") ? iss9(url1) : isr9(url2);
                      const rotationValue69 = currentRotation_9.includes("180deg") ? box39.style.opacity=0 : box39.style.opacity=0;
                      const rotationValue19 = currentRotation19.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                      const rotationValue29 = currentRotation29.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                      const rotationValue39 = currentRotation39.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                      const rotationValue49 = currentRotation49.includes("180deg") ? "rotate(0deg)" : "rotate(180deg)";
                      box_9.style.transform = rotationValue_9;
                      box19.style.transform = rotationValue19;
                      box29.style.transform = rotationValue29;
                      box39.style.transform = rotationValue39;
                      box49.style.transform = rotationValue49;
                      new Audio("Webops.mpeg").play();
                  
                  }
                  const parent9 = document.getElementById("test9");
                  const child9 = document.getElementById("hol9");
                  
                  child9.addEventListener("click", (event) => {
                    event.stopPropagation(); 
                    fadein9();
                  });
                  parent9.addEventListener("click", () => {
                    spin9();
                  });
                  //--------------------------------------------//