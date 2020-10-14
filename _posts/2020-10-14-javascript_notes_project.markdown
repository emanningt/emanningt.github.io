---
layout: post
title:      "JavaScript Notes Project"
date:       2020-10-14 14:58:41 -0400
permalink:  javascript_notes_project
---


For my JavaScript Project I built a Note API. My Notes API  has two Models in rails: A Categories Model, and a Notes Model. A Category will have many notes where Notes will belong to a specific Category. The inspiration came from a desire I had to personally create something that would help  keep better track of some of the notes I take for school and work.  I also wanted to take it just a little further, and allow the user to be able to create any category that is right for them. 

In this JS Notes API a user can create a new Category and add individual Notes to that category. There is no limit to what they can do or keep track of in this API. There were some nice takeaways from building out this project that I would like to share.

One the first things I had to overcome was understanding the DOM. Especially since JavaScript is still so new to me, It was tough at times to figure it all out. When I learned you can interact with the DOM using Javascript, all I could think was "what the heck are you talking about!". I was pretty lost at one point. Fortunately, the DOM (Document Object Model), and the way you interact through it with Javascript became much easier once you see it in action. 

Something I had to learn early on was that DOM reads HTML and other elements on a pace, and you can use Javascript to interact, and in some cases manipulate it, at your will to do what you would like to do. There are many [events and methods](https://developer.mozilla.org/en-US/docs/Web/API/Element) within Javascript that helps you to be able to do this. 

 [Properties/Methods](https://developer.mozilla.org/en-US/docs/Web/API/Element)
*  Property
    *   `innerHTML`
    *   `tagName`
    *   `id`
* Methods
    * `addEventListener()`
    * `QuerySelector()`
    * `remove()`

These are some examples of properties and methods that can be used within Javascript to manipulate the DOM.

This Notes API has been a great way to learn some amazing ways to manipulate the DOM and it showed me the importence of functions with in Javascript. There was a lot of take aways from scope, fetch, JS objects, looping and so much more. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) web docs was a great resouce when learning for when I had questions. 



