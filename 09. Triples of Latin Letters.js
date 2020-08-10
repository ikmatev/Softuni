function multy(number) {
    for (let char1 = 0; char1 < number; char1++) {
        for (let char2 = 0; char2 < number; char2++) {
            for (let char3 = 0; char3 < number; char3++) {
                let chr1 = String.fromCharCode(97 + char1);
                let chr2 = String.fromCharCode(97 + char2);
                let chr3 = String.fromCharCode(97 + char3);

                console.log(chr1 +chr2 + chr3)                
            }            
        }        
    }
}