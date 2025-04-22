const express = require('express');
const mongoose = require('mongoose');

const note = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    isPinned: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now   // automatically sets current date & time
    }
});

const noteDetails = mongoose.model('Notes', note);
module.exports = noteDetails;
