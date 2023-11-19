"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var courses_1 = require("./courses");
var studyGroups_1 = require("./studyGroups");
var enrolledEvents = [];
function searchEvents(options) {
    var events = options.eventType === "courses" ? courses_1.default : studyGroups_1.default;
    return events.filter(function (event) {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
}
function enroll(event) {
    enrolledEvents = __spreadArray([], enrolledEvents.event, true);
}
var searchResults = searchEvents({ query: 'art',
    eventType: 'courses' });
enroll(searchResults[0]);
console.log(enrolledEvents);
