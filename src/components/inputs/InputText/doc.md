## InputText

Dependiendo que params le envie cambiará sus estilos. recibe los sgts params:

- err ?: string
- async ?: boolean
- loading ?: boolean
- success ?: boolean

err lo tiene por defecto, y async habilita loading y success. Depende de usted que no se crucen los params. También recibe:

- className ?: string
- title ?: string

El input orignal está wrapper por un label, pero recibe todas las props posibles para un input de tipo texto y serán agg al mismo. Sin embargo no podrá cambiar el type. className es agg al label y hará un join de su className base a la envia por props.
