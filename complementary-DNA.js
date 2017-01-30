//Code wars DNA
function DNAStrand(dna){
  var complement = "";
	for (i=0; i<dna.length; i++) {
    	if(dna.charAt(i) === "A"){
    		complement += "T"
        } else if(dna.charAt(i) === "T") {
    		complement += "A"
        } else if(dna.charAt(i) === "G") {
    		complement += "C"
        } else {
    		complement += "G"
        }
    }
return complement
}
