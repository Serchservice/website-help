import Spacer from "../../../components/Spacer";
import Shimmer from "../../../components/shimmer/Shimmer";
import ItemGenerator from "../../../config/ItemGenerator";

const HelpLoading = () => {
    return (
        <div style={{ width: "100%" }}>
            <Shimmer height={40} percentWidth="85%"/>
            <Spacer height={"15px"}/>
            <Shimmer height={40} percentWidth="60%"/>
            <Spacer height={"60px"}/>
            {
                ItemGenerator({length: 10}).map((_, key) => {
                    return (
                        <div key={ key }>
                            <Shimmer height={18} percentWidth="100%"/>
                            <Spacer height={"8px"}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HelpLoading;