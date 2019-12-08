---
layout: post
title:      "First Project - Making an API"
date:       2019-12-08 16:23:35 -0500
permalink:  first_project_-_making_an_api
---


This was my first project with [Flatiron School](https://flatironschool.com/) I made an API with a Ruby Gem. I used the [Star Wars API](https://swapi.co/documentation#ruby) to collect the data I needed. I used [Rails Casts](http://railscasts.com/episodes/245-new-gem-with-bundler) with help in building my gem. I have also posted a short video of how this API works to [Youtube](https://youtu.be/6kGqNCPsHf4) please check it out alongside this blog post. 

The Star Wars API I created `puts` a list of Star Wars characters in a menu for you to learn each one of them. After making your selection of the character you choose it then `puts` the character details. I had a lot of fun putting this together because not only did I learn about building out my first programming project, but I got to make it fun and interactive in something that I am interested in. 

When you run the program in the CLI it welcomes you to the program and asks you for your name. I thought this was a clever idea to make the individual feel like it was a personalized experience. After your personalized welcoming, it `puts` out a list of Star Wars Characters for you to learn more about. It looks something like this:

```
Characters List: Choose by typing the number
--------------------------------------------
1. Luke Skywalker
2. C-3PO
3. R2-D2
4. Darth Vader
5. Leia Organa
6. Owen Lars
7. Beru Whitesun lars
8. R5-D4
9. Biggs Darklighter
10. Obi-Wan Kenobi
----------------------------
Type exit when you are done.

```

I tried to make the user's experience as simple and clean as possible. I wrote out clear direction while making it easy. From here the user gets a choice of which character they want to learn more about. So let's pick one and I'll show you some of the information listed:

```
1
Luke Skywalker
birth_year: 19BBY
homeworld: https://swapi.co/api/planets/1/
gender: male
height: 172
hair color: blond
skin_color: fair
Would you like to see information on another character?
```

As you can see from above, after choosing a character, you get a basic list of information regarding that character to learn about them. My program is using `if`, `else`, and `elseif`, statements to allow the user to make different choices as they go through. The user can leave the program at any point or they can learn as much as they would like. When the user is done I added an ending:

```
--------------------------------------------
Type exit when you are done.
exit
May the Force be with you!
---------------------------
```

And thats it... it's pretty simple in entirety.

While I created this API, I was able to grasp much more understanding than I previously had.  It was a fun project to complete.  I enjoyed going though the creations of this program and I hope you all enjoy it too! 

-Eric Manning 
