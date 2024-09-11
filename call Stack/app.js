/*function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();*/

let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
       h1.style.color = color;
       setTimeout(()=>{
        let num = Math.floor(Math.random()*10)+1;
        if(num>8){
            reject("promise was rejected");
        }
        resolve("color changed")
       },delay);
       
    });
}

 async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("yellow",1000);
    } catch(err){
        console.log("error caught");
    }

    let a = 10;
    console.log(a);
    console.log("nemNum",a+8);
 } 


/*function saveDb(data,success,failure){
    let interSpeed = Math.floor(Math.random()*10) + 1;
    if(interSpeed > 4){
        success();
    } else {
        failure();
    }
}

saveDb("Sajjad", ()=>{
    console.log("success: your data saved");
    saveDb("shahab",()=>{
        console.log("success2:data saved");
        saveDb("awais",()=>{
            console.log("success3:data saved")
        },()=>{
            console.log("failure3:data not saved")
        })
    },()=>{
        console.log("failure2:data not saved");
    })
}, ()=>{
    console.log("failure:data not saved")
});

function saveDb(data){
    return new Promise((resolve,reject) => {
        let interSpeed = Math.floor(Math.random()*10) + 1;
    if(interSpeed > 4){
        resolve("success: Data Saved");
    } else {
        reject("failure: Weak Connection");
    }
    });
    
}

saveDb("sajjad")
.then((result)=>{
    console.log("result: ", result);
    console.log("data1: Promise was resolved");
    return saveDb("khan")
})

.then((result)=>{
    console.log("result: ", result);
    console.log("data2: Promise was resolved");
    return saveDb("bangash")
})

.then((result)=>{
    console.log("result: ", result);
    console.log("data3: Promise was resolved")
})

.catch((error)=>{
    console.log("error: ", error);
    console.log("Promise was rejected");
});*/
