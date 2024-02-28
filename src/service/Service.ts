import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmaciaapi-0496.onrender.com/swagger-ui/index.html#/'
})

export const buscar = async (url: string, setDados: Function) => {
    const resp = await api.get(url)
    setDados(resp.data)
}
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resp = await api.post(url, dados)
    setDados(resp.data)
}


export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resp = await api.put(url, dados)
    setDados(resp.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}