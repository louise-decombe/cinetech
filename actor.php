<?php include 'includes/header.php'; ?>

    <main class="main_actor">
        
        <div id="div_bio">
            <img src="" alt="">
            <div>
                <h1 id='presentation_title' class=" mb-4"></h1>
                <p id="bio"></p>
                <p id="prof"></p>
                <p id="description"></p>
            </div>
        </div>
        
        <section class="bg-dark p-3">
            <h2 class="mt-5 text-center text-success">Films avec <span id="name_actor"></span> </h2>
            <div id="films" class="mt-5">
            </div>
            <div  class="btn-toolbar text-center" role="toolbar" aria-label="Toolbar with button groups">
                <div id="pagination" class="btn-group  m-auto d-flex flex-wrap" role="group" >
                </div>
            </div>
        </section>
        <hr>
        <section id="section_series"class="bg-dark p-3">
            <h2 id="title_serie"class="mt-5 text-center text-success">Séries avec <span id="name"></span> </h2>
            <div id="series" class="mt-5">
            </div>
            <div class="btn-toolbar text-center" role="toolbar" aria-label="Toolbar with button groups">
                <div id="pagination2" class="btn-group  m-auto d-flex flex-wrap" role="group" >
                </div>
            </div>
        </section>
        <div class="text-center mt-3">
            <button class="btn btn-danger m-auto"><a id="back" href="">Retour aux films</a></button>
        </div>
    </main>

<?php include 'includes/footer.php'; ?> 
<script src="js/actor.js"></script>   
</body>
</html>