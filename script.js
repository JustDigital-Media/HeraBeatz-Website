


$(document).ready(function(){
    var apiKey = 'AIzaSyBEhImYZtG2mCnrdiLR8FH9ic3tQ7EiM2s'; // Replace with your API key
    var channelId = 'UC3ADBsoXksa-i8_F8Ma7jhQ'; // Replace with your YouTube channel ID
    var maxResults = 10; // Number of videos you want to fetch

    $.get("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&channelId=" + channelId + "&part=snippet,id&order=date&maxResults=" + maxResults, function(data){
        $.each(data.items, function(i, item){


            var videoId = item.id.videoId;
            var videoEmbed = '<div style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.05);"><iframe width="450" height="230" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe></div>';

            $('#youtubeCarousel').append(videoEmbed);
        });

        // Initialize the Owl Carousel after videos are loaded
        $('#youtubeCarousel').owlCarousel({
            loop: true,
            margin: 7,
            padding: 20,
            nav: true,
            items: 3, // Display 3 videos at once
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
        });

        
        
        
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var songs = ['./high vibez 1/Question.mp3', './high vibez 1/Far from Over.mp3', './high vibez 1/Miami Nights.mp3', './high vibez 1/Show Me.mp3', './high vibez 1/Ocean Breeze.mp3'];
    var audioPlayer = document.getElementById('audioPlayer');
    var songListItems = document.querySelectorAll('.back .song-list li');
  
    // Play a song when it is clicked in the song list
    songListItems.forEach(function(item, index) {
      item.addEventListener('click', function() {
        audioPlayer.src = songs[index];
        audioPlayer.play();
      });
    });
  });
  