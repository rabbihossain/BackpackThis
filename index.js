var self = require('sdk/self');
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.amazon.com",
  contentScriptFile:  self.data.url("backpack.js"),
  contentStyleFile: self.data.url("backpack.css")
});
