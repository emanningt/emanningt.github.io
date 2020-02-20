---
layout: post
title:      "MVC and how I learned it"
date:       2020-02-20 18:48:30 +0000
permalink:  mvc_and_how_i_learned_it
---


 MVC in sinatra was quite confuseing at first. Once I spent more time in it can builiding out my own application things started to come together. 
 
 Controler: 
 
 The controler is where most ruby code is written. Really as a programmer you should be thinking of how to make your file easier when writting your code but also legibel so people know whats going on and how to fallow. 
 
```
calss  ApplicationController < Sinatra::Base
    get "/" do
    erb :hello
    end
end 
```
This is a very basic idea of what a controler can look like. Think about your application controller home base. This is where the rest of your controlers are inhareting form. Again this is a way to making your life easier so in hear you may also write methods that are more complex then this. 
```
calss  ApplicationController < Sinatra::Base

    get "/" do
     erb :hello
    end

   def logged_in?
     !!current_user
    end 

     def current_user
      @current_user ||= User.find_by(:email => session[:email]) if session[:email]
     end
end 
```

This is an example form one of my project where I definded a method named curent user and i defined a method named logged_in?. This allows me to just us logged in to check if a user is loged thoughout my program so I can make sure there being directed to the wright page. 

Views:

Views will be your HTML/ERB files. 


Models:

These will be your ruby files that will connect your  users and lets say post (but this coule really be what ever you want your app to be).
