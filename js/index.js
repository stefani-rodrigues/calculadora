let visor = document.getElementById("visor");

visor.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calcular();
  }
});

const adicionaNoVisor = (value) => {
  visor.value += value;
};

const calcular = () => {
  try {
    visor.value = eval(visor.value);
  } catch (error) {
    visor.value = "erro";
  }
};

const limparVisor = () => {
  visor.value = "";
};
