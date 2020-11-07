$(document).ready(function() {

	/////////////////////////////////
			//FONCTIONS//
	////////////////////////////////
	
	
	function FormatDate(data_date) {
		let date = new Date (data_date);
		let numero_jour = date.getDate();
		let mois = date.getMonth() + 1;
		let annee = date.getFullYear();
		let nouvelle_date = numero_jour + "/" + mois + "/" + annee;

		return nouvelle_date;
	}

	

	/////////////////////////////////
			
	

	
	//recuperation des parametres de l'url
    let getUrl = (new URL(document.location)).searchParams;
	var id = getUrl.get('id');
	var type = getUrl.get('type');
	

	//creation de l'URL
	if(type == "movie"){
		var urlMovie = 'https://api.themoviedb.org/3/movie/';
		var neuwUrl = urlMovie + id + "?api_key=" + API_KEY + "&language=fr-FR";
	}else {
		var urlMovie = 'https://api.themoviedb.org/3/tv/';
		var neuwUrl = urlMovie + id + "?api_key=" + API_KEY + "&language=fr-FR";
	}
	
	// //enregistrement de url de la page detail pour le btn retour de la page filmographie
	 sessionStorage.setItem("page_detail", window.location.pathname+"?id="+id+"&type="+type)

	
	
	
	$.ajax({
        url : neuwUrl, // La ressource ciblée
		
        success: function(data){
			

		   //ajout de l'image
		   if ( data.poster_path != null ) {
				$('#presentation_img').attr('src',"https://image.tmdb.org/t/p/w500/" + data.poster_path);
		   }
		   else {
				$('#presentation_img').attr('src',"images/image_defaut.png");
		   }
		  
		   //ajout titre
		   if (data.name != undefined) {
				$("#presentation_title").html(data.name);
		   }
		   else {
				$("#presentation_title").html(data.title);
		   }

		   //affiche categories
		   for (let i = 0 ; i < data.genres.length ; i ++){
			   $('#categories').append("<span class='categorie bg-info' >" +  data.genres[i].name + "</span>")
		   }


		   //si un slogan existe
		   if (data.tagline === undefined ||  data.tagline === ''){
			$('#slogan').html('')
		   }
		   else if (data.tagline !== undefined || data.tagline !== null || data.tagline !== '' || data.tagline !== '""'){
			   $('#slogan').html(' " ' + data.tagline + ' " ')
		   }

		   //overview
		   if (data.overview != ""){
				$("#presentation_p").html(data.overview);
		   }else{
				$("#presentation_p").css('display','none')
		   }
		   


		  //si film
		   if (data.release_date != undefined){
			   var date = FormatDate(data.release_date);
				$("#presentation_parution").html("Date de sortie du film : " + date)
		   }
		   //sinon serie
		   else{
				var date = FormatDate(data.first_air_date);
				$("#presentation_parution").html("Date de la premiére saison : " + date +"<br>")
		   }

		//    //Saisons

		   console.log(data.seasons.length);
		   if (data.seasons){	
				$("#presentation_parution").append("<p class='text-success'> "+ data.seasons.length + " saisons</p>")
			}
		   // au click afficher les 4 saisons avec leurs dates et infos
		   





			//produtions
			if ( data.production_companies.length != 0 ){
				$('#production').append('Production : ')
				for ( let i = 0 ; i < data.production_companies.length ; i++){
				   
					if ( data.production_companies.length == i + 1){
						 $('#production').append(' <span>' + data.production_companies[i].name + '</span> .')
					}
					else {
						 $('#production').append(' <span>' + data.production_companies[i].name + '</span> , ')
					}
				}
			}
		 
		   
		   
		   //NOTE
		   var data_note = data.vote_average;
		   
		   //AFFICHAGE DE LA NOTE SUR 10
		   if ( data_note <= 4){
				$("#note").append("<p class='p_note'> Note du film : <span class='text-warning' >"+ data_note + "</span> / 10"+"</p>");
		   }
		   else if( data_note >= 5 && data_note <= 7 ){
				$("#note").append("<p class='p_note'> Note du film : <span class='text-success' >"+ data_note + "</span> / 10"+"</p>");
		   }
		   else if ( data_note > 7) {
				$("#note").append("<p class='p_note'> Note du film : <span class='text-primary' >"+ data_note + "</span> / 10"+"</p>");

		   }

       }

	});

	//creation de l'url pour la recuperation de la distribution du film
	var urlCredit = urlMovie + id + "/credits?api_key=" + API_KEY + "&language=fr-FR";
	
	
	
	//affiche des acteurs
	$.ajax({
		url : urlCredit, //cible

		success: function(data){
			
			if ( data.cast.length != 0) {
				$("#title_actors").removeClass('display')
				for(let i = 0 ; i < 6 ; i++){
				
					$("#distribution").append('<div class="acteur_div" id="acteur'+ i +'"></div>');
					
					$('#acteur'+ i).append("<p class='p_nom_acteur'>"+ data.cast[i].name +"</p>");
					//ajout du nom de l'acteur en en get 
					if( data.cast[i].profile_path != null){
						$('#acteur'+ i).append("<a href='actor.php?id=" + data.cast[i].id +  "&name=" + data.cast[i].name + "' ><img class='image_distribution' src='"+ 'https://image.tmdb.org/t/p/w500/'+ data.cast[i].profile_path +"' /></a>");
					}
					else {
						$('#acteur'+ i).append("<a href='actor.php?id=" + data.cast[i].id +  "&name=" + data.cast[i].name + "' ><img class='image_distribution' src='images/actoor_default.png' /></a>");
					}
					
	
					$('#acteur'+ i).append("<p class='p_perso'>"+ data.cast[i].character +"</p>")

				}
			}
			else {
				$("#title_actors").addClass('display')
				$("#section_distribution").css('display','none')
			}
			
		}
	})

})