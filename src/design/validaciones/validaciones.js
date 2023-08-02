const digitoVerificador = T => {
  var M = 0,
    S = 1;
  for (; T; T = Math.floor(T / 10)) S = (S + T % 10 * (9 - M++ % 6)) % 11;
  return S ? S - 1 : "k";
};

export const validaRut = rutCompleto => {
  if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
  var tmp = rutCompleto.split("-");
  var digv = tmp[1];
  var rut = tmp[0];
  if (digv == "K") digv = "k";

  return digitoVerificador(rut) == digv;
};

export const validaEmail = email => {
  const er = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (er.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const validaTelefono = telefono => {
  const regex = /^[0-9\s]*$/g;
  if (telefono.length == 9 && regex.test(telefono)) {
    return true;
  }
};

export const validaTexto = telefono => {
  const regex = /^[A-Z\s]*$/g;
  if (telefono.length == 9 && regex.test(telefono)) {
    return true;
  }
};
