// Group atas
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');

// Group Kanan
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');

// Group kiri
const b9 = document.getElementById('b9');
const b10 = document.getElementById('b10');
const b11 = document.getElementById('b11');
const b12 = document.getElementById('b12');

// Grub Bawah
const b13 = document.getElementById('b13');
const b14 = document.getElementById('b14');
const b15 = document.getElementById('b15');
const b16 = document.getElementById('b16');

// Group Tengah
const bi1 = document.getElementById('bi1');
const bi2 = document.getElementById('bi2');
const bi3 = document.getElementById('bi3');
const bi4 = document.getElementById('bi4');

// Generate child node from root
function getChild(from, position) {
    if(from === "bi1") {

        if(position === "top") {
            const resultTop1 = [b1, b3];
            return resultTop1;
        } else if(position === "right") {
            const resultRight1 = [bi2, b7, b8];
            return resultRight1;
        } else if(position === "bottom") {
            const resultBottom1 = [bi3, b13, b15];
            return resultBottom1;
        } else if(position === "left") {
            const resultLeft1 = [b6, b5];
            return resultLeft1;
        }

    } else if(from === "bi2") {

        if(position === "top") {
            const resultTop2 = [b2, b4];
            return resultTop2;
        } else if(position === "right") {
            const resultRight2 = [b7, b8];
            return resultRight2;
        } else if(position === "bottom") {
            const resultBottom2 = [bi4, b14, b16];
            return resultBottom2;
        } else if(position === "left") {
            const resultLeft2 = [bi1, b6, b5];
            return resultLeft2;
        }

    } else if(from === "bi3") {

        if(position === "top") {
            const resultTop3 = [bi1, b3, b1];
            return resultTop3;
        } else if(position === "right") {
            const resultRight3 = [bi4, b11, b12];
            return resultRight3;
        } else if(position === "bottom") {
            const resultBottom3 = [b13, b15];
            return resultBottom3;
        } else if(position === "left") {
            const resultLeft3 = [b10, b9];
            return resultLeft3;
        }

    } else if(from === "bi4") {

        if(position === "top") {
            const resultTop4 = [bi2, b4, b2];
            return resultTop4;
        } else if(position === "right") {
            const resultRight4 = [b11, b12];
            return resultRight4;
        } else if(position === "bottom") {
            const resultBottom4 = [b14, b16];
            return resultBottom4;
        } else if(position === "left") {
            const resultLeft4 = [bi3, b10, b9];
            return resultLeft4;
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
                    alert("Kamu Menang");
                    location.reload();
                }

            } else {
                alert("Kamu Kalah");
                location.reload();
            }
        } else {
            alert("Kamu Kalah");
            location.reload();
        }
    })
})

// Function ValidationValue
function validValue(value) {

    const valueValid = [3, 5, 6, 8];

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

    const valueInput = [bi1, bi2, bi3, bi4];

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
    }

}

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

    }
}


