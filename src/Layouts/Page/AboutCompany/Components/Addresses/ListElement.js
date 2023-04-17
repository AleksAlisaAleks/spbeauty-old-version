import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <div className='flex-grow-1 p-2'>{props.children}</div>
            <IconOnlyButton icon={<EditIcon/>}/>
            <IconOnlyButton icon={<RemoveIcon/>}/>
        </div>
    );
}

export default ListElement;