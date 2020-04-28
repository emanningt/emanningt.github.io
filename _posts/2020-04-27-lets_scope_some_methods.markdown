---
layout: post
title:      "Let's Scope Some Methods"
date:       2020-04-27 22:56:47 -0400
permalink:  lets_scope_some_methods
---


If you're new to Rails you might be asking, "Scope methods, umm what the heck is that, and what am I supossed to do with it?" Well let's get right into it and figure it out together.

First off, we want to know, where do Scope methods start? I have learned that you want to start in your Models controller. This is because scopes are actually related to models.  Let me set up a scenario for you, hopefully this explanation will give you a clearer understanding of how this can work. 

We will start with a Post Model, let's add our method here:

```
class Post < ApplicationRecord
 
end
```

We have a Post Controller that has an index that shows all of our Posts. That would look a little something like...

```
class PostController < ApplicationController

   def index
	 @post = Post.all
   end
	 

end 
```

 Now that we have an idea of where we are, let's talk about what we want to do with scopes. Scopes let us organize data. Lets say people on your application are posting all sorts of information, and you want it to be more organized. So you decide that you want all the posts to be organized alphabetically by there titles. That can be arranged! Lets do this and see an example of a scope method. 

Starting in my Post model:
 
 
```
class Post < ApplicationRecord
 
     def self.alpha
       order(:title)
     end 
 
end
```

What this Scope method wants to do is order an object called Title. But, right now the Scope method doesn't know what object or where. I also want to point out that I named it alpha for alphabatize. When you're naming your method you want to make sure it is clear and simple so if others are going through your code, it is easily understood . I could have said "`self.aksdjlfaldjf` "but that wouldn't make any sense, and it would not be a phrase I would remember . Sometimes you're using scope methods numerous times, so my advice is to keep it simple. 

Let's move on. Now we want to update our controller with our new scope method.

```
class PostController < ApplicationController

   def index
	 @post = Post.all.alpha
   end
	 

end 
```

What this will give me on my views page is an alphabatized list of all the posts by title name. Now, I know this is very basic but, you could make your scope methods as ellaborate as you would like.

Active Record has many different way to retreive data from the database. In my example method above we used order. There are quite a few options avalible to use though. 

The methods are:

* annotate
* find
* create_with
* distinct
* eager_load
* extending
* extract_associated
* from
* group
* having
* includes
* joins
* left_outer_joins
* limit
* lock
* none
* offset
* optimizer_hints
* order
* preload
* readonly
* references
* reorder
* reselect
* reverse_order
* select
* where

You can perform certain queries on your database with these finder methods. Which is great because it saves you from having to write out raw SQL


I have provided below a great resource for scope methods that helped me learn more about them and the magic that is of scopes. I hope this helps you scope some methods of your own!

Resouce:
[Scope](https://apidock.com/rails/ActiveRecord/NamedScope/ClassMethods/scope)
[Active Record Querying](https://guides.rubyonrails.org/active_record_querying.html)

