// JavaScript Document// script.js
function souscrireNewsletter() {
  // Récupérer les valeurs du formulaire
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;

  // Vérifier que tous les champs requis sont remplis
  if (!nom || !email) {
    alert('Veuillez remplir tous les champs requis avant de vous inscrire à la newsletter.');
    return;
  }

  // Vérifier la validité de l'e-mail
  if (!isValidEmail(email)) {
    alert('Veuillez entrer une adresse e-mail valide.');
    return;
  }

  // Configurer les paramètres pour l'e-mail
  const serviceID = 'service_qxfmgrq'; // Remplacez par votre ID de service Email.js
  const templateID = 'template_bz5whs5'; // Remplacez par votre ID de modèle Email.js
  const userID = 'GUjp3TDKz7QvzI0oj'; // Remplacez par votre ID d'utilisateur Email.js

  // Remplacez les paramètres ci-dessous par vos propres identifiants Email.js
  const emailjsParams = {
    to_name: 'Destinataire', // Le nom du destinataire
    from_name: nom,
    message_html: `L'utilisateur ${nom} souhaite s'inscrire à la newsletter avec l'adresse e-mail ${email}.`,
    reply_to: email,
  };

  // Envoyer l'e-mail
  emailjs.send(serviceID, templateID, emailjsParams, userID)
    .then((response) => {
      console.log('E-mail envoyé avec succès:', response);
      alert('Vous êtes maintenant inscrit à la newsletter !');
      // Réinitialiser le formulaire après l'inscription réussie
      document.getElementById('newsletter-form').reset();
    }, (error) => {
      console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
      alert('Une erreur s\'est produite lors de l\'inscription à la newsletter.');
    });
}

// Envoyer l'e-mail
  emailjs.send(serviceID, templateID, emailjsParams, userID)
    .then((response) => {
      console.log('E-mail envoyé avec succès:', response);
      alert('Vous êtes maintenant inscrit à la newsletter !');

      // Rediriger vers une page précise après 2 secondes (2000 millisecondes)
      setTimeout(function () {
        window.location.href = 'page_precise.html';
      }, 2000);
    }, (error) => {
      console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
      alert('Une erreur s\'est produite lors de l\'inscription à la newsletter.');
    });

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
