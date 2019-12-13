---
layout: post
title:      "Class Vr. Object"
date:       2019-12-13 03:39:08 +0000
permalink:  class_vr_object
---


Classes and objects are extremely important when it comes to Ruby! I'll start this off by saying one of the many great things about Ruby is that it allows us to create our own data types. These data types can represent whatever we want like a phone, guitar, person or dog, really anything that we want. The way we make this happen is with a Class. 

So as an example we can create a person class and when we do this it's our new personalized data time. Which means we're telling Ruby what this person is. You'll hear a class defined as a blueprint. 

	class Person

	end

Now with this blueprint were creating we can add attributes to this person. Attributes are important because as you created new people than every one of those people will have those same attributes. 

	class Person 
	attr_accessor :name, :birthday, :hair_color
	end 

The `attr_accessor` is our attribute accessor which allows us to add the attributes we want in the class(blueprint). These would now allow us to create new people with a name, birthday and hair_color. We could have put in hundred of attribues if we really wanted. Now, this next part is important... when we create these new people with a name, birthday, and hair color these are called objects. 

An object, in this case, would be an instance of a person. If we were to create a person its now its own instance or another way to say this would be its, its own object in your program. This would look like:

	person1 = Person.new()
	person1.name = "John Doe"
	person1.birthday = "September 17"
	person1.hair_color = "Brown"
	
	puts person1.name 
	  #=> "John Doe"

	person2 = Person.new()
	person2.name = "Johnnie Doeman"
	person2.birthday = "September 6th"
	person2.hair_color = "Red"
	
	puts person2.birthday 
	  #=> "September 6th"

Person 1 and Person 2 now have their own attributes. On the first line of them both, we are creating a person object and in this case, each person is its own instance of the class. 

 What's great about objects is that we can create as many as we want. Now that we have a data type or class with all of its attributes of a person we can just keep making new people. 

What I will leave you with is everthing in Ruby is an Object!
