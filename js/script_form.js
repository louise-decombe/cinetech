 // cette fonction supporte la validation des input.j
   // on doit vérifier que chaque input est valide. chacun a son check.container
   // si on trouve un problème avec un input on doit mettre un message d'erreur.
   // on a besoin d'une fonction qui manage les messages d'erreur 
   // on a besoin d'une fonction qui montre ces erreurs ou non. 
   
   
   
   
   function Validation(input) {
   
	// tableau des messages d'erreurs
	this.invalidities = [];
	this.validityChecks = [];

	this.inputNode = input;

	this.registerListener();
}

// création du prototype.
Validation.prototype = {

	// dit que la fonction est valide
	addInvalidity: function(message) {
		// envoi du message dans le tableau avec push
		this.invalidities.push(message);
	},
	// récupère la donnée non valide
	getInvalidities: function() {
		//utilisation de join pour avoir une string
		return this.invalidities.join('. \n');
	},
	// vérifie la validité d'un input en particulier
	checkValidity: function(input) {
		for ( var i = 0; i < this.validityChecks.length; i++ ) {

			var isInvalid = this.validityChecks[i].isInvalid(input);
			if (isInvalid) {
				this.addInvalidity(this.validityChecks[i].invalidityMessage);
			}

			var requirementElement = this.validityChecks[i].element;

			if (requirementElement) {
				// add et remove invalid et valid changent le CSS (ce sont des classes)
				if (isInvalid) {
					requirementElement.classList.add('invalid');
					requirementElement.classList.remove('valid');
				} else {
					requirementElement.classList.remove('invalid');
					requirementElement.classList.add('valid');
				}

			}
		} // fin de la boucle for
	},
	checkInput: function() { 

		this.inputNode.Validation.invalidities = [];
		this.checkValidity(this.inputNode);

		if ( this.inputNode.Validation.invalidities.length === 0 && this.inputNode.value !== '' ) {
			this.inputNode.SetValidation('');
		} else {
			var message = this.inputNode.Validation.getInvalidities();
			this.inputNode.SetValidation(message);
		}
	},
	registerListener: function() { //register the listener here

		var Validation = this;

		this.inputNode.addEventListener('keyup', function() {
			Validation.checkInput();
		});
	}

};


var IsUserValid = [
	{
		// pour que l'input login soit valable il doit au minimum contenir 3 caractère
		isInvalid: function(input) {
			return input.value.length < 3;
		},
		invalidityMessage: '3 caractères minimum requis',
		element: document.querySelector('label[for="login"] .input-requirements li:nth-child(1)')
	},
	{

		// les caractères spéciaux ne sont pas autorisés (on utilise un REGEX qui regarde si le contenu "match" avec un caractère non autorisé)
		isInvalid: function(input) {
			var illegalCharacters = input.value.match(/[^a-zA-Z0-9]/g);
			return illegalCharacters ? true : false;
		},
		invalidityMessage: 'Caractères spéciaux non autorisés',
		element: document.querySelector('label[for="login"] .input-requirements li:nth-child(2)')
	}
];

var passwordValidityChecks = [
	{
		// le mot de passe a une longueur minimale calculée avec length
		isInvalid: function(input) {
			return input.value.length < 8 | input.value.length > 100;
		},
		invalidityMessage: 'Minimum 8 caractères',
		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[0-9]/g);
		},
		invalidityMessage: 'Au moins 1 nombre nécessaire',
		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(2)')
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[a-z]/g);
		},
		invalidityMessage: 'Au moins une minuscule est requise',
		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(3)')
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[A-Z]/g);
		},
		invalidityMessage: 'Au moins une majuscule est requise',
		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(4)')
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
		},
		invalidityMessage: 'Il manque le caractère spécial',
		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(5)')
	}
];

var passwordRepeatValidityChecks = [
	{
		isInvalid: function() {
			return passwordRepeatInput.value != passwordInput.value;
		},
		invalidityMessage: 'Les mots de passe ne sont pas identiques'
	}
];

// les variables déterminent quel élements est le bon, donc quel tableau est utilisé
var loginInput = document.getElementById('login');
var passwordInput = document.getElementById('password');
var passwordRepeatInput = document.getElementById('password_conf');

loginInput.Validation = new Validation(loginInput);
loginInput.Validation.validityChecks = IsUserValid;

passwordInput.Validation = new Validation(passwordInput);
passwordInput.Validation.validityChecks = passwordValidityChecks;

passwordRepeatInput.Validation = new Validation(passwordRepeatInput);
passwordRepeatInput.Validation.validityChecks = passwordRepeatValidityChecks;



var inputs = document.querySelectorAll('input:not([type="submit"])');
var submit = document.querySelector('input[type="submit"');
var form = document.getElementById('container_formulaire');

// ultime fonction de validation
function validate() {
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].Validation.checkInput();
	}
}

// Event onclick + sur le submit donc double check
submit.addEventListener('click', validate);
form.addEventListener('submit', validate);
