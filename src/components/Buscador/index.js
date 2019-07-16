import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Buscador extends Component {
    state = {
        categoria : 'general'
    }

    cambiarCategoria = e =>{
        // console.log('e', e.target.value)
        const categoria = e.target.value;
        this.setState({ categoria }, () => {
            this.props.consultar(this.state.categoria);
        });
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra Noticias por Categoría</h2>
                        <div className="input-field col s12">
                            <select onChange={this.cambiarCategoria}>
                                <option value="general">general</option>
                                <option value="business">business</option>
                                <option value="entertainment">entertainment</option>
                                <option value="health">health</option>
                                <option value="science">science</option>
                                <option value="sports">sports</option>
                                <option value="technology">technology</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Buscador.propTypes = {
    consultar : PropTypes.func.isRequired
};

export default Buscador;