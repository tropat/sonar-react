import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Platnosci = ({ formData, setFormData }) => {
    const handleInputChange = event => {
        const { name, value } = event.target;
        let newValue = name === "Cena" ? parseFloat(value) : value;
        if(name === "Cena") {
            newValue = parseFloat(value);
        } else if(name === "KategoriaID") {
            newValue = parseInt(value);
        }
        setFormData({ ...formData, [name]: newValue });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            console.log(formData);
            await axios.post('http://localhost:8080/produkty', formData, {});
            console.log('Dane zostały wysłane');
        } catch (error) {
            console.error('Błąd podczas wysyłania danych:', error);
        }
    };

    return (
        <div>
            <h2>Płatności</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Nazwa" placeholder="Nazwa produktu" onChange={handleInputChange} />
                <br/>
                <input type="text" name="Cena" placeholder="Cena" onChange={handleInputChange} />
                <br/>
                <input type="text" name="KategoriaID" placeholder="Kategoria" onChange={handleInputChange} />
                <br/>
                <button type="submit">Zatwierdź</button>
            </form>
        </div>
    );
};

Platnosci.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
};

export default Platnosci;