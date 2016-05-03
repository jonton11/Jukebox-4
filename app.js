var LIBRARY = [
  {title: 'C Major Scale', notes: 'A B C D E F G' },
  {title: 'Chromatic Scale', notes: 'A A# B C C# D D# E F F# G G#' },
  {title: 'Random Song', notes: 'A B*2 C D A*4 D E*2 F A B A A*2' },
  {title: 'Adup Licate', notes: 'A B*2 C D A*4 D E*2 F A B A A*2' },
  {title: 'Yankee Doodle', notes: 'C F*4 C F*4 B C D A*2 B*2 A B*2 C' },
  {title: 'Descending Notes', notes: 'G F E D C B A G F E D C B A' }
];

var BPM = 600;

// Add a song with the given title and notes to the library.
var addSongToLibrary = function(title, notes) {
  $('#library-list').append("<li>" +
                                "<i class='fa fa-bars'></i>" +
                                "<i class='fa fa-trash'></i>" +
                                "<span class='title'>" + title + "</span>" +
                                "<div class='notes'>" + notes + "</div>" +
                              "</li>");
};

// Add all LIBRARY songs to the library.
var initializeLibrary = function() {
  for(var i=0; i < LIBRARY.length; i+=1) {
    addSongToLibrary(LIBRARY[i].title, LIBRARY[i].notes);
  }
};

// Play all songs in the playlist.
var playAll = function() {

  // Grab the top song in the queue, parse its notes and play them.
  // Then recurse until there are no more songs left in the queue.
  //
  var playNext = function() {
    var songItem = $('#playlist-list li:first-child');

    if (songItem.length == 0) {
      // No more songs.

      // Re-enable the play button.
      $('#play-button').attr('disabled', false).text('Play All');

      // Fade out the message.
      $('#message').fadeOut();
      return;
    }

    var title = songItem.find('.title').text();
    var notes = songItem.find('.notes').text();
    var song = parseSong(notes);

    $('#message').html("Now playing: <strong>" + title + "</strong>").show();

    playSong(song, BPM, function() {
      songItem.remove();
      $('#library-list').append(songItem);
      playNext();
    });
  };

  // Disable the play button to start.
  $('#play-button').attr('disabled', true).text('Playing');

  playNext();
}


$(document).ready(function() {
  // Initialize the library with some songs.
  initializeLibrary();

  // Play all songs in the playlist when the "play" button is clicked.
  $('#play-button').on('click', playAll);

  // Add Your Code Here.
  // Don't tell me what to do lul

  // Hide and Remove song when clicking trash icon
  $('.fa-trash').click(function() {
    $(this).parent().slideUp(500, function() {
      $(this).remove();
    });
  });

  // $('li').hover(function() {
  //   $(this).find('.fa-icon').css(opacity: 1);
  // });

  // When the page loads, make the message fade in over 0.8s. Then, after 3s have passed, fade out the message over 0.8s.
  $('#message').fadeIn(800).delay(3000).fadeOut(800);

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

  // Make the Library and Playlist sortable. Note we need the .sortable class in our .css file as well
  $(".sortable").disableSelection();
  $(".sortable").sortable();

  $("#playlist-list").sortable({connectWith: "#library-list"});
  $("#library-list").sortable({connectWith: "#playlist-list"});

});
