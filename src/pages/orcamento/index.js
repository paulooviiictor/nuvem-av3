import { Input, Radio, Space, Button, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react"
import Header from "../../components/Header"

class Orcamento extends React.Component {
    constructor() {
        super();
        this.state = {
            nome: "",
            endereco: "",
            email: "",
            telefone: "",
            instagram: "",
            profissao: "",
            preferenciaAtendimento: "Online",
            horarioReunioes: "",
            descricaoImovel: ""
        }

        this.onChangeNome = this.onChangeNome.bind(this)
        this.onChangeEndereco = this.onChangeEndereco.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeTelefone = this.onChangeTelefone.bind(this)
        this.onChangeInstagram = this.onChangeInstagram.bind(this)
        this.onChangeProfissao = this.onChangeProfissao.bind(this)
        this.onChangePreferenciaAtendimento = this.onChangePreferenciaAtendimento.bind(this)
        this.onChangeHorarioReunioes = this.onChangeHorarioReunioes.bind(this)
        this.onChangeDescricao = this.onChangeDescricao.bind(this)
        this.cadastrar = this.cadastrar.bind(this)

    }

    onChangeNome(e) {
        this.setState({ nome: e.target.value });
    }
    onChangeEndereco(e) {
        this.setState({ endereco: e.target.value });
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    onChangeTelefone(e) {
        this.setState({ telefone: e.target.value });
    }
    onChangeInstagram(e) {
        this.setState({ instagram: e.target.value });
    }
    onChangeProfissao(e) {
        this.setState({ profissao: e.target.value });
    }
    onChangePreferenciaAtendimento(e) {
        this.setState({ preferenciaAtendimento: e.target.value });
    }
    onChangeHorarioReunioes(e) {
        this.setState({ horarioReunioes: e.target.value });
    }
    onChangeDescricao(e) {
        this.setState({ descricaoImovel: e.target.value });
    }


    cadastrar() {
        let orcamentos = new Array();

        if (localStorage.hasOwnProperty("orcamentos")) {
            orcamentos = JSON.parse(localStorage.getItem("orcamentos"))
        }

        orcamentos.push({
            nome: this.state.nome,
            endereco: this.state.endereco,
            email: this.state.email,
            telefone: this.state.telefone,
            instagram: this.state.instagram,
            profissao: this.state.profissao,
            preferenciaAtendimento: this.state.preferenciaAtendimento,
            horarioReunioes: this.state.horarioReunioes,
            descricaoImovel: this.state.descricaoImovel
        });

        localStorage.setItem("orcamentos", JSON.stringify(orcamentos))

        message.success("Orçamento cadastrado com sucesso!")
        this.limparCampos();
    }

    limparCampos() {
        this.setState({
            nome: "",
            endereco: "",
            email: "",
            telefone: "",
            instagram: "",
            profissao: "",
            preferenciaAtendimento: "Online",
            horarioReunioes: "",
            descricaoImovel: ""
        })
    }

    render() {
        return (
            <>
                <Header />
                <div style={{ paddingLeft: '3em' }}>
                    <div style={{ display: 'grid ' }}>
                        {`Nome completo: `}
                        <Input
                            style={{ width: '50%' }}
                            placeholder={"Informe aqui seu nome completo"}
                            value={this.state.nome}
                            onChange={(e) => this.onChangeNome(e)} />
                    </div>

                    <div style={{ display: 'grid ', marginTop: '1em' }}>
                        {`Endereço: `}
                        <Input
                            style={{ width: '50%' }}
                            placeholder={"Informe seu endereço"}
                            value={this.state.endereco}
                            onChange={(e) => this.onChangeEndereco(e)} />

                    </div>

                    <div style={{ display: 'grid ', marginTop: '1em' }}>
                        {`E-mail: `}
                        <Input
                            style={{ width: '50%' }}
                            placeholder={"Exemplo: meuemail@tipoemail.com"}
                            value={this.state.email}
                            onChange={(e) => this.onChangeEmail(e)} />

                    </div>

                    <div style={{ display: 'grid ', marginTop: '1em' }}>
                        {`Telefone: `}
                        <Input
                            style={{ width: '50%' }}
                            placeholder={"Informe seu telefone"}
                            value={this.state.telefone}
                            onChange={(e) => this.onChangeTelefone(e)} />
                    </div>

                    <div style={{ display: 'grid ', marginTop: '1em' }}>
                        {`Instagram: `}
                        <Input
                            style={{ width: '50%' }}
                            placeholder={"Informe seu instagram, se tiver"}
                            value={this.state.instagram}
                            onChange={(e) => this.onChangeInstagram(e)} />

                    </div>

                    <div style={{ display: 'grid ', marginTop: '1em' }}>
                        {`Profissão: `}
                        <Input
                            style={{ width: '50%' }}
                            placeholder={"Informe aqui sua profissão"}
                            value={this.state.profissao}
                            onChange={(e) => this.onChangeProfissao(e)} />

                    </div>

                    <div style={{ display: 'grid ', marginTop: '1em' }}>
                        {`Preferência Atendimento: `}
                        <Radio.Group
                            onChange={(e) => this.onChangePreferenciaAtendimento(e)}
                            value={this.state.preferenciaAtendimento}>
                            <Space direction="horizontal">
                                <Radio value={"Online"}>Online</Radio>
                                <Radio value={"Presencial"}>Presencial</Radio>
                            </Space>
                        </Radio.Group>
                    </div>

                    <div style={{ display: 'grid ', marginTop: '1em' }}>
                        {`Preferência de horário de atendimento: `}
                        <Input
                            style={{ width: '50%' }}
                            placeholder={"Informe aqui sua preferência de horários de atendimento"}
                            value={this.state.horarioReunioes}
                            onChange={(e) => this.onChangeHorarioReunioes(e)} />
                    </div>

                    <div style={{ display: 'grid ', marginTop: '1em' }}>
                        {`Descrição do projeto: `}
                        <TextArea
                            style={{ width: '50%' }}
                            placeholder={"Descreva seu projeto"}
                            value={this.state.descricaoImovel}
                            onChange={(e) => this.onChangeDescricao(e)} />
                    </div>

                    <div style={{ marginTop: '2em', marginLeft: '36em' }}>
                        <Button
                            type="primary"
                            onClick={this.cadastrar}>
                            Cadastrar orçamento
                        </Button>
                    </div>
                    <br />
                </div>
            </>
        )
    }
}
export default Orcamento