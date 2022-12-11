import { Layout, Table } from "antd";
import React from "react"
import Header from "../../components/Header"

const columns = [
    { title: 'Nome', dataIndex: 'nome', key: 'nome' },
    { title: 'Endereço', dataIndex: 'endereco', key: 'endereco' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Telefone', dataIndex: 'telefone', key: 'telefone' },
    { title: 'Instagram', dataIndex: 'instagram', key: 'instagram' },
    { title: 'Profissão', dataIndex: 'profissao', key: 'profissao' },
    { title: 'Preferencia de atendimento', dataIndex: 'preferenciaAtendimento', key: 'preferenciaAtendimento' },
    { title: 'Horário para reunioes', dataIndex: 'horarioReunioes', key: 'horarioReunioes' },
    { title: 'Descrição do imóvel', dataIndex: 'descricaoImovel', key: 'descricaoImovel' }
]

class SobreNos extends React.Component {

    constructor() {
        super();
        this.state = {
            orcamentos: []
        }

        this.carregarOrcamentos = this.carregarOrcamentos.bind(this)
    }

    carregarOrcamentos() {
        if (localStorage.hasOwnProperty("orcamentos")) {
            let orcamentos = JSON.parse(localStorage.getItem("orcamentos"))
            let lista = new Array();

            orcamentos.map((e) => {
                lista.push(e)
            })

            console.log('lista', lista)

            this.setState({ orcamentos: lista })
        }
    }

    componentDidMount() {
        this.carregarOrcamentos()
    }

    render() {
        return (
            <>
                <Header />
                <Table
                    size="large"
                    dataSource={this.state.orcamentos}
                    columns={columns} />

            </>
        )
    }
}
export default SobreNos