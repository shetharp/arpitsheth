---
title: 'The Resistance Band 🎼'
date: '01/01/2019'
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/8nI9rLS6FHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I made this with Marco White & Brett Leibowitz at Cornell Tech for the Interactive Device Design Class. **The Resistance Band** is a set of plug-and-play musical instruments that lets you jam out to music with a band of friends.

The instruments include &ldquo;drums&rdquo;, a &ldquo;flex guitar&rdquo;, and a thermin. Each of these instruments were made on an Arduino using a variety of sensors (piezoelectric vibration sensors for the drums, flex sensor for the guitar string, and a distance sensor for the termin). Additionally, we integrated a Blue Yeti microphone with a Raspberry Pi. Someone has to sing the vocals!

The Arduinio (with its instruments) plugs into the Raspberry Pi. The Raspberry Pi runs a web server that provides a web interface for a DJ to play music and modify the sounds of each of the instruments.

Finally, we used a seperate Arduino to create an **Infinity Mirror Music Vizualizer.**
The infinity mirror was made with a strip of RGB LEDs glued around a circular rim, which was sandwiched between a mirror and a one-way mirror. We used a graphic equilizer chip to split the audio into six bands. Each band was mapped to a row of LEDs in the infinity mirror.

### [View On GitHub](https://github.com/TheResistanceBand/theResistanceBand/wiki)
