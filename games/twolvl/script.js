// Group atas
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');

// Group Kanan
const b13 = document.getElementById('b13');
const b14 = document.getElementById('b14');
const b15 = document.getElementById('b15');
const b19 = document.getElementById('b19');
const b20 = document.getElementById('b20');
const b21 = document.getElementById('b21');
const b25 = document.getElementById('b25');
const b26 = document.getElementById('b26');
const b27 = document.getElementById('b27');


// Group kiri
const b10 = document.getElementById('b10');
const b11 = document.getElementById('b11');
const b12 = document.getElementById('b12');
const b16 = document.getElementById('b16');
const b17 = document.getElementById('b17');
const b18 = document.getElementById('b18');
const b22 = document.getElementById('b22');
const b23 = document.getElementById('b23');
const b24 = document.getElementById('b24');

// Grub Bawah
const b28 = document.getElementById('b28');
const b29 = document.getElementById('b29');
const b30 = document.getElementById('b30');
const b31 = document.getElementById('b31');
const b32 = document.getElementById('b32');
const b33 = document.getElementById('b33');
const b34 = document.getElementById('b34');
const b35 = document.getElementById('b35');
const b36 = document.getElementById('b36');

// Group Tengah
const bi1 = document.getElementById('bi1');
const bi2 = document.getElementById('bi2');
const bi3 = document.getElementById('bi3');
const bi4 = document.getElementById('bi4');
const bi5 = document.getElementById('bi5');
const bi6 = document.getElementById('bi6');
const bi7 = document.getElementById('bi7');
const bi8 = document.getElementById('bi8');
const bi9 = document.getElementById('bi9');

// Generate child node from root
function getChild(from, position) {
    if(from === "bi1") {

        if(position === "top") {
            const resultTop1 = [b7, b4, b1];
            return resultTop1;
        } else if(position === "right") {
            const resultRight1 = [bi2, bi3, b13, b14, b15];
            return resultRight1;
        } else if(position === "bottom") {
            const resultBottom1 = [bi4, bi7, b15, b28, b31, b34];
            return resultBottom1;
        } else if(position === "left") {
            const resultLeft1 = [b12, b11, b10];
            return resultLeft1;
        }

    } else if(from === "bi2") {

        if(position === "top") {
            const resultTop2 = [b8, b5, b2];
            return resultTop2;
        } else if(position === "right") {
            const resultRight2 = [bi3, b13, b14, b15];
            return resultRight2;
        } else if(position === "bottom") {
            const resultBottom2 = [bi5, bi8, b29, b32, b35];
            return resultBottom2;
        } else if(position === "left") {
            const resultLeft2 = [bi1, b12, b11, b10];
            return resultLeft2;
        }

    } else if(from === "bi3") {

        if(position === "top") {
            const resultTop3 = [b9, b6, b3];
            return resultTop3;
        } else if(position === "right") {
            const resultRight3 = [b13, b14, b15];
            return resultRight3;
        } else if(position === "bottom") {
            const resultBottom3 = [bi6, bi9, b30, b33, b36];
            return resultBottom3;
        } else if(position === "left") {
            const resultLeft3 = [bi2, bi1, b12, b11, b10];
            return resultLeft3;
        }

    } else if(from === "bi4") {

        if(position === "top") {
            const resultTop4 = [bi1, b7, b4, b1];
            return resultTop4;
        } else if(position === "right") {
            const resultRight4 = [bi5, bi6, b19, b20, b21];
            return resultRight4;
        } else if(position === "bottom") {
            const resultBottom4 = [bi7, b28, b31, b34];
            return resultBottom4;
        } else if(position === "left") {
            const resultLeft4 = [b18, b17, b16];
            return resultLeft4;
        }

    } else if(from === "bi5") {

        if(position === "top") {
            const resultTop5 = [bi2, b8, b5, b2];
            return resultTop5;
        } else if(position === "right") {
            const resultRight5 = [bi6, b19, b20, b21];
            return resultRight5;
        } else if(position === "bottom") {
            const resultBottom5 = [bi8, b29, b32, b35];
            return resultBottom5;
        } else if(position === "left") {
            const resultLeft5 = [bi4, b18, b17, b16];
            return resultLeft5;
        }

    } else if(from === "bi6") {

        if(position === "top") {
            const resultTop6 = [bi3, b9, b6, b3];
            return resultTop6;
        } else if(position === "right") {
            const resultRight6 = [b19, b20, b21];
            return resultRight6;
        } else if(position === "bottom") {
            const resultBottom6 = [bi9, b30, b33, b36];
            return resultBottom6;
        } else if(position === "left") {
            const resultLeft6 = [bi5, bi4, b18, b17, b16];
            return resultLeft6;
        }

    } else if(from === "bi7") {

        if(position === "top") {
            const resultTop7 = [bi4, bi1, b7, b4, b1];
            return resultTop7;
        } else if(position === "right") {
            const resultRight7 = [bi8, bi9, b25, b26, b27];
            return resultRight7;
        } else if(position === "bottom") {
            const resultBottom7 = [b28, b31, b34];
            return resultBottom7;
        } else if(position === "left") {
            const resultLeft7 = [b24, b23, b22];
            return resultLeft7;
        } 

    } else if(from === "bi8") {

        if(position === "top") {
            const resultTop8 = [bi5, bi2, b8, b5, b2];
            return resultTop8;
        } else if(position === "right") {
            const resultRight8 = [bi9, b25, b26, b27];
            return resultRight8;
        } else if(position === "bottom") {
            const resultBottom8 = [b29, b32, b35];
            return resultBottom8;
        } else if(position === "left") {
            const resultLeft8 = [bi7, b24, b23, b22];
            return resultLeft8;
        } 

    } else if(from === "bi9") {

        if(position === "top") {
            const resultTop9 = [bi6, bi3, b9, b6, b3];
            return resultTop9;
        } else if(position === "right") {
            const resultRight9 = [b25, b26, b27];
            return resultRight9;
        } else if(position === "bottom") {
            const resultBottom9 = [b30, b33, b36];
            return resultBottom9;
        } else if(position === "left") {
            const resultLeft9 = [bi8, bi7, b24, b23, b22];
            return resultLeft9;
        } 

    }
}

bi1.addEventListener('click', function(){
    bi1.addEventListener('keyup', function() {
        let value = bi1.value;
        const root = "bi1";
        // console.log(root);
        if(validValue(value)) {
            
            if(traversal(root, value)) {

                if(isFull()) {
                    alert("Selamat Anda Menang");
                    location.reload();
                }

            } else {
                alert("Game Over");
                location.reload();
            }
            
        } else {
            alert("Game Over");
            location.reload();
        }
        
    })
})

bi2.addEventListener('click', function(){
    bi2.addEventListener('keyup', function() {
        let value = bi2.value;
        const root = "bi2";
        // console.log(root);
        if(validValue(value)) {
            if(traversal(root, value)) {

                if(isFull()) {
                    alert("Selamat Anda Menang");
                    location.reload();
                }

            } else {
                alert("Game Over");
                location.reload();
            }
        } else {
            alert("Game Over");
            location.reload();
        }
    })
})

bi3.addEventListener('click', function(){
    bi3.addEventListener('keyup', function() {
        let value = bi3.value;
        const root = "bi3";
        // console.log(root);
        if(validValue(value)) {
            if(traversal(root, value)) {

                if(isFull()) {
                    alert("Selamat Anda Menang");
                    location.reload();
                }

            } else {
                alert("Game Over");
                location.reload();
            }
        } else {
            alert("Game Over");
            location.reload();
        }
    })
})

bi4.addEventListener('click', function(){
    bi4.addEventListener('keyup', function() {
        let value = bi4.value;
        const root = "bi4";
        // console.log(root);
        if(validValue(value)) {
            if(traversal(root, value)) {

                if(isFull()) {
                    alert("Selamat anda menang");
                    location.reload();
                }

            } else {
                alert("Game Over")
                location.reload();
            }
        } else {
            alert("Game Over")
            location.reload();
        }
    })
})

bi5.addEventListener('click', function(){
    bi5.addEventListener('keyup', function() {
        let value = bi5.value;
        const root = "bi5";
        // console.log(root);
        if(validValue(value)) {
            if(traversal(root, value)) {

                if(isFull()) {
                    alert("Selamat anda menang");
                    location.reload();
                }

            } else {
                alert("Game Over")
                location.reload();
            }
        } else {
            alert("Game Over")
            location.reload();
        }
    })
})

bi6.addEventListener('click', function(){
    bi6.addEventListener('keyup', function() {
        let value = bi6.value;
        const root = "bi6";
        // console.log(root);
        if(validValue(value)) {
            if(traversal(root, value)) {

                if(isFull()) {
                    alert("Selamat anda menang");
                    location.reload();
                }

            } else {
                alert("Game Over")
                location.reload();
            }
        } else {
            alert("Game Over")
            location.reload();
        }
    })
})

bi7.addEventListener('click', function(){
    bi7.addEventListener('keyup', function() {
        let value = bi7.value;
        const root = "bi7";
        // console.log(root);
        if(validValue(value)) {
            if(traversal(root, value)) {

                if(isFull()) {
                    alert("Selamat anda menang");
                    location.reload();
                }

            } else {
                alert("Game Over")
                location.reload();
            }
        } else {
            alert("Game Over")
            location.reload();
        }
    })
})

bi8.addEventListener('click', function(){
    bi8.addEventListener('keyup', function() {
        let value = bi8.value;
        const root = "bi8";
        // console.log(root);
        if(validValue(value)) {
            if(traversal(root, value)) {

                if(isFull()) {
                    alert("Selamat anda menang");
                    location.reload();
                }

            } else {
                alert("Game Over")
                location.reload();
            }
        } else {
            alert("Game Over")
            location.reload();
        }
    })
})

bi9.addEventListener('click', function(){
    bi9.addEventListener('keyup', function() {
        let value = bi9.value;
        const root = "bi9";
        // console.log(root);
        if(validValue(value)) {
            if(traversal(root, value)) {

                if(isFull()) {
                    alert("Selamat anda menang");
                    location.reload();
                }

            } else {
                alert("Game Over")
                location.reload();
            }
        } else {
            alert("Game Over")
            location.reload();
        }
    })
})


// Function ValidationValue
function validValue(value) {

    const valueValid = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for(let i = 0; i < valueValid.length; i++) {
        if(valueValid[i] == value) {
            return true;
            break;
        }
    }

    return false;

}

// All input isFull
function isFull() {

    const valueInput = [bi1, bi2, bi3, bi4, bi5, bi6, bi7, bi8, bi9];

    for(let i = 0; i < valueInput.length; i++) {
        if(valueInput[i].value == "") {
            return false;
            break;
        } 
    }

    return true;

}


// Function Traversal
function traversal(from, value) {

    if(from === "bi1") {

        if(traversalAtas(from, value)) {
            
            if(traversalKanan(from, value)) {
                
                if(traversalBawah(from, value)) {
                    
                    
                    if(traversalKiri(from, value)) {
                        // console.log("Menang");
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            } else {
                return false;
            }
            
        } else {
            return false;
        }


    } else if(from === "bi2") {
        
        if(traversalAtas(from, value)) {
            
            if(traversalKanan(from, value)) {
                
                if(traversalBawah(from, value)) {
                    
                    
                    if(traversalKiri(from, value)) {
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            } else {
                return false;
            }
            
        } else {
            return false;
        }

    } else if(from === "bi3") {
        
        if(traversalAtas(from, value)) {
            
            if(traversalKanan(from, value)) {
                
                if(traversalBawah(from, value)) {
                    
                    
                    if(traversalKiri(from, value)) {
                        // console.log("Menang");
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            } else {
                return false;
            }
            
        } else {
            return false;
        }

    } else if(from === "bi4") {
        if(traversalAtas(from, value)) {
            
            if(traversalKanan(from, value)) {
                
                if(traversalBawah(from, value)) {
                    
                    
                    if(traversalKiri(from, value)) {
                        // console.log("Menang");
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            } else {
                return false;
            }
            
        } else {
            return false;
        }

    } else if(from === "bi5") {
        if(traversalAtas(from, value)) {
            
            if(traversalKanan(from, value)) {
                
                if(traversalBawah(from, value)) {
                    
                    
                    if(traversalKiri(from, value)) {
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            } else {
                return false;
            }
            
        } else {
            return false;
        }

    } else if(from === "bi6") {
        if(traversalAtas(from, value)) {
            
            if(traversalKanan(from, value)) {
                
                if(traversalBawah(from, value)) {
                    
                    
                    if(traversalKiri(from, value)) {
                        // console.log("Menang");
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            } else {
                return false;
            }
            
        } else {
            return false;
        }

    } else if(from === "bi7") {
        if(traversalAtas(from, value)) {
            
            if(traversalKanan(from, value)) {
                
                if(traversalBawah(from, value)) {
                    
                    
                    if(traversalKiri(from, value)) {
                        // console.log("Menang");
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            } else {
                return false;
            }
            
        } else {
            return false;
        }

    } else if(from === "bi8") {
        if(traversalAtas(from, value)) {
            
            if(traversalKanan(from, value)) {
                
                if(traversalBawah(from, value)) {
                    
                    
                    if(traversalKiri(from, value)) {
                        // console.log("Menang");
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            } else {
                return false;
            }
            
        } else {
            return false;
        }

    } else if(from === "bi9") {
        if(traversalAtas(from, value)) {
            
            if(traversalKanan(from, value)) {
                
                if(traversalBawah(from, value)) {
                    
                    
                    if(traversalKiri(from, value)) {
                        // console.log("Menang");
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            } else {
                return false;
            }
            
        } else {
            return false;
        }
    }

}


// Traversal setiap sisi
// Travelsal Atas
function traversalAtas(from, value) {
    if(from === "bi1") {

        // const node = [b1, b3];
        const node = getChild(from, "top");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
               return false;
                break;
            }
        }

        return true;

    } else if(from === "bi2") {

        const node = getChild(from, "top");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
               return false;
                break;
            }
        }

        return true;

    } else if(from === "bi3") {

        const node = getChild(from, "top");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
               return false;
                break;
            }
        }

        return true;

    } else if(from === "bi4") {

        const node = getChild(from, "top");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
               return false;
                break;
            }
        }

        return true;

    } else if(from === "bi5") {

        const node = getChild(from, "top");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
               return false;
                break;
            }
        }

        return true;

    } else if(from === "bi6") {

        const node = getChild(from, "top");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
               return false;
                break;
            }
        }

        return true;

    } else if(from === "bi7") {

        const node = getChild(from, "top");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
               return false;
                break;
            }
        }

        return true;

    } else if(from === "bi8") {

        const node = getChild(from, "top");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
               return false;
                break;
            }
        }

        return true;

    } else if(from === "bi9") {

        const node = getChild(from, "top");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
               return false;
                break;
            }
        }

        return true;

    }
}

// Traversal Kanan
function traversalKanan(from, value) {
    if(from === "bi1") {

        // const node = [bi2, b7, b8];
        const node = getChild(from, "right");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi2") {

        const node = getChild(from, "right");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi3") {

        const node = getChild(from, "right");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi4") {

        const node = getChild(from, "right");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi5") {

        const node = getChild(from, "right");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi6") {

        const node = getChild(from, "right");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi7") {

        const node = getChild(from, "right");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi8") {

        const node = getChild(from, "right");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi9") {

        const node = getChild(from, "right");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    }
}

// Traversal Bawah
function traversalBawah(from, value) {
    if(from === "bi1") {

        // const node = [bi3, b13, b15];
        const node = getChild(from, "bottom");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi2") {

        const node = getChild(from, "bottom");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi3") {

        const node = getChild(from, "bottom");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi4") {

        const node = getChild(from, "bottom");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi5") {

        const node = getChild(from, "bottom");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi6") {

        const node = getChild(from, "bottom");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi7") {

        const node = getChild(from, "bottom");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi8") {

        const node = getChild(from, "bottom");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi9") {

        const node = getChild(from, "bottom");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    }
}

// Traversal Kiri
function traversalKiri(from, value) {
    if(from === "bi1") {

        // const node = [b6, b5];
        const node = getChild(from, "left");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi2") {

        const node = getChild(from, "left");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi3") {

        const node = getChild(from, "left");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi4") {

        const node = getChild(from, "left");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi5") {

        const node = getChild(from, "left");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi6") {

        const node = getChild(from, "left");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi7") {

        const node = getChild(from, "left");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi8") {

        const node = getChild(from, "left");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    } else if(from === "bi9") {

        const node = getChild(from, "left");
        for(let i = 0; i < node.length; i++) {
            if(node[i].value == value) {
                return false;
                break;
            }
        }

        return true;

    }
}


