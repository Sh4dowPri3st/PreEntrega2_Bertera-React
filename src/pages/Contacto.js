import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import "./Contacto.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import CheckBoxes from '../components/CheckBox/CheckBoxes';

const Contacto = ()=> {
  
  return (
    <div className="form">
      <div>
        <h1 className='marginnn'>CONTACTA CON NOSOTROS</h1>

        {/* <FormGroup>
          <FormControlLabel id="recibir" className='jc' control={<Checkbox  />} label="Recibir catalogo de promociones mensuales" />
          <FormControlLabel id="aceptar" className='jc' control={<Checkbox />} label="Acepto terminos y condiciones" />
        </FormGroup> */}

          
        <FormGroup>
          <FormControlLabel className='jc' control={<Switch  />} label="Venta mayorista" />
          <FormControlLabel className='jc' control={<Switch />} label="Solo por whats app ( sin llamadas)" />
        </FormGroup>
      </div>

      <div className='marginnn'>
        <TextField label="Numero"  color="secondary" focused />
      </div>
      
      <div className='marginnn'>
        <TextField label="Email"  color="secondary" focused />
      </div>

      <div className='marginnn'>
        <Box>
          <TextField  fullWidth label="Escribe tu consulta" color="secondary"  focused id="fullWidth" />
        </Box>
      </div>
      <div className='enviarDiv'> 
        <Button variant="contained" color="success">ENVIAR</Button>
        <CheckBoxes/>
      </div>
    </div>
  );
}

export default Contacto