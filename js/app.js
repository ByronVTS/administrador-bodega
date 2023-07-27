document.addEventListener("DOMContentLoaded", function () {
  var selectMaterial = document.getElementById("selectMaterial");
  var tablaMateriales = document.querySelector(".table__materiales");
  selectMaterial.addEventListener("change", function () {
    var seleccionado = selectMaterial.value;
    if (seleccionado !== "") {
      var nuevaFila = document.createElement("tr");
      nuevaFila.innerHTML =
        "<td class='colum-cantidad'>1</td><td class='colum-descripcion'>" +
        seleccionado +
        "</td>";
      tablaMateriales.appendChild(nuevaFila);
    }
  });
});

// lista de materiales de bodega
let listaMateriales = {
  0: "Patch cord simple SC/UPC - SC/APC  ",
  1: "Roseta (pigtail SC/APC + 2p + 2t + transicion)",
  2: "Roseta vacia",
  3: "Pig tail simple SC/APC",
  4: "ONT Huawei",
  5: "Router plan bajo / alto",
  6: "Camara interior / exterior ",
  7: "Cable drop de 2 FO",
  8: "Roseta reutilizable",
  9: "Conectores mecanicos SC/APC",
  10: "Conectores mecanicos SC/UPC",
  11: "Patch cord UTP CAT 5E",
  12: "Cable UTP CAT 5E",
  13: "Conectores RJ45",
  14: "Splitter conectorizado PLC 1*16 SC/APC",
  15: "Splitter conectorizado PLC 1*8 SC/APC",
  16: "Nap 16 FO poste sin derivacion COMPLETA",
  17: "Nap 16 FO poste con derivacion  COMPLETA",
  18: "Nap 16 FO poste sin derivacion vacia",
  19: "Nap 16 FO poste con derivacion vacia",
  20: "Transiciones SC/APC",
  21: "Manga 48 DOMO para fusión con derivación",
  22: "Manga 96 DOMO para fusión con derivación",
  23: "Manga 48 DOMO para fusión final",
  24: "Manga pequeña",
  25: "Manga pequeña de empalme de ADSS",
  26: "Pinzas de anclaje",
  27: "Abrazadera tipo A",
  28: "Abrazadera tipo B",
  29: "Farol 1.20m",
  30: "Farol 1.50m",
  31: "Preformado 11.8 a 12.6",
  32: "Herraje Tipo A ADSS 1 EXT",
  33: "Herraje Tipo A ADSS 2 EXT",
  34: "Herraje Tipo A ADSS 4 EXT",
  35: "Herraje Tipo A ADSS vacio",
  36: "Herraje para cruce americano 2 ext",
  37: "Herraje para cruce americano 4 ext",
  38: "Herraje Tipo B conico",
  39: "Acrilico",
  40: "Cable drop de 8 FO",
  41: "Cable ADSS 6 FO",
  42: "Cable ADSS 8 FO",
  43: "Cable ADSS 12 FO",
  44: "Cable ADSS 24 FO",
  45: "Cable ADSS 24 FO",
  46: "Cable ADSS 24 FO",
  47: "Cable ADSS 48 FO",
  48: "Cinta etiquetadora",
  49: "Tubillo",
  50: "Picoletas",
  51: "Taipe",
  52: "Pilas AA",
  53: "Pilas AAA",
  54: "Cinta Eriband 3/4",
  55: "Candados Eriband 3/4",
  56: "Cinta Eriband 1/2",
  57: "Candados Eriband 1/2",
  58: "Amarras plásticas 10",
  59: "Amarras plásticas 12",
  60: "Amarras plásticas 15",
  61: "Amarras plásticas 20",
  62: "Amarras plásticas 30",
  63: "Amarras plásticas 40",
  64: "Amarras plásticas 50",
  65: "Zunchadora",
};

// funcion de agregar materiales a la tabla por el tipo de codigo de reporte
document.addEventListener("DOMContentLoaded", function () {
  var selectCodigo = document.getElementById("select-codigo");
  var tablaMateriales = document.querySelector(".table__materiales");

  // funcion para insertar en materiales en la tabla
  function insertarMateriales(conjuntoDeMateriales) {
    for (var i = 0; i < conjuntoDeMateriales.length; i++) {
      var nuevaFila = document.createElement("tr");
      nuevaFila.innerHTML =
        "<td class='colum-cantidad'>1</td><td class='colum-descripcion'>" +
        listaMateriales[conjuntoDeMateriales[i]] +
        "</td>";
      tablaMateriales.appendChild(nuevaFila);
    }
  }

  //Insersion de materiales por codigo 
  selectCodigo.addEventListener("change", function () {
    var seleccionado = selectCodigo.value;
    if (seleccionado == 200) {
      insertarMateriales([4, 0, 1, 3]);
    } else if (seleccionado == 555) {
      insertarMateriales([0, 1, 3]);
    } else if (seleccionado == 1) {
      insertarMateriales([0,1,3,8])
    } else if (seleccionado == 2) {
      insertarMateriales([0,1,3,8])
    } else if (seleccionado == 3) {
      insertarMateriales([0,1,3,8,4,5])
    } else if (seleccionado == 4) {
      insertarMateriales([0,1,3,8])
    } else if (seleccionado == 6) {
      insertarMateriales([4,5])
    } else if (seleccionado == 7) {
      insertarMateriales([4,5])
    } else if (seleccionado == 17) {
      insertarMateriales([8])
    } else if (seleccionado == 9) {
      insertarMateriales([4,5])
    }else if (seleccionado == 603) {
      insertarMateriales([16,54,55,65])
    }
  });
});

// funcion para agregar fila

function agregarFila(){
  var table = document.getElementById("table__materiales");
  console.log(table)
  var nuevaFila = table.insertRow(table.rows.length)
}