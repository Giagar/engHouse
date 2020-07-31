$(function () {
  const rooms = [
    { id: "kitchen", name: "cucina" },
    { id: "livRoom", name: "soggiorno" },
    { id: "garage", name: "garage" },
    { id: "bathroom", name: "bagno" },
    { id: "hall", name: "ingresso" },
    { id: "bedroom", name: "camera da letto" },
    { id: "attic", name: "soffitta" },
    { id: "basement", name: "seminterrato" },
  ];

  const furnitures = [
    // {id: "", name: "", place: ""},
    {
      id: "fridge",
      name: "frigorifero",
      place: "kitchen",
      url: "https://www.svgrepo.com/show/251738/refrigerator-fridge.svg",
    },
    {
      id: "sink",
      name: "lavandino",
      place: "kitchen",
      url: "https://www.svgrepo.com/show/206914/sink.svg",
    },
    {
      id: "cooker",
      name: "fornello",
      place: "kitchen",
      url: "https://www.svgrepo.com/show/242628/bake-cooker.svg",
    },
    {
      id: "car",
      name: "automobile",
      place: "garage",
      url: "https://www.svgrepo.com/show/178/car-compact.svg",
    },
    {
      id: "bath",
      name: "vasca",
      place: "bathroom",
      url: "https://www.svgrepo.com/show/3863/bathtub.svg",
    },
    {
      id: "shower",
      name: "doccia",
      place: "bathroom",
      url: "https://www.svgrepo.com/show/158972/shower-with-water.svg",
    },
    {
      id: "toilet",
      name: "wc",
      place: "bathroom",
      url: "https://www.svgrepo.com/show/95624/toilet-side-view.svg",
    },
    {
      id: "mirror",
      name: "specchio",
      place: "bathroom",
      url: "https://www.svgrepo.com/show/249221/mirror.svg",
    },
    {
      id: "wardrobe",
      name: "armadio",
      place: "bedroom",
      url: "https://www.svgrepo.com/show/95503/bedroom-wardrobe.svg",
    },
    {
      id: "drawers",
      name: "Cassettiera",
      place: "bedroom",
      url: "https://www.svgrepo.com/show/207226/chest-of-drawers-furniture.svg",
    },
    {
      id: "bed",
      name: "letto",
      place: "bedroom",
      url: "https://www.svgrepo.com/show/8632/queen-size-bed.svg",
    },
    {
      id: "rug",
      name: "tappeto",
      place: "livRoom",
      url: "https://www.svgrepo.com/show/13034/beach-rug.svg",
    },
    {
      id: "armchair",
      name: "poltrona",
      place: "livRoom",
      url: "https://www.svgrepo.com/show/54377/armchair.svg",
    },
    {
      id: "sofa",
      name: "divano",
      place: "livRoom",
      url: "https://www.svgrepo.com/show/93889/sofa.svg",
    },
    {
      id: "bookcase",
      name: "libreria",
      place: "livRoom",
      url: "https://www.svgrepo.com/show/90285/library-bookcase.svg",
    },
    {
      id: "lamp",
      name: "lampada",
      place: "livRoom",
      url: "https://www.svgrepo.com/show/18575/desk-lamp.svg",
    },
  ];

  /*function commands(x) {
        return `There is a ${furnitures[4].id} in ${furnitures[4].place}`
      } */

  const delay = 1500;
  let houseHTML = "";
  let furnitureHTML = "";

  //html rooms
  rooms.forEach((room) => {
    houseHTML += `<div id="${room.id}" class="droppable ui-widget-header">
          <p>${room.name}</p>
        </div>`;
  });

  //html furniture
  furnitures.forEach((furny) => {
    furnitureHTML += `<div id="${furny.id}" class="${furny.place} draggable ui-widget-content" style="background: url(${furny.url}) no-repeat; background-size: contain !important;">
          <p>${furny.name}</p>
        </div>`;
  });

  $("#house").html(houseHTML);
  $("#furniture").html(furnitureHTML);

  // $( "#fridge" ).draggable();
  // rooms.forEach((room) => {
  //   return
  //   `$( "#${room.id}" ).droppable({
  //     accept: ".${room.id}",
  //     drop: function( event, ui ) {
  //       $( this )
  //         .addClass( "ui-state-highlight" )
  //         .removeClass( "ui-state-highlight", 1500 )
  //     }
  //   });`
  // })

  $("#fridge").draggable();
  $("#sink").draggable();
  $("#cupboard").draggable();
  $("#cooker").draggable();

  $("#sofa").draggable();
  $("#armchair").draggable();
  $("#rug").draggable();
  $("#lamp").draggable();
  $("#bookcase").draggable();

  $("#stairs").draggable();

  $("#car").draggable();

  $("#bed").draggable();
  $("#drawers").draggable();
  $("#wardrobe").draggable();

  $("#mirror").draggable();
  $("#toilet").draggable();
  $("#shower").draggable();
  $("#bath").draggable();

  $("#kitchen").droppable({
    accept: ".kitchen", //to selective activate the drop function
    drop: function (event, ui) {
      // accept: ".special"
      $(this)
        .addClass("ui-state-highlight")
        .removeClass("ui-state-highlight", delay);
      // .find( "p" )
      //   .html( "Dropped!" );
    },
  });

  $("#livRoom").droppable({
    accept: ".livRoom",
    drop: function (event, ui) {
      $(this)
        .addClass("ui-state-highlight highHighlights")
        .removeClass("ui-state-highlight highHighlights", delay);
    },
  });

  $("#hall").droppable({
    accept: ".hall",
    drop: function (event, ui) {
      $(this)
        .addClass("ui-state-highlight highHighlights")
        .removeClass("ui-state-highlight highHighlights", delay);
    },
  });

  $("#garage").droppable({
    accept: ".garage",
    drop: function (event, ui) {
      $(this)
        .addClass("ui-state-highlight highHighlights")
        .removeClass("ui-state-highlight highHighlights", delay);
    },
  });

  $("#basement").droppable({
    accept: ".basement",
    drop: function (event, ui) {
      $(this)
        .addClass("ui-state-highlight highHighlights")
        .removeClass("ui-state-highlight highHighlights", delay);
    },
  });

  $("#bathroom").droppable({
    accept: ".bathroom",
    drop: function (event, ui) {
      $(this)
        .addClass("ui-state-highlight highHighlights")
        .removeClass("ui-state-highlight highHighlights", delay);
    },
  });

  $("#bedroom").droppable({
    accept: ".bedroom",
    drop: function (event, ui) {
      $(this)
        .addClass("ui-state-highlight highHighlights")
        .removeClass("ui-state-highlight highHighlights", delay);
    },
  });

  $("#attic").droppable({
    accept: ".attic",
    drop: function (event, ui) {
      $(this)
        .addClass("ui-state-highlight highHighlights")
        .removeClass("ui-state-highlight highHighlights", delay);
    },
  });
});
