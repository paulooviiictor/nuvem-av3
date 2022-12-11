import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';


import React from "react"
import Header from "../../components/Header"

class Apresentacao extends React.Component {
    render() {
        return (
<>
    <Header />
        <h1><center> VOCÊ ESTÁ NA PÁGINA DE APRESENTAÇÃO </center></h1>

            <body>
                <div class="content">
                     <h2>01 - Sobre</h2>
                        <p>Formado pela Universidade de Fortaleza, o arquiteto Paulo Victor Costa atua em todo território brasileiro, 
                            com filial do seu escritório no Ceará. Sua arquitetura tem como pontos primordiais o conforto, a brasilidade 
                            e a funcionalidade, em espaços que mesclam a sofisticação com o aconchego. Os projetos desenvolvidos no escritório
                            buscam a valorização das artes visuais, dos artesãos e dos materiais naturais, sempre com  traços simples, sem excessos
                            e com o olhar apurado para as principais tendências mundiais e locais.</p>
                </div>
            </body>           
</>
        )
    }
}


export default Apresentacao