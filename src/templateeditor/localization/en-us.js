(function (angular) {
  "use strict";

  angular
    .module("Cerberus.TemplateEditor")
    .factory("Cerberus.TemplateEditor.Localization", function () {
      return {
        generic: {
          back: "Back",

          restore: "Restore to Default",
          save: "Save",
          saveExit: "Save and Exit",
          cancel: "Cancel",

          yes: "Yes",
          no: "No",

          exit: "Exit",

          editSettings: "Edit Settings",

          add: "Add",
          edit: "Edit",
          update: "Update",
          remove: "Remove",

          apply: "Apply"
        },

        remplateResolutions: {
          reachedMaximumResolutions: "MAXRESOLUTIONS REACHED",
          notEnoughSpace: "NOT ENOUGH SPACE"
        },

        componentActions: {
          removeSelectedComponents: "Remove selected component(s)",
          distributeVisualPropertiesToAllResolutions: "Distribute visual properties across all resolutions",
          distributeVisualPropertiesToLowerResolutions: "Distribute visual properties to lower resolutions",
          distributeVisualPropertiesToHigherResolutions: "Distribute visual properties to higher resolutions",
          distributeVisualPropertiesToResolutions: "Distribute visual properties to resolution...",
          showHiddenControls: "Show Hidden Elements"
        },
        componentProperties: {
          class: "Class",
          visible: "Visible",
          render: "Render",
          hidden: "Hidden",
          generic: "Generic",
          zIndex: "Render Order",
          componentName: "Name",
          layout: "Layout",
          transform: "Transform",
          left: "Left",
          top: "Top",
          right: "Right",
          bottom: "Bottom",
          width: "Width",
          height: "Height",
          minWidth: "Minimum Width",
          minHeight: "Minimum Height",
          center: "Center",

          rotateZ: "Rotate",
          rotateZPlaceHolder: "Specify in deg, turn or rad",
          transformOrigin: "Transform Origin",

          fontAndColors: "Font and Colors",
          fontface: "Fontface",
          size: "Size",
          color: "Color",
          textAlign: "Text Align",
          textTransform: "Text Transform",
          noWrap: "Don't wrap",
          scrollable: "Enable scroll",

          background: "Background",
          image: "Image",
          imageRepeat: "Image Repeat",
          imagePosition: "Image Position",

          border: "Border",
          borderRadius: "Border Radius",
          radius: "Radius",
          padding: "Padding",
          topLeft: "Top Left",
          topRight: "Top Right",
          bottomRight: "Bottom Right",
          bottomLeft: "Bottom Left",

          textShadow: "Text Shadow",
          boxShadow: "Box Shadow",
          noxShadow: "Box",
          horizontalOffset: "Horizontal Offset",
          verticalOffset: "Vertical Offset",
          innerShadow: "Inner Shadow",
          blurRadius: "Blur Radius",
          spreadRadius: "Spread Radius",
          shadowType: "Shadow Type",

          opacity: "Opacity",
          opacityPlaceHolder: "Range: 0.0 - 1.0",
          imageSource: "Image Source",
          imageSize: "Image Size",
          imageSourcePlaceHolder: "Path to image",

          content: "Content",

          browserDefault: "Browser Default",
          borderSolid: "Solid",
          borderDashed: "Dashed",
          borderDotted: "Dotted",
          borderGroove: "Groove",
          borderDouble: "Double",
          borderInset: "Inset",
          borderOutset: "Outset",
          repeat: "Repeat",
          repeatHorizontally: "Repeat Horizontally",
          repeatVertically: "Repeat Vertically",
          dontRepeat: "Do not Repeat",

          contain: "Contain",
          cover: "Cover",

          misc: "Misc",
          itemSpacing: "Item Spacing",
          itemSpacingPlaceHolder: "Specify in pixels"
        },

        componentPluginNames: {
          text: "Text",
          link: "Link",
          menu: "Menu",
          sharer: "Sharer",
          tableOfContents: "Table of Contents",
          youTube: "YouTube",
          rtf: "Rich Text Format",
          rss: "RSS",
          articleList: "Article List",
          video: "Video",
          carousel: "Carousel",
          album: "Album"
        },

        component: {
          link: {
            text: "Content",
            tooltip: "Tooltip",
            url: "Url",
            target: "Target",

            newWindow: "New Window",
            sameWindow: "Same Window",

            tooltipPlaceHolder: "Enter a descriptive text",
            textPlaceHolder: "Enter text",
            urlPlaceHolder: "Enter a link to navigate to"
          },
          video: {
            mp4Source: "MP4 Source",
            oggSource: "Ogg Source",
            autoPlay: "Autoplay",
            loop: "Loop",
            showControls: "Show Controls"
          },
          youTube: {
            videoId: "Video Id",
            videoIdPlaceHolder: "Video Id",
            autoPlay: "Autoplay",
            startTime: "Start Time",
            loopInfinitely: "Loop",
            showControls: "Show player controls",
            disableKeyboard: "Disable keyboard shortcuts",
            hideYouTubeBrand: "Hide YouTube Brand",
            showInfo: "Show Video Info"
          },
          tableOfContents: {
            source: "Source"
          },
          rss: {
            url: "Url",
            showTitle: "Title",
            showDescription: "Description",
            showStoryDescription: "Story Description",
            showStoryDate: "Story Date",
            maxStories: "Max Stories"
          }
        }
      };
    });
})(window.angular);