// ==UserScript==
// @name         TimGFX Pro Bot
// @namespace    bot.timgfx.com
// @version      v2.0
// @description  EZ MONEYZ!
// @author       TimGFX
// @match        http://www.csgodouble.com/
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var _0x9fdc=["\x3C\x62\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x65\x78\x74\x2D\x73\x75\x63\x63\x65\x73\x73\x22\x3E\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x3C\x2F\x62\x3E\x3C\x62\x72\x3E","\x61\x70\x70\x65\x6E\x64","\x64\x69\x76\x20\x2E\x64\x69\x76\x63\x68\x61\x74","\x3C\x62\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x65\x78\x74\x2D\x73\x75\x63\x63\x65\x73\x73\x22\x3E\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x42\x6F\x74\x20\x52\x75\x6E\x6E\x69\x6E\x67\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x62\x3E\x3C\x62\x72\x3E","\x73\x63\x72\x6F\x6C\x6C\x48\x65\x69\x67\x68\x74","\x23\x63\x68\x61\x74\x41\x72\x65\x61\x2E\x64\x69\x76\x63\x68\x61\x74","\x61\x6E\x69\x6D\x61\x74\x65","\x73\x74\x6F\x70","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x6F\x64\x61\x6C\x20\x66\x61\x64\x65\x22\x20\x69\x64\x3D\x22\x62\x6F\x74\x4D\x65\x6E\x75\x22\x3E\x20\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x6F\x64\x61\x6C\x2D\x64\x69\x61\x6C\x6F\x67\x22\x3E\x20\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x6F\x64\x61\x6C\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3E\x20\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x6F\x64\x61\x6C\x2D\x68\x65\x61\x64\x65\x72\x22\x3E\x20\x3C\x62\x75\x74\x74\x6F\x6E\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6C\x6F\x73\x65\x22\x20\x64\x61\x74\x61\x2D\x64\x69\x73\x6D\x69\x73\x73\x3D\x22\x6D\x6F\x64\x61\x6C\x22\x3E\xD7\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E\x20\x3C\x68\x34\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x6F\x64\x61\x6C\x2D\x74\x69\x74\x6C\x65\x22\x3E\x3C\x62\x3E\x42\x6F\x74\x20\x4D\x65\x6E\x75\x3C\x2F\x62\x3E\x3C\x2F\x68\x34\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x6F\x64\x61\x6C\x2D\x62\x6F\x64\x79\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x32\x34\x70\x78\x22\x3E\x20\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x73\x74\x61\x72\x74\x69\x6E\x67\x42\x65\x74\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B\x22\x3E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x42\x65\x74\x3A\x20\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x69\x6E\x70\x75\x74\x20\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x3D\x22\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x42\x65\x74\x22\x20\x69\x64\x3D\x22\x69\x6E\x70\x75\x74\x42\x6F\x78\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x6F\x72\x6D\x2D\x63\x6F\x6E\x74\x72\x6F\x6C\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x22\x3E\x3C\x2F\x69\x6E\x70\x75\x74\x3E\x3C\x62\x72\x3E\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x61\x72\x41\x66\x74\x65\x72\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B\x22\x3E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x6E\x74\x69\x2D\x52\x61\x69\x6E\x62\x6F\x77\x20\x41\x66\x74\x65\x72\x3A\x20\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x69\x6E\x70\x75\x74\x20\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x3D\x22\x41\x6E\x74\x69\x2D\x52\x61\x69\x6E\x62\x6F\x77\x20\x41\x66\x74\x65\x72\x22\x20\x69\x64\x3D\x22\x69\x6E\x70\x75\x74\x42\x6F\x78\x32\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x6F\x72\x6D\x2D\x63\x6F\x6E\x74\x72\x6F\x6C\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x22\x3E\x3C\x2F\x69\x6E\x70\x75\x74\x3E\x3C\x62\x72\x3E\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x61\x72\x54\x69\x6D\x65\x73\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B\x22\x3E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x55\x73\x65\x20\x41\x6E\x74\x69\x2D\x52\x61\x69\x6E\x62\x6F\x77\x3A\x20\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x69\x6E\x70\x75\x74\x20\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x3D\x22\x55\x73\x65\x20\x41\x6E\x74\x69\x2D\x52\x61\x69\x6E\x62\x6F\x77\x22\x20\x69\x64\x3D\x22\x69\x6E\x70\x75\x74\x42\x6F\x78\x33\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x6F\x72\x6D\x2D\x63\x6F\x6E\x74\x72\x6F\x6C\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x22\x3E\x3C\x2F\x69\x6E\x70\x75\x74\x3E\x3C\x62\x72\x3E\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x61\x62\x52\x75\x70\x74\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B\x22\x3E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x6E\x74\x69\x2D\x42\x61\x6E\x6B\x72\x75\x70\x74\x20\x4C\x69\x6D\x69\x74\x3A\x20\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x69\x6E\x70\x75\x74\x20\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x3D\x22\x41\x6E\x74\x69\x2D\x42\x61\x6E\x6B\x72\x75\x70\x74\x20\x4C\x69\x6D\x69\x74\x22\x20\x69\x64\x3D\x22\x69\x6E\x70\x75\x74\x42\x6F\x78\x34\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x6F\x72\x6D\x2D\x63\x6F\x6E\x74\x72\x6F\x6C\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x22\x3E\x3C\x2F\x69\x6E\x70\x75\x74\x3E\x3C\x62\x72\x3E\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x61\x74\x54\x69\x6D\x65\x6F\x75\x74\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B\x22\x3E\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x6E\x74\x69\x2D\x54\x69\x6D\x65\x6F\x75\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x3A\x20\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x69\x6E\x70\x75\x74\x20\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x3D\x22\x41\x6E\x74\x69\x2D\x54\x69\x6D\x65\x6F\x75\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x22\x20\x69\x64\x3D\x22\x69\x6E\x70\x75\x74\x42\x6F\x78\x35\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x6F\x72\x6D\x2D\x63\x6F\x6E\x74\x72\x6F\x6C\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x22\x3E\x3C\x2F\x69\x6E\x70\x75\x74\x3E\x3C\x62\x72\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x6F\x64\x61\x6C\x2D\x66\x6F\x6F\x74\x65\x72\x22\x20\x69\x64\x3D\x22\x66\x6F\x6F\x74\x65\x72\x50\x61\x6E\x65\x6C\x22\x3E\x20\x3C\x62\x75\x74\x74\x6F\x6E\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x20\x62\x74\x6E\x2D\x73\x75\x63\x63\x65\x73\x73\x20\x62\x74\x6E\x2D\x62\x6C\x6F\x63\x6B\x20\x62\x6F\x74\x62\x75\x74\x74\x6F\x6E\x22\x20\x64\x61\x74\x61\x2D\x64\x69\x73\x6D\x69\x73\x73\x3D\x22\x6D\x6F\x64\x61\x6C\x22\x3E\x53\x74\x61\x72\x74\x20\x42\x6F\x74\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E\x20\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E","\x70\x72\x65\x70\x65\x6E\x64","\x62\x6F\x64\x79","\x3C\x62\x72\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x20\x64\x61\x74\x61\x2D\x74\x6F\x67\x67\x6C\x65\x3D\x22\x6D\x6F\x64\x61\x6C\x22\x20\x64\x61\x74\x61\x2D\x74\x61\x72\x67\x65\x74\x3D\x22\x23\x62\x6F\x74\x4D\x65\x6E\x75\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x75\x6C\x6C\x2D\x72\x69\x67\x68\x74\x22\x3E\x42\x6F\x74\x20\x53\x65\x74\x74\x69\x6E\x67\x73\x3C\x2F\x61\x3E","\x64\x69\x76\x20\x2E\x63\x68\x65\x63\x6B\x62\x6F\x78\x2E\x70\x75\x6C\x6C\x2D\x72\x69\x67\x68\x74","\x59\x6F\x75\x20\x73\x74\x69\x6C\x6C\x20\x6E\x65\x65\x64\x20\x74\x6F\x20\x73\x65\x74\x20\x79\x6F\x75\x72\x20\x73\x74\x61\x72\x74\x69\x6E\x67\x20\x62\x65\x74\x21","\x62\x6C\x61\x63\x6B","\x41\x6E\x74\x69\x20\x54\x69\x6D\x65\x6F\x75\x74\x20\x4D\x65\x73\x73\x61\x67\x65","\x64\x69\x73\x70\x6C\x61\x79","\x6E\x6F\x6E\x65","\x63\x73\x73","\x73\x74\x79\x6C\x65","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72","\x23\x73\x74\x61\x72\x74\x69\x6E\x67\x42\x65\x74","\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B","\x23\x69\x6E\x70\x75\x74\x42\x6F\x78","\x23\x69\x6E\x70\x75\x74\x42\x6F\x78\x32","\x23\x61\x72\x41\x66\x74\x65\x72","\x23\x69\x6E\x70\x75\x74\x42\x6F\x78\x33","\x23\x61\x72\x54\x69\x6D\x65\x73","\x23\x61\x62\x52\x75\x70\x74","\x23\x69\x6E\x70\x75\x74\x42\x6F\x78\x34","\x23\x61\x74\x54\x69\x6D\x65\x6F\x75\x74","\x23\x69\x6E\x70\x75\x74\x42\x6F\x78\x35","\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72","\x76\x61\x6C","\x6C\x65\x6E\x67\x74\x68","\x69\x73\x4E\x75\x6D\x65\x72\x69\x63","\x23\x62\x65\x74\x41\x6D\x6F\x75\x6E\x74","\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x42\x65\x74\x3A\x20\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E","\x20\x63\x6F\x69\x6E\x28\x73\x29","\x68\x74\x6D\x6C","\x6D\x6F\x75\x73\x65\x6F\x75\x74","\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x6E\x74\x69\x2D\x52\x61\x69\x6E\x62\x6F\x77\x20\x41\x66\x74\x65\x72\x3A\x20\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E","\x20\x72\x6F\x6C\x6C\x28\x73\x29","\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x55\x73\x65\x20\x41\x6E\x74\x69\x2D\x52\x61\x69\x6E\x62\x6F\x77\x3A\x20\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E","\x20\x74\x69\x6D\x65\x28\x73\x29","\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x6E\x74\x69\x2D\x42\x61\x6E\x6B\x72\x75\x70\x74\x20\x4C\x69\x6D\x69\x74\x3A\x20\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E","\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x41\x6E\x74\x69\x2D\x54\x69\x6D\x65\x6F\x75\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x3A\x20\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E","\x54\x69\x6D\x47\x46\x58\x20\x42\x6F\x74\x20\x4C\x6F\x61\x64\x65\x64","\x53\x65\x74\x20\x61\x20\x73\x74\x61\x72\x74\x69\x6E\x67\x20\x62\x65\x74\x20\x66\x69\x72\x73\x74\x21","\x77\x61\x72\x6E","\x3C\x62\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x65\x78\x74\x2D\x73\x75\x63\x63\x65\x73\x73\x22\x3E\x42\x6F\x74\x20\x53\x74\x61\x72\x74\x65\x64\x3C\x62\x72\x3E","\x31","\x75\x6E\x6B\x6E\x6F\x77\x6E","\x77\x61\x69\x74\x69\x6E\x67","\x72\x6F\x6C\x6C\x65\x64","\x73\x75\x62\x6D\x69\x74","\x23\x63\x68\x61\x74\x4D\x65\x73\x73\x61\x67\x65","\x42\x41\x4E\x4B\x52\x55\x50\x54\x21\x20\x4E\x6F\x74\x20\x65\x6E\x6F\x75\x67\x68\x20\x62\x61\x6C\x61\x6E\x63\x65\x20\x66\x6F\x72\x20\x6E\x65\x78\x74\x20\x62\x65\x74\x2C\x61\x62\x6F\x72\x74\x69\x6E\x67\x2E","\x3C\x62\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x65\x78\x74\x2D\x65\x72\x72\x6F\x72\x22\x3E\x42\x61\x6E\x6B\x72\x75\x70\x74\x2F\x41\x6E\x74\x69\x2D\x42\x61\x6E\x6B\x72\x75\x70\x74\x20\x4C\x69\x6D\x69\x74\x20\x72\x65\x61\x63\x68\x65\x64\x21\x3C\x2F\x62\x3E\x3C\x62\x72\x3E","\x20\x0A\x53\x74\x61\x74\x75\x73\x3A\x20","\x0A\x49\x6E\x69\x74\x69\x61\x6C\x20\x62\x65\x74\x20\x61\x6D\x6F\x75\x6E\x74\x3A\x20","\x0A\x43\x75\x72\x72\x65\x6E\x74\x20\x62\x65\x74\x20\x61\x6D\x6F\x75\x6E\x74\x3A\x20","\x0A\x52\x61\x69\x6E\x62\x6F\x77\x73\x3A\x20","\x0A\x54\x6F\x74\x61\x6C\x20\x52\x61\x69\x6E\x62\x6F\x77\x73\x20\x42\x65\x74\x3A\x20","\x0A\x42\x65\x74\x73\x20\x57\x6F\x6E\x3A\x20","\x0A\x42\x65\x74\x73\x20\x4C\x6F\x73\x74\x3A\x20","\x0A\x54\x6F\x74\x61\x6C\x20\x42\x65\x74\x73\x3A\x20","\x0A\x54\x6F\x74\x61\x6C\x20\x65\x61\x72\x6E\x65\x64\x20\x70\x6F\x69\x6E\x74\x73\x3A\x20","\x0A\x42\x61\x6C\x61\x6E\x63\x65\x3A\x20","\x0A\x4C\x61\x73\x74\x20\x72\x6F\x6C\x6C\x20\x72\x65\x73\x75\x6C\x74\x3A\x20","\x2D","\x77\x6F\x6E","\x6C\x6F\x73\x74","\x6C\x6F\x67","\x42\x6F\x74\x20\x73\x74\x6F\x70\x70\x65\x64\x2C\x20\x42\x61\x6C\x61\x6E\x63\x65\x20\x3A","\x20\x70\x6F\x69\x6E\x74\x73\x2E","\x72\x65\x64","\x3C\x62\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x65\x78\x74\x2D\x73\x75\x63\x63\x65\x73\x73\x22\x3E\x42\x65\x74\x20\x50\x6C\x61\x63\x65\x64\x21\x3C\x2F\x62\x3E\x3C\x62\x72\x3E","\x63\x6C\x69\x63\x6B","\x74\x65\x78\x74","\x52\x6F\x6C\x6C\x69\x6E\x67\x20\x69\x6E","\x2A\x2A\x2A\x52\x4F\x4C\x4C\x49\x4E\x47\x2A\x2A\x2A","\x72\x6F\x6C\x6C\x69\x6E\x67","\x73\x70\x6C\x69\x74","\x69\x6E\x64\x65\x78\x4F\x66","\x67\x72\x65\x65\x6E","\x23\x62\x61\x6C\x61\x6E\x63\x65","\x2E\x70\x72\x6F\x67\x72\x65\x73\x73\x20\x23\x62\x61\x6E\x6E\x65\x72","\x23\x70\x61\x6E\x65\x6C\x31\x2D\x37\x20\x2E\x62\x65\x74\x42\x75\x74\x74\x6F\x6E","\x23\x70\x61\x6E\x65\x6C\x38\x2D\x31\x34\x20\x2E\x62\x65\x74\x42\x75\x74\x74\x6F\x6E","\x2E\x62\x6F\x74\x62\x75\x74\x74\x6F\x6E"];$(_0x9fdc[2])[_0x9fdc[1]](_0x9fdc[0]);$(_0x9fdc[2])[_0x9fdc[1]](_0x9fdc[3]);$(_0x9fdc[2])[_0x9fdc[1]](_0x9fdc[0]);$(_0x9fdc[5])[_0x9fdc[7]]()[_0x9fdc[6]]({scrollTop:$(_0x9fdc[5])[0][_0x9fdc[4]]},800);$(_0x9fdc[10])[_0x9fdc[9]](_0x9fdc[8]);$(_0x9fdc[12])[_0x9fdc[1]](_0x9fdc[11]);var initialBetAmount=_0x9fdc[13];var betColor=_0x9fdc[14];var anti_rainbow=1;var amount_of_rrolls=3;var amount_of_rrolls2=1;var moneylimit=100;var anti_timeout=_0x9fdc[15];$(_0x9fdc[21])[_0x9fdc[32]](function(){$(_0x9fdc[21])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[23])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[24])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[25])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[26])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[27])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[28])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[29])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[30])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[31])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);});$(_0x9fdc[23])[_0x9fdc[40]](function(){var _0xdcabx8=$(_0x9fdc[23])[_0x9fdc[33]]();if(_0xdcabx8[_0x9fdc[34]]>0&&$[_0x9fdc[35]](_0xdcabx8)===true){$(_0x9fdc[36])[_0x9fdc[33]](_0xdcabx8);initialBetAmount=_0xdcabx8;$(_0x9fdc[21])[_0x9fdc[39]](_0x9fdc[37]+_0xdcabx8+_0x9fdc[38]);}else {$(_0x9fdc[21])[_0x9fdc[39]](_0x9fdc[37])};$(_0x9fdc[23])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[21])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);});$(_0x9fdc[25])[_0x9fdc[32]](function(){$(_0x9fdc[25])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[24])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[23])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[21])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[26])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[27])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[28])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[29])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[30])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[31])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);});$(_0x9fdc[24])[_0x9fdc[40]](function(){var _0xdcabx8=$(_0x9fdc[24])[_0x9fdc[33]]();if(_0xdcabx8[_0x9fdc[34]]>0&&$[_0x9fdc[35]](_0xdcabx8)===true){$(_0x9fdc[25])[_0x9fdc[39]](_0x9fdc[41]+_0xdcabx8+_0x9fdc[42]);amount_of_rrolls=_0xdcabx8;}else {$(_0x9fdc[25])[_0x9fdc[39]](_0x9fdc[41])};$(_0x9fdc[24])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[25])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);});$(_0x9fdc[27])[_0x9fdc[32]](function(){$(_0x9fdc[27])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[26])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[23])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[21])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[24])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[25])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[28])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[29])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[30])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[31])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);});$(_0x9fdc[26])[_0x9fdc[40]](function(){var _0xdcabx8=$(_0x9fdc[26])[_0x9fdc[33]]();if(_0xdcabx8[_0x9fdc[34]]>0&&$[_0x9fdc[35]](_0xdcabx8)===true){$(_0x9fdc[27])[_0x9fdc[39]](_0x9fdc[43]+_0xdcabx8+_0x9fdc[44]);amount_of_rrolls2=_0xdcabx8;}else {$(_0x9fdc[27])[_0x9fdc[39]](_0x9fdc[43])};$(_0x9fdc[26])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[27])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);});$(_0x9fdc[28])[_0x9fdc[32]](function(){$(_0x9fdc[28])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[29])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[27])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[26])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[23])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[21])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[24])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[25])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[30])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[31])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);});$(_0x9fdc[29])[_0x9fdc[40]](function(){var _0xdcabx8=$(_0x9fdc[29])[_0x9fdc[33]]();if(_0xdcabx8[_0x9fdc[34]]>0&&$[_0x9fdc[35]](_0xdcabx8)===true){$(_0x9fdc[28])[_0x9fdc[39]](_0x9fdc[45]+_0xdcabx8+_0x9fdc[38]);moneylimit=_0xdcabx8;}else {$(_0x9fdc[28])[_0x9fdc[39]](_0x9fdc[45])};$(_0x9fdc[29])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[28])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);});$(_0x9fdc[30])[_0x9fdc[32]](function(){$(_0x9fdc[28])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[29])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[27])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[26])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[23])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[21])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[24])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[25])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);$(_0x9fdc[30])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[31])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);});$(_0x9fdc[31])[_0x9fdc[40]](function(){var _0xdcabx8=$(_0x9fdc[31])[_0x9fdc[33]]();anti_timeout=_0xdcabx8;$(_0x9fdc[30])[_0x9fdc[39]](_0x9fdc[46]+_0xdcabx8);$(_0x9fdc[31])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[17]);$(_0x9fdc[30])[_0x9fdc[20]](_0x9fdc[19])[_0x9fdc[18]](_0x9fdc[16],_0x9fdc[22]);});$(_0x9fdc[36])[_0x9fdc[33]](_0x9fdc[47]);$(_0x9fdc[90])[_0x9fdc[78]](function(){$(_0x9fdc[36])[_0x9fdc[33]](initialBetAmount);if(initialBetAmount===_0x9fdc[13]){console[_0x9fdc[49]](_0x9fdc[48])}else {if($[_0x9fdc[35]](initialBetAmount)===true){$(_0x9fdc[2])[_0x9fdc[1]](_0x9fdc[50]);$(_0x9fdc[5])[_0x9fdc[7]]()[_0x9fdc[6]]({scrollTop:$(_0x9fdc[5])[0][_0x9fdc[4]]},800);var _0xdcabx9=0;var _0xdcabxa;var _0xdcabxb=0;var _0xdcabxc=_0x9fdc[51];var _0xdcabxd=0;var _0xdcabxe=0;var _0xdcabxf=0;var _0xdcabx10=0;var _0xdcabx11=0;var _0xdcabx12=0;function _0xdcabx13(){var _0xdcabx14=_0xdcabx22();if(_0xdcabx14!==_0xdcabx2a&&_0x9fdc[52]!==_0xdcabx14){switch(_0xdcabx14){case _0x9fdc[53]:_0xdcabx1f();break ;;case _0x9fdc[54]:_0xdcabx17();break ;;};_0xdcabx2a=_0xdcabx14,_0xdcabx16;};}function _0xdcabx15(){$(_0x9fdc[56])[_0x9fdc[33]](anti_timeout)[_0x9fdc[55]]();if((_0xdcabx24()<_0xdcabx28)||(_0xdcabx24()<moneylimit)){console[_0x9fdc[49]](_0x9fdc[57]);clearInterval(_0xdcabx32);$(_0x9fdc[2])[_0x9fdc[1]](_0x9fdc[58]);$(_0x9fdc[5])[_0x9fdc[7]]()[_0x9fdc[6]]({scrollTop:$(_0x9fdc[5])[0][_0x9fdc[4]]},800);return false;}else {return true};}function _0xdcabx16(){var _0xdcabx14=_0x9fdc[59]+_0xdcabx2a+_0x9fdc[60]+initialBetAmount+_0x9fdc[61]+_0xdcabx28+_0x9fdc[62]+_0xdcabx10+_0x9fdc[63]+_0xdcabxe+_0x9fdc[64]+_0xdcabx11+_0x9fdc[65]+_0xdcabx12+_0x9fdc[66]+_0xdcabxd+_0x9fdc[67]+_0xdcabx9+_0x9fdc[68]+_0xdcabx24()+_0x9fdc[69]+(null===_0xdcabx27()?_0x9fdc[70]:_0xdcabx27()?_0x9fdc[71]:_0x9fdc[72]);console[_0x9fdc[73]](_0xdcabx14);}function _0xdcabx17(){return _0x9fdc[51]===_0xdcabxc?void(_0xdcabx18)():(_0xdcabx18(),void(_0xdcabx29)++)}function _0xdcabx18(){if(_0xdcabx24()>=_0xdcabx34&&_0xdcabx33==1){clearInterval(_0xdcabx32);console[_0x9fdc[49]](_0x9fdc[74]+_0xdcabx34+_0x9fdc[75]);};_0xdcabxd=_0xdcabxd+1;_0xdcabx28=_0xdcabx27()?initialBetAmount:2*_0xdcabx28;if(_0xdcabx10>=amount_of_rrolls&&anti_rainbow==1){_0xdcabxf=_0xdcabxf+1;_0xdcabx1a();}else {_0xdcabxf=0;_0xdcabx27()?_0xdcabx1d():_0xdcabx1e();};_0xdcabx19();}function _0xdcabx19(){_0xdcabx9=_0xdcabx11*initialBetAmount}function _0xdcabx1a(){if(_0xdcabxf==amount_of_rrolls2){_0xdcabx10=0};_0xdcabxe=_0xdcabxe+1;_0xdcabx27()?_0xdcabx1b():_0xdcabx1c();}function _0xdcabx1b(){if(_0xdcabx2b==_0x9fdc[76]){betColor=_0x9fdc[14]}else {betColor=_0x9fdc[76]}}function _0xdcabx1c(){if(_0xdcabx2b==_0x9fdc[76]){betColor=_0x9fdc[76]}else {(_0xdcabx2b==_0x9fdc[14])};{BetColor=_0x9fdc[14]}}function _0xdcabx1d(){_0xdcabx11=_0xdcabx11+1;_0xdcabx10=0;if(_0xdcabx2b==_0x9fdc[76]){betColor=_0x9fdc[76]}else {(_0xdcabx2b==_0x9fdc[14])};{BetColor=_0x9fdc[14]}}function _0xdcabx1e(){_0xdcabx12=_0xdcabx12+1;_0xdcabx10=_0xdcabx10+1;if(_0xdcabx2b==_0x9fdc[76]){betColor=_0x9fdc[14]}else {betColor=_0x9fdc[76]};}function _0xdcabx1f(){_0xdcabx15()&&(_0xdcabx20(_0xdcabx28),setTimeout(_0xdcabx21,50))}function _0xdcabx20(_0xdcabx14){_0xdcabx2e[_0x9fdc[33]](_0xdcabx14)}function _0xdcabx21(){$(_0x9fdc[2])[_0x9fdc[1]](_0x9fdc[77]);$(_0x9fdc[5])[_0x9fdc[7]]()[_0x9fdc[6]]({scrollTop:$(_0x9fdc[5])[0][_0x9fdc[4]]},800);return _0x9fdc[76]===betColor?(_0xdcabx30[_0x9fdc[78]](),void((_0xdcabx2b=_0x9fdc[76]))):(_0xdcabx31[_0x9fdc[78]](),void((_0xdcabx2b=_0x9fdc[14])));}function _0xdcabx22(){var _0xdcabx14=_0xdcabx2f[_0x9fdc[79]]();if(_0xdcabx25(_0xdcabx14,_0x9fdc[80])){return _0x9fdc[53]};if(_0xdcabx25(_0xdcabx14,_0x9fdc[81])){return _0x9fdc[82]};if(_0xdcabx25(_0xdcabx14,_0x9fdc[54])){var _0xdcabx23=parseInt(_0xdcabx14[_0x9fdc[83]](_0x9fdc[54])[1]);return _0xdcabx2c=_0xdcabx26(_0xdcabx23),_0x9fdc[54];};return _0x9fdc[52];}function _0xdcabx24(){return parseInt(_0xdcabx2d[_0x9fdc[79]]())}function _0xdcabx25(_0xdcabx14,_0xdcabx23){return _0xdcabx14[_0x9fdc[84]](_0xdcabx23)> -1}function _0xdcabx26(_0xdcabx14){return 0==_0xdcabx14?_0x9fdc[85]:_0xdcabx14>=1&&7>=_0xdcabx14?_0x9fdc[76]:_0x9fdc[14]}function _0xdcabx27(){return _0xdcabx2b?_0xdcabx2c===_0xdcabx2b:null}var _0xdcabx28=initialBetAmount,_0xdcabx29=1,_0xdcabx2a,_0xdcabx2b,_0xdcabx2c,_0xdcabx2d=$(_0x9fdc[86]),_0xdcabx2e=$(_0x9fdc[36]),_0xdcabx2f=$(_0x9fdc[87]),_0xdcabx30=$(_0x9fdc[88]),_0xdcabx31=$(_0x9fdc[89]),_0xdcabx32=setInterval(_0xdcabx13,500);var _0xdcabx33=0;var _0xdcabx34=99999999999999999;}};});
window.setInterval(function() {
	        if ($('.divchat:contains(\"Connection lost...\")').length > 0) {
	            location.reload();
	        }
	        if ($('.divchat:contains("Please sign in through Steam to connect.")').length > 0) {
	            window.location.href = 'http://csgodouble.com/?login';
	        }
	    }, 250);
