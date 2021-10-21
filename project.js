const Name = $("#name");
const Img = $("#img");
const Price = $("#price");
const Div = $("#div");
const DivA = $("#divA");


const sweetArray =[

    {NameSweet : "كيك شوكلاته" , ImgSweet: "1.jpg" , priceSweet: "20 RS"} , 
    {NameSweet :"دونات" , ImgSweet: "2.jpg" ,priceSweet: "20 RS"},
    {NameSweet : "حلا بارد" , ImgSweet: "3.jpg" , priceSweet: "20 RS"},
    
];
function renderArr(array) {
    for (let i = 0; i < array.length; i++) {
      const div =
       $(`<div">
       <button id="hideBtn" onclick="del (${i})"> delete</button> <br>
          <img src="${array[i].ImgSweet}" >
          <h1>${array[i].NameSweet}</h1>
          <p>${array[i].priceSweet}</p>
      </div>` );
      Div.append(div);
  
    }
  }
  renderArr(sweetArray);

  
function addSweet() {

    const newSweet = {
        NameSweet: Name.val(),
        ImgSweet: Img.val(),
        priceSweet: Price.val(),
    };
  
    sweetArray.push(newSweet);
    renderArr([newSweet]);



}
DivA.hide();
function showHandler() {
    DivA.show();
  }


  function hideHandler(){
    DivA.hide();

  }

  function del(mem) {
    sweetArray.splice(mem,1);
    Div.html("");
    renderArr(sweetArray);






  }



