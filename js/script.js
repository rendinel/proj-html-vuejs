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
   copyrightVoices:[
     { voice: '© Copyright 2012 - 2021' },
     { voice: '|AVADA THEME BY THEMEFUSION|' },
     { voice: 'ALL RIGHTS RESERVED|' },
     { voice: 'POWERED BY WORDPRESS' },
   ],
   socialVoices:[
     { voice: 'fab fa-facebook-f' },
     { voice: 'fab fa-twitter' },
     { voice: 'fab fa-instagram' },
     { voice: 'fab fa-youtube' },
   ],
   faqVoices:[
     { voice: '17/08/2020 GEM FESTIVAL 2020 ANAKALIA, GEORGIA' },
     { voice: '24/09/2020 GROOVEFEST DOMINICAL REPUBLIC' },
     { voice: '31/10/2020 OASIS FESTIVAL 2020 MARRAKECH, MOROCCO' },
     { voice: '07/11/2020 MOGA FESTIVAL - ESSAOURIA, MOROCCO' },
     { voice: '10/12/2020 ENVISION FESTIVAL - UVITA, COSTA RICA' }
   ],
   plusIcon:'fas fa-plus',
   mapTitle:'Untold Stories',
   titles:[
      'Taking it back to the old school',
      'Sharing the stage with a legend',
      'Technology and music',
      'While my guitar gently weeps',
      'It just sound better',
      'The flavor of rock'
   ],
   commonParagraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus cursus egestas. Cras quis vehicula quam, a tempus velit. Ut feugiat augue in sodales luctus',
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
