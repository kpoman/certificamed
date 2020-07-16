<script>
    var num_snapshots = 0;
    function openBrowserCam() {
        // CAMERA SETTINGS.
        Webcam.set({
            image_format: 'jpeg',
            jpeg_quality: 100,
            width: 400,
            height: 300
        });
        Webcam.attach('#camera');
        document.getElementById('snapShots').innerHTML = '';
        num_snapshots = 0;
        // SHOW THE SNAPSHOT.
        takeSnapShot = function () {
            Webcam.snap(function (data_uri) {
                document.getElementById('snapShots').innerHTML +=                 
                    '<a class="carousel-item" href="#snapshot_'+num_snapshots+'!"><img src="'+data_uri+'"></a>';
            });
            $('.carousel').carousel();
            $('.carousel').set(num_snapshots);  // @TODO: see why it doesnt go to last slide ...
            num_snapshots++;
        }
    }

    function closeBrowserCam() {
        Webcam.reset();
    }

    function saveSnapShot() {
        alert('saving snapshot');
    }
</script>
<style>#modal_camera { width: 480px !important ; height: 680px !important ; }</style>
<!-- Modal Structure -->
<div id="modal_camera" class="modal">
  <div class="modal-content">
    <div id="camera" style="height:auto;width:auto; text-align:left;"></div>
    <div id="snapShots" style="height:200px;" class="carousel"></div>
  </div>
  <div class="center-align">
    <input class="btn" type="button" value="Capturar" id="btPic" onclick="takeSnapShot()" /> 
    <a href="#!" class="modal-close waves-effect waves-green btn">Cancelar</a>
    <a href="#!" class="modal-close waves-effect waves-green btn" onclick="saveSnapShot()">Guardar</a>
  </div>
</div>
<script>
$(document).ready(function(){
    $('#modal_camera').modal({
        onOpenStart: openBrowserCam,
        onCloseEnd: closeBrowserCam
    });
});
</script>