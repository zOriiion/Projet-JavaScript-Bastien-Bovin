$(document).ready(function() {
    function getDepartement(){
        var request=$.ajax({
            url:"https://geo.api.gouv.fr/departements",
            method: "GET",
            dataType: "json",
            beforeSend: function (xhr ){
                xhr.overrideMimeType("application/json; charset=uft-8");
            }});
        request.done(function(msg){
            var departement = document.getElementById("listeDpt");
            departement.addEventListener("change", getListCommune, false);
            
            test();
            
            function test(){
                $.each(msg, function(index,e){
                    departement.innerHTML += "<option value="+e.code+">"+ e.nom +"</option>" 
                })
            }
            

            getListCommune();            
            function getListCommune(){
                var request=$.ajax({
                    url:"https://geo.api.gouv.fr/departements/"+departement.value+"/communes",
                    method: "GET",
                    dataType: "json",
                    beforeSend: function (xhr ){
                        xhr.overrideMimeType("application/json; charset=uft-8");
                    }});
                request.done(function(msg){
                    var commune = document.getElementById("listeCommune");
                    commune.addEventListener("change",getInfoCommune,false);
                    $.each(msg, function(index,f){
                        commune.innerHTML += "<option value="+f.code+">"+ f.nom +"</option>" 
                    })
                    
                    getInfoCommune();
                    function getInfoCommune(){
                        var request=$.ajax({
                            url:"https://geo.api.gouv.fr/communes/"+commune.value ,
                            method: "GET",
                            dataType: "json",
                            beforeSend: function (xhr ){
                                xhr.overrideMimeType("application/json; charset=uft-8");
                            }});
                        request.done(function(msg){
                            document.getElementById("nom").innerText = "nom : "+ msg.nom;
                            document.getElementById("codePostal").innerText = "code postal : "+ msg.codesPostaux;
                            document.getElementById("population").innerText = "population : "+ msg.population;
                        });
                    request.fail(function(jqXHR, textStatus) {
                        console.log("erreur");
                    }); 
                }
                });
                request.fail(function(jqXHR, textStatus) {
                    console.log("erreur");
                });
                
            
            }

            

        });
        request.fail(function(jqXHR, textStatus) {
            console.log("erreur");
        });
    }

    
getDepartement();
});