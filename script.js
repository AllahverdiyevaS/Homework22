
// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
// const newDiv = document.createElement("div")
// const newBtn = document.createElement("button")
// newDiv.style.width="200px"
// newDiv.style.height="200px"
// newDiv.style.backgroundColor="red"
// newBtn.innerText = "Click"


// newDiv.append(newBtn)

// document.body.append(newDiv)

//     newBtn.addEventListener ("click", function () {newDiv.style.width="100px"
//     newDiv.style.height="100px"
//     newDiv.style.backgroundColor="green"
        
//     })

    // Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
//     const newDiv = document.createElement("div")
//     const newBtn = document.createElement("button")
//     newDiv.style.width="200px"
//    newDiv.style.height="200px"
//    newDiv.style.backgroundColor="pink"
// newBtn.innerText = "Click"
//     newDiv.append(newBtn)

//     document.body.append(newDiv)

//     newBtn.addEventListener ("click", function () {
//   newDiv.style.backgroundColor="blue"
//   console.log( newDiv.style.backgroundColor);
        
//   })
// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

    //  const newDiv = document.createElement("div")
    //  const newBtn = document.createElement("button")
    //  newDiv.style.width="150px"
    // newDiv.style.height="150px"
    // newDiv.style.border="solid 2px black"
    // newBtn.innerText = "Click"
    // newDiv.append(newBtn)

    //  document.body.append(newDiv)
    //  newBtn.addEventListener( "click", function () {     const width = newDiv.offsetWidth + 20;
    //     const height = newDiv.offsetHeight + 20;
    
    //     newDiv.style.width = width + 'px';
    //     newDiv.style.height = height + 'px';
     
    //  })
    //  Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
//     const newDiv = document.createElement("div")
//      const newBtn = document.createElement("button")
//      newDiv.classList.add("root") 
//      newDiv.append(newBtn)
//      newDiv.style.border="solid 2px black"
//      newDiv.style.width="150px"
//     newDiv.style.height="150px"
// newBtn.innerText = "Click"

//   document.body.append(newDiv)
//   newBtn.addEventListener ( "click", function () {  const newParag = document.createElement("p")
//   newParag.style.color="blue" ,newParag.innerText="gfdhcnfviuvgh", newDiv.append(newParag)

//   })

// // Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

     


//     const newDiv = document.createElement("div");
// const newBtn = document.createElement("button");
// newDiv.classList.add("root");
// newDiv.style.border = "solid 2px black";
// newDiv.style.width = "150px";
// newDiv.style.height = "150px";
// document.body.append(newDiv);

// newBtn.innerText = "Добавить параграф";

// newDiv.append(newBtn);

// let isFirst = true;

// newBtn.addEventListener("click", function() {
//   const paragraph = document.createElement("p");
//   paragraph.innerText = "Новый параграф";
  
//   if (isFirst) {
//     paragraph.style.color = "blue";
    
//   } else {
//     paragraph.style.color = "green";
//   }
//   isFirst= !isFirst;

  
//   newDiv.append(paragraph);
  
// });
    