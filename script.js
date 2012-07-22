 document.addEventListener( "DOMContentLoaded", function(){
      
      // Test
      function log( data ){
        console.log( data );
      } 
  
      archiveUtil.search( "camels like stuff", log );

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
       
