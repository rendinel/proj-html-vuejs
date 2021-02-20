var app = new Vue({
 el: '#root',
 data: {
   dropdownVoices:[
     { voice: 'Home' },
     { voice: 'Meet the band' },
     { voice: 'Live Dates' },
     { voice: 'Latest News' },
     { voice: 'Albums' },
     { voice: 'Fans' }
   ],
   titles:[
      'Taking it back to the old school',
      'Sharing the stage with a legend',
      'Technology and music',
      'While my guitar gently weeps',
      'It just sound better',
      'The flavor of rock'
   ],
   paragraphCard:'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum',
   videoParagraph:'“I just listened to it and said to myself, “Man, I really love this <br> album.” Still, today, it just sounds so fresh. It sounds full of ideas. These guys knew what they were doing. They’re good. And they’re inventive. I haven’t heard anything this year that’s as inventive. I don’t really expect to.”',
   opacityList:[
     '0',
     '1'
   ],
   opacityIdx:0
 },
 method:{
 //   dropdownON: function() {
 //    this.opacityIDX += 1;
 //  },
 //  dropdownOff: function() {
 //   this.opacityIDX -= 1;
 // }

 }
});
Vue.config.devtools = true;
