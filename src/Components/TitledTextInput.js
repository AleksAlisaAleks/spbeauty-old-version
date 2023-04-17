import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #152842 1px;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;
    border: 1px solid #E2E8F0;
    background-color: #F8FAFC;
    color: #666787;
    width: 447px;
    height: 36px;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

const titleStyle = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '0.75em',
    lineHeight: 1,
    color: '#94A3B8',
    marginBottom: '0.5em'
  };

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div style={titleStyle}>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;