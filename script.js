// 1. Prompt the user for a number to begin counting down bottles.

// 2. In the song, everytime a bottle drops,
// the subtracted number should go up by 1.



// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.




function music() {
    let Nbre = prompt("Entrez le nombre de bouteilles de bière:")
    

    if (Nbre < 1) {
        console.log("Pas de bouteilles de bière sur le mur")
      
    }else{

    let compter = 1
    while (Nbre > 0) {
        
        if (Nbre === 1) {
            return "bouteille"
        }
        console.log(Nbre + " " + "bouteilles" + " de bière sur le mur")
        console.log(Nbre + " " + "bouteilles"+ " de bière")
        console.log("Prenez-en " + compter + ", passez-" + (compter === 1 ? "la" : "les") + " autour")
        Nbre -= compter
        compter++
    }

    }
    console.log("Pas de bouteilles de bière sur le mur")
}


music()