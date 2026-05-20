export const formatCurrencyBRL = (value: string | number): string => {
  if (value === "" || value === null || value === undefined) return "";

  let amount: number;

  if (typeof value === "number") {
    amount = value;
  } else {
    const onlyNumbers = value.replace(/\D/g, "");
    if (!onlyNumbers) return "";
    amount = Number(onlyNumbers) / 100;
  }

  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};



export const maskTelefone = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2")
    .slice(0, 15);
};

export const maskName = (name?: string) => {
  if (!name) return "";

  return name
    .replace(/[0-9]/g, "")
    .replace(/\s+/g, " ")
    .trimStart();
};  