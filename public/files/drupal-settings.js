console.log("extend drupal:", Drupal.settings)
jQuery.extend(
    Drupal.settings, {
        "basePath": "/",
        "pathPrefix":"",
        "ajaxPageState": {},
        "nivo_slider": {
            "effect": "fade",
            "slices": 15,
            "boxCols": 8,
            "boxRows": 4,
            "animSpeed": 800,
            "pauseTime": 3000,
            "startSlide": 0,
            "directionNav": true,
            "controlNav": false,
            "controlNavThumbs": false,
            "pauseOnHover": true,
            "manualAdvance": false,
            "prevText": "Prev",
            "nextText": "Next",
            "randomStart": true,
        }
    }
);
console.log("extended drupal:", Drupal.settings)
