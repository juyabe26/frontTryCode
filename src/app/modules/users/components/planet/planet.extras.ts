import { Validators } from '@angular/forms';
import { FieldConfig } from '../../../../core/elements/field.interface';


export const regConfigPlaneta: FieldConfig[] = [
   

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
        type: 'button',
        label: 'Buscar'
    }
];
