import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '120px' : props.minWidth; 
    const Button = styled.div`
        background: #FFFFFF;
        border: 1px solid #152842;
        border-radius: 24px;
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        min-width: ${minWidth};
        color:  #64748B;
        &:hover {
            background: #3B82F6;
            border-color: transparent;
            color:  #FFFFFF;
        }
        &:active {
            background: #152842;
            border-color: transparent;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;