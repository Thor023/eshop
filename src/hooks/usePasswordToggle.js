import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false)  
    
    const icon = (
        <FontAwesomeIcon 
            icon={ visible ? 'eye-slash' : 'eye' } 
            onClick={() => setVisible(visibility => !visibility)}
            color='#15ADFF'
            beat
            fixedWidth
        />
    )

    const inputType = visible ? 'text' : 'password'

    return [inputType, icon]
}

export default usePasswordToggle