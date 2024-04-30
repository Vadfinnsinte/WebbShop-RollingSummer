export const handleValidation = (event, errors, setErrors) => {
    const {name, value } = event.target
    console.log("name: ", name, "value: ", value);
    let error = ""
    switch (name) {
        case 'name':
            error = value.trim() === '' ? 'Namnet är obligatoriskt' : '';
            break;
        case 'picture':
            error = value.trim() === '' ? 'Bildlänk är obligatorisk' : '';
            break;
            case 'description':
             error = value.trim() === ''? 'Beskrivning är obligatoriskt' : '';
            break;

            case 'price':
             error = value.trim() === ''? 'Priset är obligatorisk' : '' ;
            break;  
            case 'category':
                error = value.trim() === ''? 'typ av mat är obligatorisk' : '';
               break;

        default:
            break;
    }

     setErrors(prevErrors => ({
         ...prevErrors,
         [name]: error
     }));
 }