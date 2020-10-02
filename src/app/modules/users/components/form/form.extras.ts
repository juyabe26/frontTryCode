import { Validators } from '@angular/forms';
import { FieldConfig } from './../../../../core/elements/field.interface';


export const regConfig: FieldConfig[] = [
    {
        type: 'input',
        label: 'Primer nombre',
        inputType: 'text',
        name: 'primerNombre',
        validations: [{ name: 'required', validator: Validators.required, message: 'Campo requerido' },]
    },
    {
        type: 'input',
        label: 'Primer apellido',
        inputType: 'text',
        name: 'primerApellido',
        validations: [{ name: 'required', validator: Validators.required, message: 'Campo requerido' },]
    },
    {
        type: 'input',
        label: 'Segundo nombre',
        inputType: 'text',
        name: 'segundoNombre',
    },
    {
        type: 'input',
        label: 'Segundo apellido',
        inputType: 'text',
        name: 'segundoApellido',
    },
    {
        type: 'date',
        label: 'Fecha de nacimiento',
        name: 'fechaNacimiento',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Fecha de nacimiento requerida'
            }
        ]
    },
    {
        type: 'input',
        label: 'Identificacion',
        inputType: 'number',
        name: 'identificacion',
        validations: [{ name: 'required', validator: Validators.required, message: 'Campo requerido' },]
    },
    {
        type: 'input',
        label: 'Dirección',
        inputType: 'text',
        name: 'direccion',
        validations: [{ name: 'required', validator: Validators.required, message: 'Campo requerido' },]
    },
    {
        type: 'input',
        label: 'Teléfono',
        inputType: 'number',
        name: 'telefono',
        validations: [{ name: 'required', validator: Validators.required, message: 'Campo requerido' },]
    },
    {
        type: 'select',
        label: 'Género',
        name: 'idGenero',
        value: null,
        options: [
            { id: null, description: '' }, 
            { id: 1, description: 'Masculino' }, 
            { id: 2, description: 'Femenino' },
        ]
    },
    {
        type: 'select',
        label: 'Planetas',
        name: 'idPlaneta',
        value: null,
        options: [
            { id: null, description: '' }, 
            { id: 1, description: 'Tierra' }, 
            { id: 2, description: 'Marte' }, 
            { id: 3, description: 'Venus' },
        ]
    },
    {
        type: 'input',
        label: 'Edad',
        inputType: 'number',
        name: 'edad',
    },
    {
        type: 'input',
        label: 'Peso',
        inputType: 'number',
        name: 'peso',
    },
    {
        type: 'button',
        label: 'Guardar'
    }
];
