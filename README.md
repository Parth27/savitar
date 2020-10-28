[![DOI](https://zenodo.org/badge/299409059.svg)](https://zenodo.org/badge/latestdoi/299409059)
[![Build Status](https://travis-ci.com/Parth27/savitar.svg?branch=master)](https://travis-ci.com/Parth27/savitar)
[![Coverage Status](https://coveralls.io/repos/github/Parth27/savitar/badge.svg?branch=master)](https://coveralls.io/github/Parth27/savitar?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/e8b36018aedb7e1e7fb9/maintainability)](https://codeclimate.com/github/Parth27/savitar/maintainability)
<img src = "https://img.shields.io/github/license/Parth27/savitar">
<img src = "https://img.shields.io/github/issues/Parth27/savitar">
<img src = "https://img.shields.io/github/last-commit/Parth27/savitar">
<img src = "https://img.shields.io/tokei/lines/github/Parth27/savitar">
<img src = "https://img.shields.io/github/languages/count/Parth27/savitar">
<img src = "https://img.shields.io/github/languages/top/Parth27/savitar?color=green">
<img src = "https://img.shields.io/github/repo-size/Parth27/savitar?color=orange">
<img src = "https://img.shields.io/github/issues-closed/Parth27/savitar">
<img src = "https://img.shields.io/github/issues-pr/Parth27/Savitar">
<img src = "https://img.shields.io/npm/v/savitar-extension">
<img src = "https://img.shields.io/github/contributors/Parth27/savitar">

# Savitar - A user-friendly jobs filter extension for LinkedIn [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Do%20you%20plan%20to%20improve%20your%20job%20searches%20on%20LinkedIn%3F%20Look%20no%20further.%20Savitar%20is%20the%20right%20extension%20for%20the%20job.%20Use%20it!%20Tweet%20it!%20Enjoy%20it!%20&hashtags=LinkedIn%20feature%20recommendations%20%20&url=https%3A%2F%2Fgithub.com%2Fpushkardravid%2Fsavitar%2F%20)


---

We all know, how challenging it is to find the job that meets all your expectations and requirements. LinkedIn is one of the largest job portals which connects job seekers to recruiters throughout the globe. There are innumerable jobs in various industries, but in order to find the job based on an individual's requisites, it obligates the need for one, to make seperate searches. In order to identify and tag the specific requirements for targeted searches, we bring to you **Savitar, a Chrome Extension** that helps you summarize a linkedin job posting so you dont have to spend your time reading through job descriptions that may not be relevant to you!

---


# Project Video and Demo

[![Savitar demo](https://img.youtube.com/vi/sKJj4aNkDVI/0.jpg)](https://www.youtube.com/watch?v=sKJj4aNkDVI)


# What we completed in phase 2
* Replaced dummy data of badges with actual realtime data by parsing job descriptions.
* Expanded the functionality of project by adding two additional badges: "Remote available" and "Degree requirement".
* Completed integrating the Chrome extension with LinkedIn.
* Added Unit Tests for Javascript related part of the project.
* Added browser testing using Selenium for verifying html part of the code.
* Generated automated documentation using JSdoc.

# Download the chrome extension 
Download the packed extension in .crx format <a id="raw-url" href="https://raw.githubusercontent.com/Parth27/savitar/master/Downloads/savitar.crx">Savitar</a>


# Project Set up
* Run "npm install savitar-extension" OR Download and extract the repo.
* Go to chrome://extensions/.
* Switch on developer mode, select Load Unpacked and select the downloaded repository folder
* Go to any job description on LinkedIn and turn on the extension as shown in the demo.

# Phase 3

## Implementation
There are many ways to expand this project further.
* Extend functionality to other job portals such as Glassdoor, Indeed, etc.
* Change parsing method to a more sophisticated NLP approach (There is a lot of recruitment data available on the web, which can be used for ML/NLP approaches).
* Create extensions for other browsers such as Firefox and Edge.

## Hypothesis
* With the help of this chrome extention, one can speed up the job filtering process on linkedln by 70 percent!!!

## Experimental setup for quantitative evaluation of our project
### Goal
To compare the time one takes to decide to apply for a given job on linkedln with and withput using savitar.

### Experiment
* Take two similar job descriptions from Linkedln.
* Pick a person and show them one of the job descriptions.
* Without using savitar, ask them to make a decision on if they want to apply for given job or not. Record the time taken to make this decision.
* Now, using savitar, again ask them to make a decision for the other job profile. Again, record the time.
* Now compare both the times.

* Repeat this experiment with sets of more number of jobs and for more number of people.
* Analyse and compare the timing data statistically to verify the hypothesis.


