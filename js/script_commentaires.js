$(document).ready(function(){

	///////////////// FONSTIONS ////////////////
	function affichage_commentaires(id){
		console.log($("#affiche_com").val())
		$.ajax({
			url: "traitement/affichage_com.php?id_film="+ id ,
		
			success: function(data){
				
				
				var data_films = JSON.parse(data);
				
				if (data_films.length === 0){
					$("#message").append('Soyez le premier à donner votre avis');
					if ($("#affiche_com").val() == "non_co"){
						$("#co").append('<p class=" text-warning">Vous devez etre connecté pour poster un commentaire</p>')
					}else {
						$("#co").empty()
					}
					
					
				}else{
					
					for (let i = 0; i<data_films.length ; i++){
					
						$("#com").append("<p class='text-primary'>"+data_films[i].login+" <span class='span_date'>"+ FormatDate(data_films[i].create_At) +"</span> </p>")
						$("#com").append("<hr>")
						$("#com").append("<p>"+data_films[i].content_comment+"</p>")
						$("#com").append("<section class='section_reponses ' id='section_reponse_"+i+"'></section>")
						$("#com").append("<section id='pagination_"+i+"'></section>") 
						$("#com").append("<section id='section_form_reponse_"+i+"'></section>") 
						$("#com").append(' <div class="text-center m-4 "><span class="text-warning " id="mess_erreur_'+i+'"></span></div>')
						$("#com").append("<div class='div_boutons_"+i+" text-right flex'></div>")
						$(".div_boutons_"+i).append("<button class='btn_res btn btn-success text-right btn-sm mb-4 fermer' id='btn_"+i+"'>Répondre</button>")
						$(".div_boutons_"+i).append("<button class='btn_res btn btn-outline-success text-right btn-sm  mb-4 ' id='fermer_"+i+"'>Réduire</button>")
						$(".div_boutons_"+i).append("<button class='btn_res btn btn-outline-success text-right btn-sm mb-4 ' id='btn_reponses_"+i+"'>Afficher les réponses</button>")
						
						$("#fermer_"+i).addClass("fermer");
						//affichage des reponse au click sur le btn
						$("#btn_reponses_"+i).on("click",function(){
							
							affichage_reponse(i,id);

							$("#fermer_"+i).removeClass("fermer");
							
							//si input deco exixte c est que l'utilisateur n'est pas connecté
							if ($("#affiche_com").val() != "non_co"){
								$("#btn_reponses_"+i).css('display',"none")
								//ajout du form
							console.log("ivi")
								$("#erreur_form").text('')
								$("#btn_"+i).removeClass('fermer')
								$("#mess_erreur_"+i).empty()
							}
							else{
								$("#mess_erreur_"+i).text('Vous devez etre connecté repondre')
							}
							$("#btn_reponses_"+i).css('display',"none");
							
							

						})

						//fermeture de la section reponse
						$("#fermer_"+i).on("click",function(){
							
							$("#section_reponse_"+i).empty();
							$("#fermer_"+i).addClass("fermer");
							$("#btn_reponses_"+i).css('display',"block")
							$("#section_form_reponse_"+i).html("")
							$("#btn_"+i).addClass('fermer')
							$("#pagination_"+i).empty();
							$("#mess_erreur_"+i).empty()

							})

						
						$("#btn_"+i).on("click", function(){
		
							$(this).css("display","none")
		
							
							//creation du formulaire
							//si pas co pas de form
							
								$("#section_form_reponse_"+i).append("<form id='form_"+i+"' method='POST' action='traitement/enregistrement_reponse.php?id_comment="+ (i + 1 )+"'></form>");
								$("#form_"+i).append("<span class='text-warning' id='erreur_form'></span>");
								$("#form_"+i).append("<input id='input_text"+i+"' class='input_reponse form-control' type='text' name='content_reponse' >");
								$("#form_"+i).append("<input class='input_hidden' type='hidden' name='id_film' value='"+ id +"'> ");
								$("#form_"+i).append("<input class='btn_form_reponse btn btn-success float-right' id='btn_form_"+ i +"' type='submit' name='btn_content_reponse' value='Répondre'> ");

							
							
		
							//enregistrement des reponses
							$('#btn_form_'+i).click(function(e){
								
								e.preventDefault();
								var valeur_input_reponse = $(".input_reponse").val();
								var valeur_btn_envoyer_reponse = $("#btn_form_"+i).val();
								var valeur_id_film = $(".input_hidden").val();
													
								enregistrement_reponse(i,valeur_input_reponse,valeur_btn_envoyer_reponse ,valeur_id_film)
								//recuperation des btn repondres puis au click sur 1 on displais none tous mes boutons
								$("#btn_"+i).css("display","block")
							});
							
						});
						
					}
					
				}
			}
		})
	}
	function affichage_reponse(i,id){
		
		$.ajax({
			url: "traitement/affichage_reponses.php?id_comment="+( i + 1 )+"&id_film="+id,
			
			success: function(data){
				let recup_donnees = JSON.parse(data)
				
				
				
				if (recup_donnees.length !== 0){
					console.log(recup_donnees.length);
					//affichage des 4premiers
					for (let j = 0 ; j < 4 ; j++){
						
						///
						$("#section_reponse_"+i).append("<p class='text-primary'> <span class='icon-level-down'></span>"+recup_donnees[j].login+"</p>");
						$("#section_reponse_"+i).append("<hr>");
						$("#section_reponse_"+i).append("<p>"+recup_donnees[j].content_response+"</p>")
					}
					
					
					pagination(recup_donnees,i)
	
				}
				else{
					
					$("#section_form_reponse_"+i).append("<p class='text-success'>Aucune reponse</p>")
				}
			}
		})
	}

	function enregistrement_commentaire(id,valeur_textarea_commentaire,valeur_btn_commentaire){
		$.ajax({
			url : "traitement/enregistrement_com.php?id_film="+id,
			type: "POST",
	
			data: {comment: valeur_textarea_commentaire , valider_commentaire: valeur_btn_commentaire},
	
			success: function(data){
				var jason_donnees = JSON.parse(data);
				if (jason_donnees == 1){
					console.log('success')
					$("#comment").val("");
					$("#com").empty();
					//affichage des com en direct
					
					affichage_commentaires(id)
				}	
				
			}
		})
	}

	function enregistrement_reponse(i,content_reponse,btn_content_reponse,id_film){
		$.ajax({
													
			url: "traitement/enregistrement_reponse.php?id_comment="+(i+1),
			type: "POST",
		
			data: {content_reponse: content_reponse , btn_content_reponse: btn_content_reponse , id_film: id_film},
		
			success: function(data){
				let retour_json = JSON.parse(data);
				
				//on affiche la derneire reponse 
				if (retour_json == 1){
					//affichage du derner post
					//recuperation du nombre de post 
	
					Affichage_derniere_reponse(i,id); 
					$("#erreur_form").append("");
					
					
				}
				else{
					$("#btn_"+i).css('display',"none");
					$("#erreur_form").append(retour_json.erreur);
				}
			}
			
		})
	}

	function Affichage_derniere_reponse(i,id){
		$.ajax({
			url: "traitement/affichage_reponses.php?id_comment="+(i + 1),
			data: {id_film: id},
		
			success: function(data){
				let donnee = JSON.parse(data)
				//afficher l element en derniere position 
				
				let pos = donnee.length - 1;
				$("#section_reponse_"+i).append("<p class='text-primary'>  <span class='icon-level-down text-sucess'></span>"+donnee[pos].login+"</p>");
				$("#section_reponse_"+i).append("<hr>");
				$("#section_reponse_"+i).append("<p>"+donnee[pos].content_response+"</p>");
		
				//on ferme le fom
				$('#section_form_reponse_'+i).empty();
			}
		})
	}

	function OnClickBtnEnvoyer(e){

		e.preventDefault();
	
		//recuperation du message et du bouton
		let valeur_textarea_commentaire = $("#comment").val();
		let valeur_btn_commentaire = $("#btn_commentaire").val();
	
		//enregistrement des commentaires
		enregistrement_commentaire(id,valeur_textarea_commentaire,valeur_btn_commentaire);
	}
	function pagination(data,i){
			//creation des liens pagination
			console.log(data)
			
			let nombre_page =Math.round(data.length / 4) + 1;
			console.log("monbre page "+nombre_page)
			let nb_debut = 1;
			
			for (let l = nb_debut ; l < nombre_page   ; l++){
				
				$("#pagination_"+i).append('<div class=" text-center "  id="pagination_div_'+i+'"></div>')
				$('#pagination_div_'+i).append("<button class='m-1 btn btn-secondary' value='"+l+"' id='btn_p"+l+"'>"+l+"</button>")
				$("#btn_p"+l).on('click',function(){
					$("#section_reponse_"+i).empty();

					var nb_debut = ( $(this).val() - 1 ) * 4;
                    var nbr_max = $(this).val() * 4 ;
					//affichage reponse ici.
					for (let j = nb_debut ; j < nbr_max ; j++){
						
						///
						$("#section_reponse_"+i).append("<p class='text-primary'> <span class='icon-level-down'></span>"+data[j].login+"</p>");
						$("#section_reponse_"+i).append("<hr>");
						$("#section_reponse_"+i).append("<p>"+data[j].content_response+"</p>")
					}
				})
			}
	

		}
    
    ///////////////////////////////////////////
    
    	//recuperation des parametres de l'url
        let getUrl = (new URL(document.location)).searchParams;
        var id = getUrl.get('id');


    //BOUTON VOIR LES COM
	$("#affiche_com").on('click',function(){
		
		$(".formulaire_commentaire").toggle()

		
		if($("#affiche_com").html() == "Voir les commentaires"){
			$("#affiche_com").html("Fermer")
		}else{
			$("#affiche_com").html("Voir les commentaires")
		}

	})
	/////////////////////

	////////////////  COMMENTAIRE ////////////////
	
	affichage_commentaires(id)
	
	//au click sur le boutton Envoyer enregistrer le commentaire
	$("#btn_commentaire").click(OnClickBtnEnvoyer)

	
})