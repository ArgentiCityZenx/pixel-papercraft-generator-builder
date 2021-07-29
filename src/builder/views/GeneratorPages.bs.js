// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Dom2 = require("../bindings/Dom2.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var Jspdf = require("jspdf");
var React = require("react");
var Buttons = require("./Buttons.bs.js");
var PageSize = require("../modules/PageSize.bs.js");

function px(n) {
  return n.toString() + "px";
}

function GeneratorPages$RegionInputs(Props) {
  var model = Props.model;
  var currentPageId = Props.currentPageId;
  var onClick = Props.onClick;
  var regions = model.inputs.reduce((function (acc, input) {
          if (input.TAG === /* RegionInput */2 && input._0 === currentPageId) {
            return acc.concat([[
                          input._1,
                          input._2
                        ]]);
          } else {
            return acc;
          }
        }), []);
  if (regions.length > 0) {
    return React.createElement("div", undefined, regions.map(function (param, i) {
                    var region = param[0];
                    var callback = param[1];
                    var style = {
                      height: region[3].toString() + "px",
                      left: region[0].toString() + "px",
                      top: region[1].toString() + "px",
                      width: region[2].toString() + "px"
                    };
                    return React.createElement("div", {
                                key: i.toString(),
                                className: "absolute border-4 border-transparent hover:border-blue-500",
                                style: style,
                                onClick: (function (param) {
                                    return Curry._1(onClick, callback);
                                  })
                              });
                  }));
  } else {
    return null;
  }
}

var RegionInputs = {
  px: px,
  make: GeneratorPages$RegionInputs
};

function GeneratorPages(Props) {
  var generatorDef = Props.generatorDef;
  var model = Props.model;
  var onChange = Props.onChange;
  var onDownload = function (param) {
    var doc = new Jspdf.jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4"
        });
    model.pages.forEach(function (page, index) {
          var dataUrl = Dom2.Canvas.toDataUrlAsPng(page.canvas);
          if (index > 0) {
            doc.addPage("a4", "portrait");
          }
          doc.addImage(dataUrl, "PNG", 0, 0, PageSize.A4.mm.width, PageSize.A4.mm.height);
          
        });
    doc.save(generatorDef.name);
    
  };
  var showPageIds = model.pages.length > 1;
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "mb-4"
                }, React.createElement(Buttons.Button.make, {
                      state: "Ready",
                      onClick: onDownload,
                      color: "Green",
                      size: "Small",
                      children: "Download as PDF"
                    })), model.pages.map(function (page) {
                  var dataUrl = Dom2.Canvas.toDataUrlAsPng(page.canvas);
                  return React.createElement("div", {
                              key: page.id
                            }, showPageIds ? React.createElement("h1", {
                                    className: "font-bold text-2xl mb-4"
                                  }, page.id) : null, React.createElement("div", {
                                  className: "relative"
                                }, React.createElement("img", {
                                      className: "border shadow-xl mb-8",
                                      style: Object.assign({}, {
                                            height: "842px",
                                            width: "595px"
                                          }, {
                                            imageRendering: "pixelated"
                                          }),
                                      src: dataUrl
                                    }), React.createElement(GeneratorPages$RegionInputs, {
                                      model: model,
                                      currentPageId: page.id,
                                      onClick: (function (callback) {
                                          Curry._1(callback, undefined);
                                          return Curry._1(onChange, undefined);
                                        })
                                    })));
                }));
}

var make = GeneratorPages;

exports.RegionInputs = RegionInputs;
exports.make = make;
/* jspdf Not a pure module */
