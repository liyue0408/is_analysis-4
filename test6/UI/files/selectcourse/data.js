﻿$axure.loadCurrentPage({
  "url":"selectcourse.html",
  "generationDate":new Date(1528189357092.47),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"fa4563ac9795482382299a8c2f86d7b9",
    "type":"Axure:Page",
    "name":"selectCourse",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"09b656d344344e62aab072aea0285026",
          "label":"",
          "type":"flowShape",
          "styleType":"flowShape",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF00FFFF,
              "opacity":1},
            "fill":{
              "fillType":"solid",
              "color":0xFFE4E4E4},
            "location":{
              "x":220,
              "y":70},
            "size":{
              "width":690,
              "height":330}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"73d52eca45de4d9b8d0edf7c8dbc466a",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFF00FFFF,
                  "opacity":1},
                "fill":{
                  "fillType":"solid",
                  "color":0xFFE4E4E4},
                "location":{
                  "x":220,
                  "y":70},
                "size":{
                  "width":690,
                  "height":330}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/selectcourse/u0.png"}},
{
          "id":"77b26246b84442b1a1ca9a560d1b31a9",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":340,
              "y":125},
            "size":{
              "width":90,
              "height":22}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 (下拉列表框) 向下滑动 500 毫秒",
                      "objectsToFades":[{
                          "objectPath":["77b26246b84442b1a1ca9a560d1b31a9"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"slideDown",
                              "duration":500,
                              "showType":"none"}}}]}]}]}},
          "tabbable":true},
{
          "id":"7282005540e6438bafc40daa7675ec86",
          "label":"",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":490,
              "y":122},
            "size":{
              "width":100,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 student",
                      "target":{
                        "targetType":"page",
                        "url":"student.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"5be3cb2318e54b57a52170fd711a0794",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":500.000030517578,
              "y":249.000015258789},
            "size":{
              "width":90,
              "height":22}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 (下拉列表框) 向下滑动 500 毫秒",
                      "objectsToFades":[{
                          "objectPath":["5be3cb2318e54b57a52170fd711a0794"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"slideDown",
                              "duration":500,
                              "showType":"none"}}}]}]}]}},
          "tabbable":true},
{
          "id":"42c7187b47c54728a4533785dc450e44",
          "label":"",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF1B1B1B,
              "opacity":1},
            "location":{
              "x":630,
              "y":246.5},
            "size":{
              "width":100,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 teacher",
                      "target":{
                        "targetType":"page",
                        "url":"teacher.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"e200b0fb4cdc4a51976afc0e459fd08c",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":390,
              "y":249},
            "size":{
              "width":90,
              "height":22}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 (下拉列表框) 向下滑动 500 毫秒",
                      "objectsToFades":[{
                          "objectPath":["e200b0fb4cdc4a51976afc0e459fd08c"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"slideDown",
                              "duration":500,
                              "showType":"none"}}}]}]}]}},
          "tabbable":true},
{
          "id":"00238114a8384cbc8cd8f378d8ea282f",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":270,
              "y":248.999984741211},
            "size":{
              "width":100,
              "height":22}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 (下拉列表框) 向下滑动 500 毫秒",
                      "objectsToFades":[{
                          "objectPath":["00238114a8384cbc8cd8f378d8ea282f"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"slideDown",
                              "duration":500,
                              "showType":"none"}}}]}]}]}},
          "tabbable":true},
{
          "id":"19b6a68f1efb438fa731919477f3bd5e",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF00CC99,
              "opacity":1},
            "location":{
              "x":620,
              "y":127},
            "size":{
              "width":300,
              "height":19}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"f9aca2a5ffca4e3eba6724bc5c5bb1fa",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFF00CC99,
                  "opacity":1},
                "location":{
                  "x":620,
                  "y":127},
                "size":{
                  "width":300,
                  "height":19}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"bb297ab4f8aa4321a4ff475b1ac6e01d",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF00CC99,
              "opacity":1},
            "location":{
              "x":540,
              "y":281},
            "size":{
              "width":300,
              "height":58}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"d4102af6334f4d6d854007f762aacb49",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFF00CC99,
                  "opacity":1},
                "location":{
                  "x":540,
                  "y":281},
                "size":{
                  "width":300,
                  "height":58}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}}]}},
  "masters":{
},
  "objectPaths":{
    "09b656d344344e62aab072aea0285026":{
      "scriptId":"u0"},
    "73d52eca45de4d9b8d0edf7c8dbc466a":{
      "scriptId":"u1"},
    "77b26246b84442b1a1ca9a560d1b31a9":{
      "scriptId":"u2"},
    "7282005540e6438bafc40daa7675ec86":{
      "scriptId":"u3"},
    "5be3cb2318e54b57a52170fd711a0794":{
      "scriptId":"u4"},
    "42c7187b47c54728a4533785dc450e44":{
      "scriptId":"u5"},
    "e200b0fb4cdc4a51976afc0e459fd08c":{
      "scriptId":"u6"},
    "00238114a8384cbc8cd8f378d8ea282f":{
      "scriptId":"u7"},
    "19b6a68f1efb438fa731919477f3bd5e":{
      "scriptId":"u8"},
    "f9aca2a5ffca4e3eba6724bc5c5bb1fa":{
      "scriptId":"u9"},
    "bb297ab4f8aa4321a4ff475b1ac6e01d":{
      "scriptId":"u10"},
    "d4102af6334f4d6d854007f762aacb49":{
      "scriptId":"u11"}}});