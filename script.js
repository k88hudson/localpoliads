 document.addEventListener( "DOMContentLoaded", function(){
      
      // Test
      function log( data ) {
        console.log( data );
      }
  
      archiveUtil.search( "2012elections", function( data ) {
        var videoContainer = document.getElementById( "video" ),
            videoEl,
            srcEl;

        $.each( data, function( index, item ) {
          videoEl = document.createElement( "video" );
          srcEl = document.createElement( "source" );
          srcEl.src = archiveUtil.downloadFile( item.identifier, "ogv" );
          videoEl.appendChild( srcEl );
          videoContainer.appendChild( videoEl );
          // Create an element below the video with all the meta data (title, the transcript, date, tv show, and a link to the archive page) below
          // show on hover
        });
      });

      archiveUtil.search({
        q: "camels"
      }, log );

      archiveUtil.details( "camels", log );

      archiveUtil.searchTV( "obamacare", function( data ) {
        console.log( "obama", data );
 
        $.each( data, function( index, item ){
          var id = item.identifier;
          archiveUtil.details( id, function( _data ){
            var srt = archiveUtil.getFiles( _data.files, "srt" )[0];
            console.log( srt );
          });
        });
    
      });
      
    
    }, false);
       
