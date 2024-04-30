export const handleValidation = (event, errors, setErrors) => {
    const {name, value } = event.target
    
    let error = ""
    switch (name) {
        case 'name':
        error = value.trim() === '' ? 'Vänligen fyll i namnet' : '';
        break;
        case 'picture':
        error = value.trim() === '' ? 'Vänligen fyll i en bildlänk' : '';
        break;
        case 'description':
        error = value.trim() === ''? 'Vänligen skriv en beskrivning' : '';
        break;
        
        case 'price':
        error = value.trim() === ''? 'Vänligen fyll i priset' : '' ;
        break;  
        case 'category':
        error = value.trim() === ''? 'Vänligen fyll i kategorin' : '';
        break;
        
        default:
        break;
    }
    setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error
    }));
    
}