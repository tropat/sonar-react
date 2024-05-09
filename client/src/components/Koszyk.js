import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Koszyk = ({ koszyk, setKoszyk }) => {

    useEffect(() => {
        const fetchKoszyk = async () => {
            try {
                const response = await axios.get('http://localhost:8080/koszyk/1', {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                setKoszyk(response.data);
            } catch (error) {
                console.error('Błąd podczas pobierania danych koszyka:', error);
            }
        };

        fetchKoszyk();
    }, []);

    return (
        <div>
            <h2>Koszyk</h2>
            <ul>
                {koszyk.Produkty?.map(produkt => (
                    <li key={produkt.ID}>Produkt {produkt.Nazwa} Kategorii {produkt.KategoriaID}: {produkt.Cena} zl</li>
                ))}
            </ul>
        </div>
    );
};

Koszyk.propTypes = {
    koszyk: PropTypes.shape({
        Produkty: PropTypes.arrayOf(
            PropTypes.shape({
                ID: PropTypes.number.isRequired,
                Nazwa: PropTypes.string.isRequired,
                KategoriaID: PropTypes.number.isRequired,
                Cena: PropTypes.number.isRequired
            })
        ).isRequired
    }).isRequired,
    setKoszyk: PropTypes.func.isRequired,
};

export default Koszyk;
