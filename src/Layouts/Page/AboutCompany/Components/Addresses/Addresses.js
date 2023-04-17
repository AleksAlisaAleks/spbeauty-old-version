import PrimaryButton from "../../../../../Components/PrimaryButton";
import ListElement from "./ListElement";

const title = {
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '24px',
  letterSpacing: '0em',
  textAlign: 'left',
  marginLeft: '9px',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  border: '1px solid #E2E8F0',
  borderRadius: '4px',
  padding: '20px 16px',
  marginRight: '100px',
};

function Addresses() {
  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={title}>Адреса заведений</div>
        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
      </div>
      <PrimaryButton style={{ alignSelf: 'flex-end' }}>Добавить филиал</PrimaryButton>
    </div>
  );
}

export default Addresses;