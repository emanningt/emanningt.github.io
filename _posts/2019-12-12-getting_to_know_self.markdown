---
layout: post
title:      "Getting to know Self "
date:       2019-12-13 02:19:53 +0000
permalink:  getting_to_know_self
---

Understanding `self` and the destination of it in Ruby helped me with the first project I put together. `self` in a class can be defined as giving you access to the current object. But what does that mean? Well, let's look at what this is and dive right into it. 

When we are talking about a class specifically, self refers to the current class. But, to be more specific, it's an object (or instance) of the class.  Every object in Ruby is aware of itself, so when you use the keyword self in Ruby, it enables you access to the current object. 

An important thing to note is that when you're operating in a Class, you're working with class variables and class methods and `self` can be used in both. 

Class variables can look like this:

    class Album
 
     @@album_count = 0
 
     def release_date=(date)
      @release_date = date
     end
 
     def release_date
      @release_date
     end
    end
		
Now with the method we defined in this album class we have access to the variable inside of the class. The best thing to try and remember is that, **instance methods are called on instances of a class**. No, we can't access it outside the class yet, but that's where class methods come into play. Here's an example at a simple class method:

    def self.class_method_name
 
    end
		
As you can see from above, now we have defined a method that starts with `self`.  Why is that, you might ask? This being a class method, we are now in the scope of the class only, not in the instance method of that class. Another way to see how self  can he helpful would be the `self.all` method and it would look something like this:

    class Album
 
     @@all = []
		 
	 def initialize(album_name)
	  @album_name = album_name
	  @@all << self
	 end
 
     def release_date=(date)
      @release_date = date
     end
 
     def release_date
      @release_date
     end
		 
	 def self.all
	  @@all
	 end
	
    end
		
In the example above, we are using the `initialize`  and within that we are shoveling in every new instance of a new album. We also have the `self.all` . With the `self.all` method, we can call on the class itself to return all of the albums. Now, `.all` and `.new` can be called outside the class. `.all` will give you an array of all albums. You don't have to set this up to just be a list, I have also seen a counter. Using a counter you can then count the number of albums added. `.new` will let you add new albums to your class and will store their information in the class it `self`  which is why it will be added to the `@@all` array. 

I hope this sheds some light on `self`. As you continue to learn about Ruby and object orientation `self` will be something you will use frequently so it's best to get as familiar with it as possible. I will add some great resources that I used to learn about `self`, these resoources go into more advanced versions of self if that's what you're looking for. I hope this will give some guidance to any individual learning the self method in Ruby. 

**Recorces:**
1.  [Yehuda Katz](https://blog.yugui.jp/entry/846)
2.  [Yehuda Katz](https://yehudakatz.com/2009/11/15/metaprogramming-in-ruby-its-all-about-the-self/)
3.  [Air Brake](https://airbrake.io/blog/ruby/self-ruby-overview)

		

		



