$(document).ready(function(){
    // YouTube API key and channel settings
    var apiKey = 'AIzaSyBEhImYZtG2mCnrdiLR8FH9ic3tQ7EiM2s'; // Replace with your actual API key
    var channelId = 'UC3ADBsoXksa-i8_F8Ma7jhQ'; // Replace with your channel ID
    var maxResults = 10;

    // Fetch YouTube videos
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&channelId=" + channelId + "&part=snippet,id&order=date&maxResults=" + maxResults, function(data){
        // Loop through the data returned from the API
        $.each(data.items, function(i, item){
            // Construct video embed code
            var videoId = item.id.videoId;
            var videoEmbed = '<div class="video-container" style="margin-bottom: 15px;"><iframe width="450" height="230" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe></div>';
            $('#youtubeCarousel').append(videoEmbed);
        });

        // Initialize carousel after videos are loaded
        $('#youtubeCarousel').owlCarousel({
            loop: true,
            margin: 7,
            nav: true,
            items: 3,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
        });
    }).fail(function(jqXHR, textStatus, errorThrown) {
        // Handle error here
        console.error("Error fetching YouTube videos: " + textStatus + ", " + errorThrown);
    });

    // Music player functionality
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

