var keyFeaturesBg = $(".key-features__list");
var keyFeaturesItem = keyFeaturesBg.find(".key-features__item");

$("#key-features__wrapper").on("mouseover", function(e) {
  if ($(e.target).closest(".key-features").length === 0) {
    var targetBg = $(".key-features__bg-item");
    TweenMax.set(keyFeaturesItem, {
      className: "-=item-disabled"
    });
    TweenMax.set(keyFeaturesItem, {
      className: "-=item-active"
    });
    new TimelineLite()
      .set(targetBg, {
        className: "-=hover-active",
        clearProps: "all"
      })
      .set(targetBg.find(".layer--background"), {
        clearProps: "all"
      })
      .set(targetBg, {
        clearProps: "all"
      })
      .set(targetBg.find(".key-features__video"), {
        clearProps: "all"
      });
  }
});
keyFeaturesItem.on("click", function(e) {
  var _this = $(this);
  var itemId = _this.attr("data-id");
  var targetBg = $('[data-id="' + itemId + '"].key-features__bg-item');
  var otherItems = $(".key-features__bg-item").not(targetBg);
  TweenMax.set(keyFeaturesItem, {
    className: "-=item-disabled"
  });
  TweenMax.set(keyFeaturesItem, {
    className: "-=item-active"
  });
  if (!targetBg.hasClass("hover-active")) {
    new TimelineLite({
      onStart: function() {
        var svg = _this.find("svg");

        new TimelineMax()
          .to(svg, 0.3, { x: "100%" })
          .set(svg, { x: "-100%" })
          .to(svg, 0.3, { x: "0%" });
      }
    })
      .set(keyFeaturesItem.not(_this), {
        className: "+=item-disabled"
      })
      .set(_this, {
        className: "+=item-active"
      })
      .add("start")
      .to(
        targetBg.find(".layer--background"),
        0.1,
        {
          autoAlpha: 0,
          ease: Power4.easeOut
        },
        "start"
      )
      .to(
        targetBg,
        0.5,
        {
          width: "100%",
          ease: Quad.easeInOut
        },
        "start"
      )
      .to(
        targetBg.find(".key-features__video"),
        0.5,
        {
          opacity: 0.2,
          ease: Power4.easeOut
        },
        "start"
      )
      .to(
        otherItems,
        0.5,
        {
          width: "0%",
          autoAlpha: 0,
          ease: Quad.easeInOut
        },
        "start"
      )
      .set($(".key-features__bg-item"), {
        className: "+=hover-active",
        width: "100%"
      });
  } else {
    new TimelineLite({
      onStart: function() {
        var svg = _this.find("svg");

        new TimelineMax()
          .to(svg, 0.3, { x: "100%" })
          .set(svg, { x: "-100%" })
          .to(svg, 0.3, { x: "0%" });
      }
    })
      .set(keyFeaturesItem.not(_this), {
        className: "+=item-disabled"
      })
      .set(_this, {
        className: "+=item-active"
      })
      .to(otherItems, 0.1, {
        autoAlpha: 0
      })
      .set(targetBg, {
        autoAlpha: 1
      });
  }
});
