document.addEventListener('DOMContentLoaded', function(){
   
    const bouton=document.getElementById('RGPD');
   
    bouton.addEventListener('click', function(){
        alert("Dans le cadre du respect du RGPD, aucune de vos données ne sera conservés suite à l'envoi de mail ou de consultation du site.")
    });
});