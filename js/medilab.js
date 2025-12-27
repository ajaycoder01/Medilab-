

(function($) {
    $.fn.countTo = function(options) {
      options = options || {};
  
      return $(this).each(function() {
        // set options for current element
        var settings = $.extend(
          {},
          $.fn.countTo.defaults,
          {
            from: $(this).data("from"),
            to: $(this).data("to"),
            speed: $(this).data("speed"),
            refreshInterval: $(this).data("refresh-interval"),
            decimals: $(this).data("decimals")
          },
          options
        );
  
        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
          increment = (settings.to - settings.from) / loops;
  
        // references & variables that will change with each update
        var self = this,
          $self = $(this),
          loopCount = 0,
          value = settings.from,
          data = $self.data("countTo") || {};
  
        $self.data("countTo", data);
  
        // if an existing interval can be found, clear it first
        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);
  
        // initialize the element with the starting value
        render(value);
  
        function updateTimer() {
          value += increment;
          loopCount++;
  
          render(value);
  
          if (typeof settings.onUpdate == "function") {
            settings.onUpdate.call(self, value);
          }
  
          if (loopCount >= loops) {
            // remove the interval
            $self.removeData("countTo");
            clearInterval(data.interval);
            value = settings.to;
  
            if (typeof settings.onComplete == "function") {
              settings.onComplete.call(self, value);
            }
          }
        }
  
        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue);
        }
      });
    };
  
    $.fn.countTo.defaults = {
      from: 0, // the number the element should start at
      to: 0, // the number the element should end at
      speed: 1000, // how long it should take to count between the target numbers
      refreshInterval: 100, // how often the element should be updated
      decimals: 0, // the number of decimal places to show
      formatter: formatter, // handler for formatting the value before rendering
      onUpdate: null, // callback method for every time the element is updated
      onComplete: null // callback method for when the element finishes updating
    };
  
    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }
  })(jQuery);
  
  jQuery(function($) {
    // custom formatting example
    $(".count-number").data("countToOptions", {
      formatter: function(value, options) {
        return value
          .toFixed(options.decimals)
          .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
      }
    });
  
    // start all the timers
    $(".timer").each(count);
  
    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data("countToOptions") || {});
      $this.countTo(options);
    }
  });
// count run closed  


// review slider area start

//<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>

 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        transitionStyle:"backSlide",
        autoPlay:true
    });
});


// review card slider js

 //back to top js----------


// ----------------------------gsap------------------------
// nav---

gsap.from(".nav ul li", {
  duration: 0.6,
  x: -100,
  opacity: 0,
  ease: "power2.inOut",
  delay: 0.6,
  stagger: 0.2
});


//why---
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play pause resume pause"
});

gsap.from(".content1", {
  scrollTrigger: {
    trigger: ".content1",
    start: "top 80%"
  },
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power2.inOut"
});

gsap.from(".content2", {
  scrollTrigger: {
    trigger: ".content2",
    start: "top 80%"
  },
  duration: 1,
  opacity: 0,
  x: 50,
  ease: "power2.inOut",
  stagger: 0.2
});

gsap.from(".learn", {
  scrollTrigger: {
    trigger: ".learn",
    start: "top 80%"
  },
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power2.inOut"
});

//about 1st area---


  // Create a ScrollTrigger instance
  gsap.registerPlugin(ScrollTrigger);

  // Target the .vid_box element
  const vidBox = document.querySelector('.vid_box');

  // Create a tween that animates the vidBox
  const tween = gsap.from(vidBox, {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: 'power2.inOut'
  });

  // Create a ScrollTrigger that triggers the tween when the vidBox comes into view
  ScrollTrigger.create({
    trigger: vidBox,
    start: 'top 80%', // adjust the start position to your liking
    end: 'bottom 20%', // adjust the end position to your liking
    toggleActions: 'play reverse play reverse',
    onEnter: () => tween.play(),
    onLeave: () => tween.reverse(),
    onEnterBack: () => tween.play(),
    onLeaveBack: () => tween.reverse()
  });
// about 2nd area----

gsap.registerPlugin(ScrollTrigger);

// Target the .icon_area elements
const iconAreas = document.querySelectorAll('.icon_area');

// Create a tween for each icon_area element
iconAreas.forEach((iconArea, index) => {
  gsap.from(iconArea, {
    scrollTrigger: {
      trigger: iconArea,
      start: 'top 80%', // adjust the start position to your liking
      end: 'bottom 20%', // adjust the end position to your liking
      toggleActions: 'play reverse play reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.inOut',
    delay: index * 0.2 // stagger the animations
  });
});

//counter ------

gsap.registerPlugin(ScrollTrigger);

const counters = document.querySelectorAll('.count-number');

counters.forEach((counter) => {
  gsap.from(counter, {
    scrollTrigger: {
      trigger: counter,
      start: 'top 80%', // adjust the start position to your liking
      end: 'bottom 20%', // adjust the end position to your liking
      toggleActions: 'play reverse play reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    ease: 'power2.inOut',
    onComplete: () => {
      $(counter).countTo(); // trigger the counter animation
    }
  });
});

//service---

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  const animateType = box.getAttribute('data-animate');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: box,
      start: 'center 80%', // adjust the trigger point to your liking
      end: 'center 20%',
      toggleActions: 'play none none none',
    },
  });

  tl.from(box, {
    x: animateType === 'slideInLeft' ? -100 : animateType === 'slideInRight' ? 100 : 0,
    y: animateType === 'slideInUp' ? 100 : 0,
    opacity: 0,
    duration: 0.6,
  });
});

//appointment ---


gsap.registerPlugin(ScrollTrigger);

const formFields = document.querySelectorAll('#AppForm .appcon');

formFields.forEach((field, index) => {
  gsap.from(field, {
    scrollTrigger: {
      trigger: field,
      start: 'top 80%', // adjust the start position to your liking
      end: 'bottom 20%', // adjust the end position to your liking
      toggleActions: 'play none none none',
    },
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.inOut',
    delay: index * 0.1, // stagger the animations
  });
});

//department---
gsap.registerPlugin(ScrollTrigger);

const tabs = document.querySelectorAll('#v-pills-tab .nav-link');

tabs.forEach((tab, index) => {
  gsap.from(tab, {
    scrollTrigger: {
      trigger: tab,
      start: 'top 80%', // adjust the start position to your liking
      end: 'bottom 20%', // adjust the end position to your liking
      toggleActions: 'play none none none',
    },
    y: 100,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.inOut',
    delay: index * 0.1, // stagger the animations
  });
});

//doctors---
gsap.registerPlugin(ScrollTrigger);

const doctors = document.querySelectorAll('.doctor');

doctors.forEach((doctor, index) => {
  gsap.from(doctor, {
    scrollTrigger: {
      trigger: doctor,
      start: 'top 80%', // adjust the start position to your liking
      end: 'bottom 20%', // adjust the end position to your liking
      toggleActions: 'play reverse play reverse'
    },
    y: 100,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.inOut',
    delay: index * 0.1 // stagger the animations
  });
});
// Questions--

gsap.registerPlugin(ScrollTrigger);

const accordion = document.querySelectorAll('.accordion .card');

accordion.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 80%', // adjust the start position to your liking
      end: 'bottom 20%', // adjust the end position to your liking
      toggleActions: 'play reverse play reverse'
    },
    y: 100,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.inOut',
    delay: index * 0.1 // stagger the animations
  });
});









