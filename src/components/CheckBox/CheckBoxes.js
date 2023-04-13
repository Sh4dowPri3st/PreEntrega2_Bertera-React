import React, { useState } from "react";

function CheckBoxes() {
    const [recibirSeleccionado, setRecibirSeleccionado] = useState(false);

    function handleRecibirChange() {
        setRecibirSeleccionado(!recibirSeleccionado);
    }

    return (
        <div>
        <label>
            <input 
            type="checkbox"
            id="recibir"
            checked={recibirSeleccionado}
            onChange={handleRecibirChange}
            />
            Recibir catalogos de promociones mensuales
        </label>
        <br />
        <label >
            <input className="checkMargin"
            type="checkbox"
            checked
            id="aceptar"
            disabled={!recibirSeleccionado}
            />
            Aceptar términos y condiciones
        </label>
        </div>
    );
}

export default CheckBoxes;