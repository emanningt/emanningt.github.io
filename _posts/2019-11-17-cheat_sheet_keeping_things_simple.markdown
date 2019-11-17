---
layout: post
title:      "(Cheat Sheet) Keeping Things Simple"
date:       2019-11-17 17:30:25 +0000
permalink:  cheat_sheet_keeping_things_simple
---


So far in my experence learning, keeping track of every term and method I have learned in ruby has been tough. But I have gathered some informatoin that has helped. I want to share out a cheat sheet of infromatoin I have put together to help anyone out if they need something to reference. 

Every example is just that an example but I hope it helps when as you go through your program.  

To start hear are some early learned Information:

    # (This is usful in making comments within your program)
		
		# A good reminder = Everthing in your Ruby code is an object!!
		
		# Basic Math
		1 + 1 #=> 2
		2 - 1 #=> 1
		10 * 10 #=> 100
		20 / 2 #=> 10
		7 ** 6 #=> 117,649
		
	 # No Value/ True or False Values
	 nil #=>  no value returned
	 true #=> truth 
	 false #=> falsy
	 
	 # Equals Method
	 2 ==2 #=> true 
	 what == what #=> true 
	 2 == 4 #=> false 
	 what == what_the #=> false
	 
	 # != changes from ture to false 
	 1 != 1 #=> false
	 2 != 1 #=> true
	 !true  #=> false
	 !false #=> true
	 
	 # print/ print / and p 
	 puts "Hello World!" 
	 (puts automatically adds a new line at the end of your message every time you use it.
	 #=> Hello World
	 
	 print 123
	 print 456
	 print 789
	 (print something it will be one the same line as your last message.)
	 #=> 123456789
	 
	 p "Hello World!"
	 (p is a method that shows a more “raw” version of an object)
	 #=> "Hello World"
	 
[puts, print, and p ](https://www.rubyguides.com/2018/10/puts-vs-print/)
	 
	 
Next I will share some method exaples: 

    # Sencse everythings an object, Strings are objects
		'I am a string'.class #=> String  (single quotes)
		"I am a string too".class #=> String (dubble quotes)
		
		# String interpolation 
		example = "how to use string interpolation"
		"I can #{example} when using double quoted strings"
		#=> "I can use string interpolation when using double quoted strings"
		
		# Strings can be combined but onely with onself. 
		"hello " + "world"  #=> "hello world"
		"hello " + 1 #=> TypeError: can't convert Fixnum into String
		"hello " + 5.to_s #=> "hello 3"
		
		# Variables
		x = "Hello World" 
		x #=> "Hello World"
		t = 76 
		t #=> 76
		
		# Note that assignment returns the value assigned
		# This means you can do multiple assignment:
		x = t = 89 #=> 89
		x #=> 89
		t #=> 89
		
		# Use descriptive variable names
		variable_names = 'This ia an easier way to read variable names'
		variableNames = 'This just looks messie'
		vaiables = 'Try to keep things simple, clean and please help yourself by having them makse sense'
		
		
		
		
		

		
I used an outline I found online and rewored mostly everthing. I foud this to be extreamly helpful and if you would like to look it up yourself I will proved the link. [Cheat Sheet](http://https://www.vikingcodeschool.com/professional-development-with-ruby/ruby-cheat-sheet)
		
		
		
