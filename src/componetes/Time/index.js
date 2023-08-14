import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
// duas maneiras de fazer um style inline c variavel e c objeto
    return (
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corDeFundo }}>{props.nome}</h3>
            <div className='colaboradores'>
                 {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo}  imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Time
