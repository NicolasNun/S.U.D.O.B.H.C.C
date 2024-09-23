function trocar_funcao(funcao) {
  opcao_1.classList.remove("funcao_atual");
  opcao_2.classList.remove("funcao_atual");
  opcao_3.classList.remove("funcao_atual");
  opcao_4.classList.remove("funcao_atual");
  opcao_5.classList.remove("funcao_atual");

  base.classList.add("sumir");
  demo1.classList.add("sumir");

  cortina.classList.add("sumir");
  cortina2.classList.add("sumir");
  cortina.classList.remove("digitacao_numero");
  cortina2.classList.remove("digitacao_numero");

  botao_converter.classList.add("sumir");
  botao_somar.classList.add("sumir");
  botao_subtrair.classList.add("sumir");
  botao_multiplicar.classList.add("sumir");
  botao_dividir.classList.add("sumir");

  decimal_resultado.classList.add("sumir");
  bin_resultado.classList.add("sumir");
  octal_resultado.classList.add("sumir");
  hexa_resultado.classList.add("sumir");

  document.getElementById("demo2").innerHTML = "";
  document.getElementById("demo3").innerHTML = "";
  document.getElementById("demo4").innerHTML = "";
  document.getElementById("demo5").innerHTML = "";

  document.getElementById("demo2").classList.remove("largura_box_resultado")
  document.getElementById("demo3").classList.remove("largura_box_resultado")
  document.getElementById("demo4").classList.remove("largura_box_resultado")
  document.getElementById("demo5").classList.remove("largura_box_resultado");
  

  if (funcao == "converter") {
    opcao_1.classList.add("funcao_atual");
    titulo.innerHTML = "Converter";

    base.classList.remove("sumir");
    demo1.classList.remove("sumir");

    botao_converter.classList.remove("sumir");

    decimal_resultado.classList.remove("sumir");
    bin_resultado.classList.remove("sumir");
    octal_resultado.classList.remove("sumir");
    hexa_resultado.classList.remove("sumir");
  } else if (funcao == "adicao") {
    opcao_2.classList.add("funcao_atual");
    titulo.innerHTML = "Somar";

    cortina.classList.remove("sumir");
    cortina2.classList.remove("sumir");
    cortina.classList.add("digitacao_numero");
    cortina2.classList.add("digitacao_numero");

    botao_somar.classList.remove("sumir");

    decimal_resultado.classList.remove("sumir");
    bin_resultado.classList.remove("sumir");
    octal_resultado.classList.remove("sumir");
    hexa_resultado.classList.remove("sumir");
  } else if (funcao == "subtracao") {
    opcao_3.classList.add("funcao_atual");
    titulo.innerHTML = "Subtrair";

    cortina.classList.remove("sumir");
    cortina2.classList.remove("sumir");
    cortina.classList.add("digitacao_numero");
    cortina2.classList.add("digitacao_numero");

    botao_subtrair.classList.remove("sumir");

    decimal_resultado.classList.remove("sumir");
    bin_resultado.classList.remove("sumir");
    octal_resultado.classList.remove("sumir");
    hexa_resultado.classList.remove("sumir");
  } else if (funcao == "multiplicacao") {
    opcao_4.classList.add("funcao_atual");
    titulo.innerHTML = "Multiplicar";

    cortina.classList.remove("sumir");
    cortina2.classList.remove("sumir");
    cortina.classList.add("digitacao_numero");
    cortina2.classList.add("digitacao_numero");

    botao_multiplicar.classList.remove("sumir");

    decimal_resultado.classList.remove("sumir");
    bin_resultado.classList.remove("sumir");
    octal_resultado.classList.remove("sumir");
    hexa_resultado.classList.remove("sumir");
  } else {
    opcao_5.classList.add("funcao_atual");

    titulo.innerHTML = "Dividir";

    cortina.classList.remove("sumir");
    cortina2.classList.remove("sumir");
    cortina.classList.add("digitacao_numero");
    cortina2.classList.add("digitacao_numero");

    botao_dividir.classList.remove("sumir");

    decimal_resultado.classList.remove("sumir");
    bin_resultado.classList.remove("sumir");
    octal_resultado.classList.remove("sumir");
    hexa_resultado.classList.remove("sumir");
  }
}

function converter() {
  const base_1 = base.value;
  const numero = demo1.value;

    demo2.classList.add("largura_box_resultado");
    demo3.classList.add("largura_box_resultado");
    demo4.classList.add("largura_box_resultado");
    demo5.classList.add("largura_box_resultado");

  if (!validar_bases(base_1, numero)) {
    alert("Número inválido para a base escolhida");

    return;
  }
  esconder_mostrar_resultado(base_1);
  printar(parseInt(numero, base_1));
}

function calcular(operacao) {
  var numero_1 = primeiro_numero.value;
  var numero_2 = segundo_numero.value;

  var base_2 = base2.value;
  var base_3 = base3.value;

  demo2.classList.add("largura_box_resultado")
  demo3.classList.add("largura_box_resultado")
  demo4.classList.add("largura_box_resultado")
  demo5.classList.add("largura_box_resultado")

  // validar_bases(base_2, numero_1) == false
  if (!validar_bases(base_2, numero_1) || !validar_bases(base_3, numero_2)) {
    alert("Número inválido para a base escolhida");
    return;
  }

  let resultado;
  if (operacao == "somar") {
    resultado = somar(base_2, base_3, numero_1, numero_2);
  } else if (operacao == "subtrair") {
    resultado = subtrair(base_2, base_3, numero_1, numero_2);
  } else if (operacao == "multiplicar") {
    resultado = multiplicar(base_2, base_3, numero_1, numero_2);
  } else {
    resultado = dividir(base_2, base_3, numero_1, numero_2);
  }

  printar(resultado);
}

function somar(base_2, base_3, numero_1, numero_2) {
  return (
    parseInt(numero_1, parseInt(base_2)) + parseInt(numero_2, parseInt(base_3))
  );
}

function subtrair(base_2, base_3, numero_1, numero_2) {
  return (
    parseInt(numero_1, parseInt(base_2)) - parseInt(numero_2, parseInt(base_3))
  );
}

function dividir(base_2, base_3, numero_1, numero_2) {
  return (
    parseInt(numero_1, parseInt(base_2)) / parseInt(numero_2, parseInt(base_3))
  );
}

function multiplicar(base_2, base_3, numero_1, numero_2) {
  return (
    parseInt(numero_1, parseInt(base_2)) * parseInt(numero_2, parseInt(base_3))
  );
}

function esconder_mostrar_resultado(base) {
  decimal_resultado.classList.remove("sumir");
  bin_resultado.classList.remove("sumir");
  octal_resultado.classList.remove("sumir");
  hexa_resultado.classList.remove("sumir");

  if (base == 10) {
    decimal_resultado.classList.add("sumir");
  } else if (base == 2) {
    bin_resultado.classList.add("sumir");
  } else if (base == 8) {
    octal_resultado.classList.add("sumir");
  } else {
    hexa_resultado.classList.add("sumir");
  }
}

function printar(resultado) {
  let binario = resultado.toString(2);

  let octal = resultado.toString(8);

  let hexadecimal = resultado.toString(16);

  document.getElementById("demo2").innerHTML = resultado;
  document.getElementById("demo3").innerHTML = binario;
  document.getElementById("demo4").innerHTML = octal;
  document.getElementById("demo5").innerHTML = hexadecimal;
}

function validar_bases(base, numero) {
  if (
    (base == 10 && !/^[0-9]+$/.test(numero)) ||
    (base == 2 && !/^[01]+$/.test(numero)) ||
    (base == 8 && !/^[0-7]+$/.test(numero)) ||
    (base == 16 && !/^[0-f]+$/.test(numero))
  ) {
    return false;
  }

  return true;
}
