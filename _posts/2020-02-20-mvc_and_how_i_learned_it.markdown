---
layout: post
title:      "MVC & How I Learned It"
date:       2020-02-20 13:48:31 -0500
permalink:  mvc_and_how_i_learned_it
---


 MVC in Sinatra was quite confusing at first. Once I spent more time in it can build out my application things started to come together. 
 
 **Controler: Contains Control Logic**
 
 The controller is where most ruby code is written. This is where you create commands that will control the input for the model and view. 
 
 
```
calss  ApplicationController < Sinatra::Base
    get "/" do
    erb: hello
    end
end 
```
This is a very basic idea of what a controller can look like. Think about your application controller home base. This is where the rest of your controllers are inheriting form. Again this is a way to making your life easier so in hearing you may also write methods that are more complex than this. 
```
class  ApplicationController < Sinatra::Base

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

This is an example form one of my projects where I defined a method named current user and i defined a method named logged_in?. This allows me to just we logged in to check if a user is logged throughout my program so I can make sure there is directed to the right page. 

**Views: Defines Display**

Views will be your HTML/ERB files. 

Any representation of information such as a chart, diagram or table. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.

```
 <h1> Hello world </h1>
```

This is basic HTML  with a `Hello World` tag on it so when the controller submits the `get` request in the URL you'll see the code you have written. 

Remember Myspace? Well if you do you might remember playing around with some of the HTML to change your background, text colors, adding charts or tables and so much more. 

You can do things like:

```
<div id="demo" class="big" dir="ltr" lang="en" style="color: red;" tabindex="0" title="Tooltip" contenteditable="true" spellcheck="true" data-htmlcheat="99">Hello World!</div>
```

Which would have some handy tools in it like change your text color Red! But this isn't an HTMP tutorial so I'll get back to what we were talking about lol. 

If you want to check out a great [HTML Cheat Sheet](https://htmlcheatsheet.com/) I have added the like in the description. 



**Models:  Defines Data Structure**

This is the center component of the application. It's the application's dynamic data structure and its independence for the user interface. 

The users don't interact with the Models in any way because it directly manages the logic that goes into the application. All the data and rules in the application are defined within the Models themself. When building out the database for the application the Models are directly involved with that. 

It would look something like:

```
class User < ActiveRecord::Base

  has_many: cards

end

class Cards < ActiveRecord::Base

  belongs_to :user
    
end


```

In this example, we have a `User` class and a `Card` class. I use this example because I created a [project]
(https://github.com/emanningt/robot_battle_league) around this idea. But this is a `has_many: cards` for the `User` and a `belongs_to: user` for the `Cards`. The user of this application will never really interact with this. They can create a card or even create a user for themself but it isn't the model that's allowing the viewer to do this its simply creating the structure for it. 

****Resources:

[HTML Cheat Sheet](https://htmlcheatsheet.com/)
[Sinatra Project](https://github.com/emanningt/robot_battle_league)
