import Spacer from "../../../components/Spacer";
import Shimmer from "../../../components/shimmer/Shimmer";
import ItemGenerator from "../../../config/ItemGenerator";

const SectionLoading = () => {
    return (
        <div className='section-body'>
            <div className='section-body-left'>
                <div className='section-body-left-header'>
                    <div className='section-body-left-header-dropdown'>
                        <Shimmer height={50} percentWidth='100%'/>
                    </div>
                    <div className='section-body-left-header-menu'>
                        <Shimmer height={50} width={50}/>
                    </div>
                </div>
                <Spacer height={"20px"}/>
                <div className='section-body-left-search'>
                    <Shimmer height={60} percentWidth='100%'/>
                    <Spacer height={"70px"}/>
                </div>
                <div className="section-body-left-contents">
                    {
                        ItemGenerator(length = 5).map((_, key) => {
                            return (
                                <div key={ key } style={{width: "100%"}}>
                                    <div style={{height: "15px"}} key={ key }></div>
                                    <Shimmer height={60} percentWidth='100%'/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='section-body-right' style={{alignItems: "center"}}></div>
        </div>
    )
}

export default SectionLoading;