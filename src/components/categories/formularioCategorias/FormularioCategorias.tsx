import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../model/Categoria';
import { atualizar, buscar, cadastrar } from '../../../service/Service';
import { RotatingLines } from 'react-loader-spinner';

function FormularioCategorias() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar('/categorias/${id}', setCategoria)
        } catch (error: any) {
            alert("Categoria não encontrada!")
            console.log(error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/home")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar('/categorias', categoria, setCategoria)
                alert('Categoria atualizada com sucesso!')
            } catch (error: any) {
                alert("Erro ao buscar Categoria")
                console.log(error);
            }
        } else {
            try {
                await cadastrar('/categorias', categoria, setCategoria)
                alert('A Categoria foi atualizada com sucesso!')
            } catch (error: any) {
                alert("Erro ao buscar pela Categoria")
                console.log(error);
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Favor adicionar a descrição da categoria"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-slate-400
                               hover:bg-slate-600 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">

                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }

                </button>
            </form>
        </div>
    )
}

export default FormularioCategorias