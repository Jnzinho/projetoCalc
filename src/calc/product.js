import axios from 'axios';

export default async function product(...args) {
  // const url = `http://api.mathjs.org/v4/?expr=${a}%2B${b}`;
  let url = `http://api.mathjs.org/v4/?expr=`;
  // Adicionar ao fim do URL o novo numero passado nos arguments
  try {
    for (let i = 0; i < args.length; i++) {
      if (args.length - 1 === i) {
        url = url + `${args[i]}`;
      } else {
        url = url + `${args[i]}*`;
      }
    }
    const finalUrl = await axios.get(url);
    return finalUrl.data;
  } catch (err) {
    console.error(`${err}`);
  }
}
