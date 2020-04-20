---
layout: post
title:      "DadsBoard Rails Project"
date:       2020-04-20 05:17:47 +0000
permalink:  dadsboard_rails_project
---


The idea behind my DadBoard app came from just that... being board. Tasked with this project I thought wouldn't it be cool to have an app where dads could show each other how there spending their time with there kids or just round the house. 

There's a pandemic at the moment and while were all stuck inside I run out of ideas on what to do around the house. Well, here it DadsBoard and app for dads made by a dad.

Well, let's talk about the app. Built from the ground up I started with generating my rails app. 

I learned a lot about [generators](https://guides.rubyonrails.org/generators.html)  you can use. My favorite is the resource controller. What's great is that it does some of the work for you while you're starting out your project. I'll put out another blog soon on this. But there's great info out there as well if you do a quick google search.

From there the rest of my project started to take off. I always like to start by asking myself some questions... 

How will the user interact with my app?
Where do I want them to start?
Then I take it to form them. Typically i have like to start with a User and Session controller and model. As I did in my DadsBoard app this is important because I want a user to be able to log in and share their ideas. And this is important because the Ideas they share I want them to be associated with them ( I like to make sure the user gets credit for there work). 

Once you have that figured out you can pretty much take your App down whatever path you want. 

The biggest opportunity that I had was working with [Omniauth](https://github.com/omniauth/omniauth). This Gem was for me to vary tricky to figure out. I chose the [Omniauth-GitHub](https://github.com/omniauth/omniauth-github) option (which Omniauth has may option) mainly because I use it so much during programming it was the first thing that came to mind.

Omniauth was no joke finding out for the first time. It was definitely a lot of trial and error. The biggest obstacle I had to overcome was what hash key I was pulling form and implementing as my user. 

For anyone that doesn't know what Omniauth is I found a great blog from someone who goes over it really well. It was for implementing Google's authentication strategy. 

Blog name : [Google Authentication Strategy](https://medium.com/swlh/google-authentication-strategy-for-rails-5-application-cd37947d2b1b)




