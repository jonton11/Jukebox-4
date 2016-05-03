## Part 1
Read through index.html and app.js and make sure you understand everything that's there.

When the delete icons for a song are clicked slide up that song over 0.5s. AFTER the song is finished sliding up, remove it from the list entirely.

```js
$('.fa-trash').click(function() {
  $(this).parent().slideUp(500, function() {
    $(this).remove();
  });
});
```

Make the song notes hidden when the page initially loads. Then, when you double click a song, they should slide down over 0.3 second. (Hint: See the dblclick event type)
```css
.notes {
  display: none;
}
```
```js
// Double click a song to show the notes over 0.3s. Also implemented double click to close.
var clickedSong = true;
$('li').dblclick(function() {
  if (clickedSong) {
    $(this).find('.notes').slideDown(300);
    clickedSong = !clickedSong;
  } else {
    $(this).find('.notes').slideUp(300);
    clickedSong = true;
  }
});
```

When the page loads, make the message fade in over 0.8s. Then, after 3s have passed, fade out the message over 0.8s.
```js
$('#message').fadeIn(800).delay(3000).fadeOut(800);
```

Make the songs' delete icons have a default opacity of 0.3. When your **mouse hovers over a song**, animate its **delete icon's opacity to 1** using CSS transitions. (Hint: The ":hover" CSS Selector may be helpful)

```css
fa-fa-icon {
  opacity: 0.3;
}

li:hover i.fa-trash {
  opacity: 1;
}
```

When a song is hovered, animate its background color to a lighter grey over 0.5s, using CSS selectors.

song {
  transition: background-color 0.5s;
}

song:hover {
  background-color: lightgrey;
}


## Part 2
Add a script tag to load jQuery UI javascript on the page, using Google's CDN (google: "jQuery UI google CDN").

<!-- <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script> -->

Make the Library and Playlist sortable.
```css
.sortable {}
```

```js
$(".sortable").disableSelection();
$(".sortable").sortable();
```

Allow dragging and dropping songs between the Library and the Playlist.
```js
$("#playlist-list").sortable({connectWith: "#library-list"});
$("#library-list").sortable({connectWith: "#playlist-list"});
```

## Part 3
When a song is played and then returned to the library, try double clicked it to show the notes. If you weren't careful, it won't work anymore! Use event delegation with the on method to fix this problem.
```js
// Pass 'li' into the on() function
$('#library-list').on('dblclick', 'li', function() {
  if (clickedSong) {
    $(this).find('.notes').slideDown(300);
  } else {
    $(this).find('.notes').slideUp(300);
  }
  clickedSong = !clickedSong;
});
```

Filter the library, so that it includes only songs that match whatever is typed in the "filter" box. (Hint: Look up the :contains selector or the filter jQuery method)



## Part 4
Make the "Play" button shake when it is clicked but there are no songs in the playlist. Use CSS keyframe animations.



Make the JukeBox logo do a dance while the Jukebox is playing, and stop when it's finished, using CSS keyframe animations. (Hint: Use your imagination).
