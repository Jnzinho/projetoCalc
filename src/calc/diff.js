import axios from 'axios';

export default async function diff(...args) {
  let url = `http://api.mathjs.org/v4/?expr=`;

  try {
    for (let i = 0; i < args.length; i++) {
      if (args.length - 1 === i) {
        url = url + `${args[i]}`;
      } else {
        url = url + `${args[i]}-`;
      }
    }
    const finalUrl = await axios.get(url);
    if (finalUrl.status != 200) throw new Error('Erro ao acessar a API');
    return finalUrl.data;
  } catch (err) {
    console.error(`${err}`);
  }
  // Adicionar ao fim do URL o novo numero passado nos arguments
}
