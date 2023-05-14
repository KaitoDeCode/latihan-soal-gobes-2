function update(){
    const selection = document.getElementById('selection')
    const inputValue = document.getElementById('inputValue')
    const target1 = document.getElementById('targetObject1')
    const target2 = document.getElementById('targetObject2')

    const opsi = selection.value;
    const nilaiUbah = inputValue.value;

    if(opsi === "warnaBgc") return target1.style.backgroundColor = nilaiUbah;
    if(opsi === "warnaTxt") return target2.style.color = nilaiUbah;
    if(opsi === "ukuranTxt") return target2.style.fontSize= nilaiUbah;
    if(opsi === "jenisFnt") return target2.style.fontFamily = nilaiUbah;
    if(opsi === "lebarKnt") return target1.style.width = nilaiUbah;
    if(opsi === "tinggiKnt") return target1.style.height = nilaiUbah;
    
}