import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";

function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className="row mt-5">
                <div className="col-md-6">
                    <General />
                </div>
                <div className="col-md-6">
                    <Addresses />
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;